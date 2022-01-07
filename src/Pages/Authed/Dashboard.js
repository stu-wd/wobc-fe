import React, { useState } from 'react';
import { useAuth } from '../../Contexts/auth.context';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '../../Contexts/user.context';

const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useUserInfo();

    console.log(user);
    
    return (
        <div>
            <h2>Welcome back {user.username}</h2>
            Private Routes will work like this
            {/* <SearchBike /> */}
        </div>
    
    )
};

export default Dashboard;