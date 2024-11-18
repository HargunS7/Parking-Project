import React from 'react';
import '../Styles/Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                    <h1 className="logo">Navbar</h1>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;