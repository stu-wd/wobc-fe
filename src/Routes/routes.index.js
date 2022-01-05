import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../Pages/Auth/Register';
import Login from '../Pages/Auth/Login';
import Dashboard from '../Pages/Authed/Dashboard';
import AddBike from '../Pages/Authed/Bikes/AddBike';
import Logout from '../Pages/Authed/Logout';

export const AuthenticatedRoutes = () => {
    return (
        <>
        <h1>Authed</h1>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/add' element={<AddBike />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
        </>
    )
}

export const UnauthenticatedRoutes = () => {
    return (
        <>
        <h1>Unauthed</h1>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    )
};