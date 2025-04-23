import React, { useEffect, useState } from 'react';

const NumberOfEvents = ({ currentNOE = 32, setCurrentNOE, setErrorText }) => {
  const [number, setNumber] = useState(32);

  useEffect(() => {
    setNumber(currentNOE);
  }, [currentNOE]);

  const handleInputChanged = (event) => {
    const value = Number(event.target.value);
    setNumber(value);
    setCurrentNOE && setCurrentNOE(value);
  
    let errorText = '';
    if (isNaN(value)) {
      errorText = 'Please enter a valid number to see the events';
    } else if (value < 1) {
      errorText = 'Please enter a number greater than zero to see the events';
    }
  
    setErrorText && setErrorText(errorText);
  };
  
  
  return (
    <div id="number-of-events" data-testid="number-of-events">
      <label htmlFor="num-events-input">Number of events:</label>

      <input
        id="num-events-input"
        type="number"
        value={isNaN(number) ? '' : number}
        onChange={handleInputChanged}
        //min="1"
        role="textbox"
        //aria-label="Number of events"
      />
    </div>
  );
};

export default NumberOfEvents;