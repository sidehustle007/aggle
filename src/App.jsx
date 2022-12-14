import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HowToGame from './pages/HowToGame';
import PayDone from './pages/PayDone';
import Is404 from './pages/404';

function App() {
  return (
    <Router>
    <div className="selection:bg-pink-300 dark:selection:bg-pink-500 bg-[url('')] dark:bg-[#f8ff1d] min-h-screen dark:text-black">
      <Navbar />
      
    <div className="container mx-auto flex justify-center">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/howto" element={<HowToGame />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/paydone" element={<PayDone />} />
        <Route path="/*" element={<Is404 />} />
      </Routes>
    </div>
      
    </div>
    </Router>
  )
}

export default App
