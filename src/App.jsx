// src/App.jsx
import React from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';

import './App.css';


const App = () => {
 const [events, setEvents] = useState([]);
 const [currentNOE, setCurrentNOE] = useState(32);
 const [allLocations, setAllLocations] = useState([]);
 const [currentCity, setCurrentCity] = useState("See all cities");
 const [infoAlert, setInfoAlert] = useState("");
 const [errorText, setErrorText] = useState('');
 const [warningAlert, setWarningAlert] = useState("");


 useEffect(() => {
  if (navigator.onLine) {
    setWarningAlert("");
  } else {
    setWarningAlert("You are offline. The displayed event list has been loaded from the cache.");
  }
   fetchData();
 }, [currentCity, currentNOE]);


 const fetchData = async () => {
   const allEvents = await getEvents();
   const filteredEvents = currentCity === "See all cities" ?
   allEvents :
   allEvents.filter(event => event.location === currentCity)
   setEvents(filteredEvents.slice(0, currentNOE));
   setAllLocations(extractLocations(allEvents));
 }


 return (
   <div className="App">
    <h1>Meet App</h1>
     <div className="alerts-container">
       {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
       {errorText.length > 0 && <ErrorAlert text={errorText} />}
       {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
     </div>
    <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
    <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} setErrorText={setErrorText}/>
    
    <div className='charts-container'>
    <EventGenresChart events={events} />
    <CityEventsChart allLocations={allLocations} events={events} />
    </div>
    <EventList events={events} />
   </div>
 );
}


export default App;