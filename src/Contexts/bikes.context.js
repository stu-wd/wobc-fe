import React, { createContext, useContext, useEffect, useState } from 'react';
import authedAxios from '../Utils/authedAxios';

const BikesContext = createContext({});

const BikesProvider = (props) => {
    const [ bikes, setBikes ] = useState()
    const [ isLoading, setIsLoading ] = useState(false)
    const [ showBikes, setShowBikes ] = useState(false)
    const [ cardView, setCardView ] = useState(false)

    const toggleBikes = () => {
        setShowBikes(!showBikes)
    }

    const toggleCardView = () => {
        setCardView(!cardView)
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
            .finally(() => {
                console.log(bikes)
            })
    }

    const bikesContextValue = {
        bikes,
        isLoading,
        getBikes,
        toggleBikes,
        toggleCardView,
        showBikes,
        cardView
    };

    return <BikesContext.Provider value={bikesContextValue} {...props}/>;
};

const useBikes = () => useContext(BikesContext);

export { BikesProvider, useBikes };