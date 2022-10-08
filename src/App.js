import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventPage from './components/EventPage';
import LandingPage from './components/LandingPage';
import './index.css';

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
