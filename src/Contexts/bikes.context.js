import React, { createContext, useContext, useEffect, useState } from 'react';
import authedAxios from '../Utils/authedAxios';
import { useAsyncFn } from 'react-use'

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

    // const addBike = (newBike, user_id) => {
    //     const submission = {
    //         ...newBike,
    //         user_id: user_id
    //     }
    //     authedAxios()
    //         .post(`https://whiteoakbikeco-op.herokuapp.com/api/bikes/add`, submission)
    //         .then(res => {
    //             console.log(res.data);
    //             setSuccessMsg(true)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             setSuccessMsg(false)
    //         })
    // }

    let postBikeUrl = 'https://whiteoakbikeco-op.herokuapp.com/api/bikes/add'
    const [ addBikeDetails, postBike ] = useAsyncFn(async (data) => {
        const response = await fetch(postBikeUrl, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type' : 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        const result = await response.json()
        setSuccessMsg(result.message)
        console.log(result, result.message);
        return
    }, [postBikeUrl])

    let putBikeUrl = 'http://localhost:4000/api/bikes/edit'
    const [ editBikeDetails, editBike ] = useAsyncFn(async (data) => {
        console.log(data)
        const response = await fetch(putBikeUrl, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type' : 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result)
        return
    }, [putBikeUrl])

    const resetMessage = () => {
        let timer = setTimeout(() => {
            setSuccessMsg('');
            timer = null
        }, 2500)
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
        successMsg,
        postBike,
        editBike,
        resetMessage
    };

    return <BikesContext.Provider value={bikesContextValue} {...props}/>;
};

const useBikes = () => useContext(BikesContext);

export { BikesProvider, useBikes };