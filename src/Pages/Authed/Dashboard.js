import React, { useState } from 'react';
import { useAuth } from '../../Contexts/auth.context';
import { Link, useNavigate } from 'react-router-dom';
import { useUserInfo } from '../../Contexts/user.context';
import Bikes from './Bikes/Bikes';
import { useBikes } from '../../Contexts/bikes.context';
import AddBike from './Bikes/Actions/AddBike'

const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useUserInfo();
    const { cardView, showBikes, toggleBikes, toggleCardView } = useBikes();
    
    return (
        <div style={{border: '1px solid black'}}>
            <h2>Welcome back {user.username}</h2>
            <button onClick={toggleBikes}>{`${ showBikes ? 'Hide' : 'Show' } Bikes`}</button>

            <div style={{display: 'flex'}}>
                { 
                showBikes ?
                <Bikes />
                :
                <></>
                }

                {
                    cardView ? 
                    <AddBike />
                    :
                    <></>
                    
                }
            </div>
        </div>
    
    )
};

export default Dashboard;