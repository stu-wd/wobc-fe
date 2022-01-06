import React from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import SearchBike from './Bikes/SearchBike';

const Dashboard = () => {
    const navigate = useNavigate();
    const { loggedIn, user } = useAuth();
    
    return loggedIn ? (
        <div>
            Private Routes will work like this
            <SearchBike />
        </div>
    ) : (
        navigate('/')
    )
};

export default Dashboard;