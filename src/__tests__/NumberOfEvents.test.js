import { render, screen, fireEvent  } from '@testing-library/react';
import React from 'react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    const setNumberOfEvents = jest.fn(); 
    const setErrorAlert = jest.fn(); // Mocked setErrorAlert here

    test('contains an input textbox with the correct role', () => {
        render(<NumberOfEvents setNumberOfEvents={() => {}} setErrorAlert={setErrorAlert}/>); // use setErrorAlert here
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
    }); 

    test('renders NumberOfEvents component', () => {
        render(<NumberOfEvents setNumberOfEvents={() => {}} setErrorAlert={setErrorAlert}/>); // use setErrorAlert here
        expect(screen.getByTestId('number-of-events')).toBeInTheDocument();
    });
  
    test('renders input field with correct initial value', () => {
        render(
            <NumberOfEvents
                setNumberOfEvents={setNumberOfEvents}
                setErrorAlert={setErrorAlert} // use setErrorAlert here
            />
        );
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue(32); // default state
    });
     
    test('updates the value when user types in input', () => {
        render(
            <NumberOfEvents
                setNumberOfEvents={setNumberOfEvents}
                setErrorAlert={setErrorAlert} // use setErrorAlert here
            />
        );
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: '10' } });
        expect(inputElement).toHaveValue(10);
    });
});
