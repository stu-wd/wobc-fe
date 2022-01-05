import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

const Header = () => {
    const { loggedIn } = useAuth();
    return !loggedIn ? (
        <header>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </header>
    ) : (
        <header>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/add'>Add Bike</Link>
            <Link to='/logout'>Logout</Link>
        </header>
    );
};

export default Header;