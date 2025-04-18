// src/__tests__/NumberOfEvents.test.js
import { render, screen, fireEvent  } from '@testing-library/react';
import App from './../App';
import userEvent from '@testing-library/user-event';
import React from 'react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
    const setNumberOfEvents = jest.fn(); 
    const setErrorAlert = jest.fn();    
    const setCurrentNOE = jest.fn();

    test('contains an input textbox with the correct role', () => {
        render(<NumberOfEvents />);
        const numberOfEventsInput = screen.getByRole('spinbutton');

        expect(numberOfEventsInput).toBeInTheDocument();
      }); 
    test('renders NumberOfEvents component', () => {
        render(<NumberOfEvents setNumberOfEvents={() => {}} />);
        expect(screen.getByTestId('number-of-events')).toBeInTheDocument();
      });
  
    test('renders input field with correct initial value', () => {
      render(
        <NumberOfEvents
          setNumberOfEvents={setNumberOfEvents}
          setErrorAlert={setErrorAlert}
        />
      );
       const inputElement = screen.getByRole('textbox');
       expect(inputElement).toBeInTheDocument();
       expect(inputElement).toHaveValue(32); // default state
    });
     
    test('updates the value when user types in input', () => {
      render(<NumberOfEvents currentNOE={32} setCurrentNOE={setCurrentNOE} />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: '10' } });
        expect(setCurrentNOE).toHaveBeenCalledWith(10);
      });
     
    });