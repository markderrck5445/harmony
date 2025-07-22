import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


// Then add to a link:


    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <h2></h2>
                </div>

                {/* Desktop Menu */}
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="navbar-link">About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/products" className="navbar-link">Beauty Products</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact" className="navbar-link">Contact</Link>
                    </li>
                </ul>

                {/* Hamburger Menu */}
                <div className="navbar-hamburger" onClick={toggleMenu}>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <button className="close-btn" onClick={closeMenu}>
                        <span className="close-line"></span>
                        <span className="close-line"></span>
                    </button>
                </div>
                <ul className="mobile-menu-items">
                    <li className="mobile-menu-item">
                        <Link to="/" className="mobile-menu-link" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="mobile-menu-item">
                        <Link to="/about" className="mobile-menu-link about-link" onClick={closeMenu}>About</Link>
                    </li>
                    <li className="mobile-menu-item">
                        <Link to="/products" className="mobile-menu-link" onClick={closeMenu}>Beauty Products</Link>
                    </li>
                    <li className="mobile-menu-item">
                        <Link to="/contact" className="mobile-menu-link" onClick={closeMenu}>Contact us</Link>
                    </li>
                </ul>
            </div>

            {/* Overlay */}
            {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
        </nav>
    );
}

export default Navbar;