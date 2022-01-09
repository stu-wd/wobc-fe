import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useUserInfo } from './user.context';

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [ loggedIn, setLoggedIn ] = useState(false);
    const { setUser } = useUserInfo()

    const register = (newAccount) => {
        axios.post('http://localhost:4000/api/auth/register', newAccount)
            .then((res) => {

            })
            .catch(err => {
                console.log(err);
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
                console.log('err', err);
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