import mockData from './mock-data';
import NProgress from 'nprogress';

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

const checkToken = async (accessToken) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  );
  const result = await response.json();
  return result;
 };

/**
 *
 * This function will fetch the list of all events
 */
export const getEvents = async () => {
  NProgress.start();

  if (!navigator.onLine) {
    const events = localStorage.getItem("lastEvents");
    NProgress.done();
    return events ? JSON.parse(events) : [];
  }

  if (window.location.href.startsWith("http://localhost")) {
    NProgress.done();
    return mockData;
  }

  const token = await getAccessToken();
  if (token) {
    removeQuery();
    const url =  "https://5twp0s8il5.execute-api.us-east-1.amazonaws.com/dev/api/get-events" + "/" + token;
    const response = await fetch(url);
    const result = await response.json();

    if (result) {
      localStorage.setItem("lastEvents", JSON.stringify(result.events)); // <-- ✅ Save to localStorage
      NProgress.done();
      return result.events;
    } else {
      NProgress.done();
      return null;
    }
  }

  NProgress.done();
};
export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));
 if (!accessToken || tokenCheck.error) {
   await localStorage.removeItem("access_token");
   const searchParams = new URLSearchParams(window.location.search);
   const code = await searchParams.get("code");
   if (!code) {
     const response = await fetch(
       "https://5twp0s8il5.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url"
     );
     const result = await response.json();
     const { authUrl } = result;
     return (window.location.href = authUrl);
   }
   return code && getToken(code);
 }
 return accessToken;

};



const removeQuery = () => {
  let newurl;
  if (window.history.pushState && window.location.pathname) {
    newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
 };


 const getToken = async (code) => {
  try {
    const encodeCode = encodeURIComponent(code);
 
    const response = await fetch("https://5twp0s8il5.execute-api.us-east-1.amazonaws.com/dev/api/token" + '/' + encodeCode);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const { access_token } = await response.json();
    access_token && localStorage.setItem("access_token", access_token);
    return access_token;
  } catch (error) {
    error.json();
  }
 }