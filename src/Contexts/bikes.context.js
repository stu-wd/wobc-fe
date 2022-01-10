import React, { createContext, useContext, useEffect, useState } from 'react';
import authedAxios from '../Utils/authedAxios';

const BikesContext = createContext({});

const BikesProvider = (props) => {
    const [ bikes, setBikes ] = useState()
    const [ isLoading, setIsLoading ] = useState(false)
    const [ showBikes, setShowBikes ] = useState(false)
    const [ cardView, setCardView ] = useState(false)
    const [ searchedBikeBySerial, setSearchedBikeBySerial ] = useState()
    const [ bikeFormValues, setBikeFormValues ] = useState()
    const [ successMsg, setSuccessMsg ] = useState(undefined)

    const toggleBikes = () => {
        setShowBikes(!showBikes)
    }

    const toggleCardView = () => {
        setCardView(!cardView)
    }
    
    const handleSerialSearch = (serial) => {
        setIsLoading(true)
        authedAxios()
            .get(`/bikes/${serial}`)
            .then(resp => {
                setIsLoading(false)
                setSearchedBikeBySerial(resp.data)
            })
            .catch(err => console.log(err))
    }

    const getBikes = () => {
        setIsLoading(true)
        authedAxios()
            .get('/bikes')
            .then(resp => {
                setIsLoading(false)
                console.log(resp.data)
                setBikes(resp.data)
            })
            .catch(err => console.log(err))
    }

    const addBike = (newBike, user_id) => {
        const submission = {
            ...newBike,
            user_id: user_id
        }
        console.log(submission)
        authedAxios()
            .post(`/bikes/add`, submission)
            .then(res => {
                console.log(res.data);
                setSuccessMsg(true)
            })
            .catch(err => {
                console.log(err);
                setSuccessMsg(false)
            })
    }

    const bikesContextValue = {
        bikes,
        isLoading,
        getBikes,
        toggleBikes,
        toggleCardView,
        showBikes,
        cardView,
        handleSerialSearch,
        searchedBikeBySerial,
        bikeFormValues,
        setBikeFormValues,
        addBike,
        successMsg
    };

    return <BikesContext.Provider value={bikesContextValue} {...props}/>;
};

const useBikes = () => useContext(BikesContext);

export { BikesProvider, useBikes };