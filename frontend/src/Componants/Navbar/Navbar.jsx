import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll'; // For smooth scrolling

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Effect: Add sticky class on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle Menu Visibility
    const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

    // Render Navigation Links
    const navLinks = [
        { name: 'Home', to: 'home-section' },
        { name: 'Program', to: 'program-section' },
        { name: 'About Us', to: 'about-us-section' },
        { name: 'Clubs & Teams', to: 'clubs-teams-section' },
        { name: 'Contact Us', to: 'contact', button: true }, // Mark Contact Us as a button
    ];

    return (
        <nav className={`navbar ${isSticky ? 'dark-nav' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <img src={logo} alt="Logo" className="logo" />

                {/* Mobile Menu Toggle */}
                <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Navbar Links */}
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={800}
                                offset={-50}
                                className={link.button ? 'btn contact-btn' : ''}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
