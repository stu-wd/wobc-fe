import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../Pages/Auth/Register';
import Login from '../Pages/Auth/Login';
import Dashboard from '../Pages/Authed/Dashboard';
import Logout from '../Pages/Authed/Logout';

export const AuthenticatedRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
        </>
    )
}

export const UnauthenticatedRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    )
};