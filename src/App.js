// App.js
import React, { useState, useEffect } from 'react';
import EventList from './components/EventList';

function App() {
  return (
    <div className="App">
      <h1>Events</h1>
      <EventList />
    </div>
  );
}

export default App;
