import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../Pages/Auth/Register';
import Login from '../Pages/Auth/Login';
import Dashboard from '../Pages/Authed/Dashboard';
import Bikes from '../Pages/Authed/Bikes/Bikes';
import BikeActions from '../Pages/Authed/Bikes/Actions/BikeActions';
import Logout from '../Pages/Authed/Logout';
import SearchBike from '../Pages/Authed/Bikes/Actions/SearchBike';
// import { UserProvider } from '../Contexts/user.context';

export const AuthenticatedRoutes = () => {
    return (
        <>
            <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/bikes' element={<Bikes />} />
                    <Route path='/add' element={<BikeActions />} />
                    <Route path='/edit' element={<BikeActions />} />
                    <Route path='/search' element={<SearchBike />} />
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