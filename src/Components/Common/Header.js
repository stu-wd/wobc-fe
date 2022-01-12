import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/auth.context';

const Header = () => {
    const { loggedIn } = useAuth();

    return (
        <header>
            <div>
            {loggedIn ?
                <>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/add'>Add Bike</Link>
                    {/* <Link to='/search'>Search</Link> */}
                    <Link to='/logout'>Logout</Link>
                </>
                :
                <>
                </>
            }
            </div>
        </header>
    )
};

export default Header;