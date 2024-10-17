// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Find from './components/Find.jsx';
import Report from './components/Report.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>

        {/* Default Route */}
        <Route path="/" element={<Home />} />
        
        {/* Other Routes */}
        <Route path="/about" element={<Find />} />
        <Route path="/contact" element={<Report />} />

      </Routes>
    </Router>
  );
}

export default App;