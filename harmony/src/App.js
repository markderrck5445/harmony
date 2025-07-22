import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './componets/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product" element={<Product/>} />
        </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
