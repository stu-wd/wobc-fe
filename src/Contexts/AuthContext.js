import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [ loggedIn, setLoggedIn ] = useState(false);

    const authContextValue = {
        loggedIn,
        setLoggedIn,
    };

    return <AuthContext.Provider value={authContextValue} {...props}/>
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }