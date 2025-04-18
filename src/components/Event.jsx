import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li className="event" data-testid="event-item">
      <h2>{event.summary}</h2>
      <p>{new Date(event.created).toString()}</p>
      <p>{event.location}</p>
      <button onClick={handleToggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <p data-testid="event-description"> {event.description}</p>} {/* Event description is shown or hidden */}
    </li>
  );
};

export default Event;