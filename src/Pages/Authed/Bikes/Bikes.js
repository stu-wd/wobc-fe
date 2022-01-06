import React, { useEffect, useState } from 'react';
import authedAxios from '../../../Utils/authedAxios';
import { useAuth } from '../../../Contexts/AuthContext';

const Bikes = () => {

    const { bikes, setBikes, isLoading, setIsLoading } = useAuth();

    const getBikes = () => {
        setIsLoading(true)
        authedAxios()
            .get('/bikes')
            .then(resp => {
                setIsLoading(false)
                setBikes(resp.data)
            })
            .catch(err => console.log(err))
    }

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
                bikes.map(bike => {
                    return(
                        <>
                        <h6>{bike.serial}</h6>
                        </>
                    )
                })
                : <h1>bikes are not in state</h1>
            }
        </div>
    );
};

export default Bikes;