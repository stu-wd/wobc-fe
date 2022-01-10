import React, { createContext, useContext, useEffect, useState } from 'react';
import authedAxios from '../Utils/authedAxios';
import { useAsyncFn } from 'react-use'
import { urls } from '../Utils/meta'

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

    const searchSerialUrl = urls.local + '/bikes'
    const [ serialSearchDetails, searchSerial ] = useAsyncFn(async (serial) => {
        const response = await fetch(searchSerialUrl + `/${serial}`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type' : 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            // body: JSON.stringify(serial)
        })
        const result = await response.json()
        console.log(result)
        return result
    }, [searchSerialUrl])


    
    const postBikeUrl = urls.local + '/bikes/add'
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
        console.log('add resolved');
        return
    }, [postBikeUrl])

    const putBikeUrl = urls.local + '/bikes'
    const [ editBikeDetails, editBike ] = useAsyncFn(async (bike) => {
        console.log(bike)
        const response = await fetch(putBikeUrl + `/${bike.serial}`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type' : 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(bike)
        })
        console.log(response)
        const result = await response.json()
        setSuccessMsg(result.message)
        console.log(result);
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
        resetMessage,
        searchSerial,
        serialSearchDetails
    };

    return <BikesContext.Provider value={bikesContextValue} {...props}/>;
};

const useBikes = () => useContext(BikesContext);

export { BikesProvider, useBikes };