// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
const App = () => {
  return (
    <Router>
      
      
      <div className="app-wrapper">
      <div className="app-content">
      <Header />
        {/* your other components here */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
     
      <Footer />
    </div>
    </Router>
  );
};

export default App;
