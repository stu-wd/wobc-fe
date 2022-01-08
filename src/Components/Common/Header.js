import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/auth.context';

const Header = () => {
    const { loggedIn } = useAuth();

    return (
        <header>
            {loggedIn ?
            <>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/add'>Add Bike</Link>
                <Link to='/logout'>Logout</Link>
            </>
            :
            <>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </>
            }
        </header>
    )
};

export default Header;