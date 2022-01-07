import React, { createContext, useContext, useEffect, useState } from 'react';
import authedAxios from '../Utils/authedAxios';

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ bikes, setBikes ] = useState();
    const [ isLoading, setIsLoading ] = useState(false)

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

    const authContextValue = {
        loggedIn,
        setLoggedIn,
        bikes,
        setBikes,
        isLoading,
        getBikes
    };

    return <AuthContext.Provider value={authContextValue} {...props}/>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };