import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Logout = (props) => {
    const navigate = useNavigate()
    
    useEffect(() => {
        localStorage.removeItem('token')
        navigate('/')
    })

    return (
        <div></div>
    );
};

export default Logout;