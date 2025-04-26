import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="nav">
        <div className="nav-container">
        <Link to="/" className="nav-brand">Student Management System</Link>
        <ul className="nav-links">
            <li>
            <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
            <Link to="/students" className="nav-link">Students</Link>
            </li>
            <li>
            <Link to="/students/add" className="nav-link">Add Student</Link>
            </li>
        </ul>
        </div>
    </nav>
    );
};

export default Navbar;