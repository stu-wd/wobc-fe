import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';

const Logout = (props) => {
    const { setLoggedIn } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        localStorage.removeItem('token');
        setLoggedIn(false);
        navigate('/');
    });

    return (
        <div></div>
    );
};

export default Logout;