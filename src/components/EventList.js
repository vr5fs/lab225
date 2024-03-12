// EventList.js
import React, { useState, useEffect } from 'react';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('https://karnakar04.github.io/events/events.json');
      const data = await response.json();
      setEvents(data.events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Name of the Event</th>
            <th>Date of the Event</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.slNo}>
              <td>{event.slNo}</td>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td><a href={event.details}>View details</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventList;
