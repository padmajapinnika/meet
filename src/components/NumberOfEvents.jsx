import React, { useState } from 'react';


const NumberOfEvents = ({ currentNOE, setCurrentNOE  }) => {
  const [number, setNumber] = useState(32); // default value

  const handleInputChanged = (event) => {
    const value = parseInt(event.target.value);
    setNumber(value);
    if (!isNaN(value) && value > 0) {
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events" data-testid="number-of-events">
      <label htmlFor="num-events-input">Number of events:</label>
      <input
        type="number"
        data-testid="number-of-events-input"
        id="num-events-input"
        min="1"
        value={number}
        onChange={handleInputChanged}
      />


     
    </div>
  );
};

export default NumberOfEvents;