import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../Contexts/auth.context';
import BikeCard from './BikeCard';

const Bikes = () => {

    const { bikes, isLoading, getBikes } = useAuth();

    useEffect(() => {
        getBikes()
    }, [])
    
    if (isLoading) {
        return(
            <>Fetching bikes for you...</>
        )
    }

    return (
        <div>
            {bikes ?
                bikes.map((bike, index) => {
                    return(
                        <BikeCard key={index} bike={bike}/>
                    )
                })
                : <h1>No bikes to show</h1>
            }
        </div>
    );
};

export default Bikes;