import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/auth.context';

const Header = () => {
    const { loggedIn } = useAuth();

    return (
        <header>
            <div className="flex justify-around bg-gray-500 m-5 text-white rounded-full">
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
            </div>
        </header>
    )
};

export default Header;