import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { urls } from '../Utils/meta'
import { useAsyncFn } from 'react-use'

const AuthContext = createContext({});


const AuthProvider = (props) => {

    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ user, setUser ] = useState({});
    const [ message, setMessage ] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token')
        
        if (token) {
            const splitToken = token.split(',')
            setLoggedIn(true)
            setUser({
                username: splitToken[1],
                user_id: parseInt(splitToken[2])
            })
        }
    }, [])

    const registerUrl = urls.heroku + '/auth/register'
    const [ registration, register ] = useAsyncFn(async (data) => {
        const response = await fetch(registerUrl, {
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
        setMessage(result.message)
        return
    }, [registerUrl])

    const loginUrl = urls.heroku + '/auth/login'
    const [ loginAttempt, login ] = useAsyncFn(async (data) => {
        const response = await fetch(loginUrl, {
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
        setMessage(result.message)
        if (result.message === 'Login Success') {
            setTimeout(() => {
                setLoggedIn(true)
            }, 2500)
        }
        return result
    }, [loginUrl])

    const logout = () => {
        localStorage.removeItem('token')
        setLoggedIn(false)
    }

    const authContextValue = {
        loggedIn,
        login,
        logout,
        register,
        user,
        registration,
        message,
        setMessage,
        loginAttempt
    };

    return <AuthContext.Provider value={authContextValue} {...props}/>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };