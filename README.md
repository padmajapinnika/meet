<!DOCTYPE html>
<html lang="en">
<head>
  </head>
<body>

  <h1>Meet App</h1>

  <p><strong>Meet App</strong> is a <strong>React-based Progressive Web Application (PWA)</strong> that allows users to browse and filter events by city. It offers an interactive UI to search for events, visualize event data, and supports offline usage. The app integrates with the <strong>Google Calendar API</strong> and uses <strong>OAuth 2.0</strong> for secure authentication.</p>

  <h2>✨ Features</h2>
  <ul>
    <li><strong>City Search</strong>: Users can search and filter events based on the selected city.</li>
    <li><strong>Event List</strong>: Displays a list of upcoming events with details.</li>
    <li><strong>Number of Events Selector</strong>: Users can customize how many events they want to view.</li>
    <li><strong>Alerts</strong>: Provides users with information, warnings, and error messages.</li>
    <li><strong>Charts</strong>:
      <ul>
        <li>Visualizes the number of events per city.</li>
        <li>Displays event genres in a pie chart.</li>
      </ul>
    </li>
    <li><strong>OAuth Authentication</strong>: Secure login via Google.</li>
    <li><strong>Offline Support</strong>: Fetches cached events when offline and alerts users when connectivity is lost.</li>
  </ul>

  <h2>🔧 Technologies Used</h2>
  <ul>
    <li>React (with Hooks)</li>
    <li>Vite (for fast builds and development)</li>
    <li>Recharts (for data visualization)</li>
    <li>Workbox (for PWA functionality and offline support)</li>
    <li>OAuth 2.0 (for authentication)</li>
    <li>Jest, Puppeteer, and React Testing Library (for testing)</li>
    <li>HTML5, CSS3, JavaScript</li>
  </ul>

  <h2>🚀 Installation</h2>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/padmajapinnika/meet.git
cd meet</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
  </ol>

  <h2>🖥️ Running the Application Locally</h2>
  <p>Start the development server:</p>
  <pre><code>npm run dev</code></pre>
  <p>Open your browser and navigate to <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a>.</p>

  <h2>🔐 Authentication & API</h2>
  <ul>
    <li>Uses Google OAuth 2.0 for authentication.</li>
    <li>Fetches events from the Google Calendar API.</li>
    <li>If unauthorized, users are redirected to the login page.</li>
    <li>Event data is cached locally using <code>localStorage</code> for offline use.</li>
  </ul>

  <h2>📊 Data Visualization</h2>
  <ul>
    <li><strong>CityEventsChart</strong>: A scatter plot showing the number of events in different cities.</li>
    <li><strong>EventGenresChart</strong>: A pie chart displaying the distribution of event genres.</li>
  </ul>

  <h2>📦 Deployment</h2>
  <p>Build the app:</p>
  <pre><code>npm run build</code></pre>
  <p>Deploy using GitHub Pages or Vercel.</p>

  <h2>🔮 Future Enhancements</h2>
  <ul>
    <li>Add full user authentication for personalized event lists.</li>
    <li>Implement dark mode theme.</li>
    <li>Enhance event filtering and search capabilities.</li>
  </ul>

  <h2>📄 License</h2>
  <p>This project is licensed under the MIT License.</p>

</body>
</html>
