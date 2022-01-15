import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Authed/Dashboard";
import Bikes from "../Components//Bikes/Bikes";
import BikeActions from "../Components//Bikes/Actions/BikeActions";
import SearchBike from "../Components//Bikes/Actions/SearchBike";
import LandingPage from "../Components/Auth/LandingPage";
import Sidebar from "../Components/Authed/Sidebar";
import BikeForm from "../Components/Bikes/BikeForm";
import Logout from "../Components/Authed/Logout";

export const AuthenticatedRoutes = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/add" element={<BikeForm />} />
        <Route path="/edit" element={<BikeActions />} />
        <Route path="/search" element={<SearchBike />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export const UnauthenticatedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};
