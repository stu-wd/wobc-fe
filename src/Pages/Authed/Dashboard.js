import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Contexts/auth.context';
import { Link, useNavigate } from 'react-router-dom';
import { useUserInfo } from '../../Contexts/user.context';
import Bikes from './Bikes/Bikes';
import { useBikes } from '../../Contexts/bikes.context';
import BikeActions from './Bikes/Actions/BikeActions'
import SearchBike from './Bikes/Actions/SearchBike';
import BikeCard from './Bikes/BikeCard';

const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useUserInfo();
    const { cardView, showBikes, toggleBikes, toggleCardView, searchedBikeBySerial } = useBikes();

    // useEffect(() => {
    //     { searchedBikeBySerial ? <div>{searchedBikeBySerial.serial}</div> : <>no serial</>}
    // }, [searchedBikeBySerial])
    
    return (
        <div>
            <h2>Dashboard</h2>
            <SearchBike />
         
            {/* <button onClick={toggleBikes}>{`${ showBikes ? 'Hide' : 'Show' } Bikes`}</button>

            <div style={{display: 'flex'}}>
                { 
                showBikes ?
                <Bikes />
                :
                <></>
                }

                {
                    cardView ? 
                    <BikeActions />
                    :
                    <></>
                    
                }
            </div> */}
        </div>
    
    )
};

export default Dashboard;