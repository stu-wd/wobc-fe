import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/auth.context';

const Header = () => {
    const { loggedIn } = useAuth();

    return (
        // <header>
        //     {loggedIn ?
        //     <>
        //         <Link to='/dashboard'>Dashboard</Link>
        //         <Link to='/add'>Add Bike</Link>
        //         <Link to='/logout'>Logout</Link>
        //     </>
        //     :
        //     <>
        //         <Link to='/register'>Register</Link>
        //         <Link to='/login'>Login</Link>
        //     </>
        //     }
        // </header>

        <header>
            <div className="flex justify-around bg-green-800 m-5 text-yellow-100 rounded-full">
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/add'>Add Bike</Link>
                <Link to='/logout'>Logout</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>
        </header>
    )
};

export default Header;