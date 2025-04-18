import React, { useState } from 'react';


const NumberOfEvents = ({ setNumberOfEvents }) => {
  const [number, setNumber] = useState(32); // default value

  const handleInputChanged = (event) => {
    const value = parseInt(event.target.value);
    setNumber(value);
    if (setNumberOfEvents) {
      setNumberOfEvents(value);
    }
  };

  return (
    <div id="number-of-events" data-testid="number-of-events">
      <label htmlFor="num-events-input">Number of events:</label>
      <input
        id="num-events-input"
        type="number"
        value={number}
        onChange={handleInputChanged}
        min="1"
        role="textbox"
        data-testid="number-of-events-input"
      />
    </div>
  );
};

export default NumberOfEvents;