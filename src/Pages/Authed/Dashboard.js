import React from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const { loggedIn } = useAuth();



    return loggedIn ? (
        <div>
            Private Routes will work like this     
        </div>
    ) : (
        navigate('/')
    )
};

export default Dashboard;