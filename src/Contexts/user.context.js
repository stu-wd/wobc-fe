import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

const UserProvider = (props) => {
    const [ user, setUser ] = useState(null);

    const userContextValue = {
        user,
        setUser
    };

    return <UserContext.Provider value={userContextValue} {...props}/>;
};

const useUserInfo = () => useContext(UserContext);

export { UserProvider, useUserInfo };