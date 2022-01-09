import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            setLoggedIn(true)
        }
    }, [])

    const register = (newAccount) => {
        axios.post('http://localhost:4000/api/auth/register', newAccount)
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(`register ${err}`);
            })
    }

    const login = (loginAttempt) => {
        axios.post('http://localhost:4000/api/auth/login', loginAttempt)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                setLoggedIn(true)
                setUser(res.data.user)
            })
            .catch(err => {
                console.log(err);
                setLoggedIn(false)
            })
    }

    const logout = () => {
        localStorage.removeItem('token')
        setLoggedIn(false)
    }

    const authContextValue = {
        loggedIn,
        login,
        logout,
        register
    };

    return <AuthContext.Provider value={authContextValue} {...props}/>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };