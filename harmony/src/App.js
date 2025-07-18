import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
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
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/product" element={<div>Product</div>} />
        </Routes>
        </div>
      <footer>
        <div>Footer</div>
      </footer>
    </Router>
    </>
  );
}

export default App;
