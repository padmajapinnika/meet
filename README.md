# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

task4.1

Feature 2: Show/Hide Event Details
As a user,
I should be able to expand an event
so that I can see more details about it.
Gherkin
Given the user sees a collapsed event element
When the user clicks the “Show Details” button
Then the event element should expand to show more details
As a user,
I should be able to collapse an expanded event
so that I can hide details I no longer need.
Gherkin
Given the user sees an expanded event element
When the user clicks the “Hide Details” button
Then the event element should collapse and hide the details

Feature 3: Specify Number of Events
As a user,
I should be able to view 32 events by default
so that I’m not overwhelmed with too much data initially.
Gherkin
Given the user has not changed the number of events
When the event list is displayed
Then 32 events should be shown by default
As a user,
I should be able to change the number of events shown
so that I can control how much information I want to see.
Gherkin
Given the user wants to see more or fewer events
When the user enters a new number into the event count input
Then that number of events should be displayed in the event list

Feature 4: Use the App When Offline
As a user,
I should be able to see cached event data when offline
so that I can still view information without an internet connection.
Gherkin
Given the user has previously loaded event data
And the user goes offline
When the user opens the app
Then cached event data should be displayed

Feature 5: Add an App Shortcut to the Home Screen
As a user,
I should be able to install the Meet app on my device
so that I can easily access it from my home screen like a native app.
Gherkin
Given the user is using a supported browser
When the user chooses to install the Meet app
Then the app should be added to the user’s home screen

Feature 6: Display Charts Visualizing Event Details
As a user,
I should be able to see a chart of the number of upcoming events in each city
so that I can visually compare how active different cities are.
Gherkin
Given the user is viewing the main page of the app
When events from different cities are loaded
Then a chart should display the number of events per city
