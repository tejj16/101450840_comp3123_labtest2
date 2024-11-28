// App.js
import React from 'react';
import Weather from './components/Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Weather Updates</h1>
      <Weather />
    </div>
  );
}

export default App;
