import React, { useEffect, useState } from 'react';

const NumberOfEvents = ({ currentNOE = 32, setCurrentNOE }) => {
  const [number, setNumber] = useState(currentNOE);

  useEffect(() => {
    setNumber(currentNOE);
  }, [currentNOE]);

  const handleInputChanged = (event) => {
    const value = parseInt(event.target.value);
    setNumber(value);
    if (setCurrentNOE) {
      setCurrentNOE(value);
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
        aria-label="Number of events"
      />
    </div>
  );
};

export default NumberOfEvents;
