import { render,screen, waitFor, within} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from './../App';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });
  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });
  test('renders NumberOfEvents component', () => {
    expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument(); // Test using data-testid
  });
});
    
describe('<App /> integration', () => {
  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');
 
    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);
 
 
    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');  
 
 
    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      event => event.location === 'Berlin, Germany'
    );
 
 
    expect(allRenderedEventItems.length).toBe(berlinEvents.length);
    allRenderedEventItems.forEach(event => {
      expect(event.textContent).toContain("Berlin, Germany");
    });
  });
  test('User can change the number of events displayed', async () => {
    // Step 1: Render the App component, which includes the NumberOfEvents input field and the EventList
    render(<App />);

    // Step 2: Find the "number of events" input field by its label text
    const numberOfEventsInput = screen.getByLabelText(/number of events/i);

    // Step 3: Simulate backspacing twice to delete the default "32" and typing "10"
    await userEvent.type(numberOfEventsInput, '{backspace}{backspace}10');

    // Step 4: Wait for the number of events to update (check if the number of <Event> components displayed changes)
    await waitFor(() => {
      // Check if the number of events rendered by the EventList has changed
      const eventItems = screen.getAllByTestId('event-item'); // Make sure each Event component has a data-testid="event-item"
      expect(eventItems.length).toBe(10); // Expect 10 events to be displayed based on input
    });
  });
})