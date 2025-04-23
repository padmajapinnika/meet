
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';  
import Event from '../components/Event';
import mockData from '../mock-data';
describe('<Event /> component', () => {
    const mockEvent = mockData[0]; // using the first event
    let EventComponent;
  
    beforeEach(() => {
      EventComponent = render(<Event event={mockEvent} />);
    });
    test('renders event title', () => {
        // checks if the title (summary) appears in the document
        expect(EventComponent.queryByText(mockEvent.summary)).toBeInTheDocument();
      });
    test('renders event start time', () => {
        const createdTime = new Date(mockEvent.created).toString();
        expect(EventComponent.queryByText(createdTime)).toBeInTheDocument();
      });
    test('renders event location', () => {
        expect(EventComponent.queryByText(mockEvent.location)).toBeInTheDocument();
      });
    test('renders "Show Details" button', () => {
        expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
      });

    test("by default, event's details section should be hidden", () => {
        expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
      });


    test("hides the details section when the user clicks on the 'Hide Details' button", async () => {
    const user = userEvent.setup();

    // First, show the details by clicking the "Show Details" button
    await user.click(EventComponent.queryByText('Show Details'));

    // Now, click the "Hide Details" button
    await user.click(EventComponent.queryByText('Hide Details'));

    const description = EventComponent.queryByText(mockEvent.description);
    expect(description).not.toBeInTheDocument();

    // Check if the button text changes back to "Show Details"
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
});
// Test 1: Shows the details section when the user clicks on the 'Show Details' button
  test("shows the details section when the user clicks on the 'Show Details' button", async () => {
    const user = userEvent.setup();

    // Click the "Show Details" button
    await user.click(EventComponent.queryByText('Show Details'));


    expect(EventComponent.getByTestId('event-description')).toBeInTheDocument();


    // Check if the button text changes to "Hide Details"
    expect(EventComponent.queryByText('Hide Details')).toBeInTheDocument();
});
});
      
    
    
