import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Authed/Dashboard";
import Stats from "../Components/Authed/Bikes/Stats";
import SearchBike from "../Components/Authed/Bikes/Actions/SearchBike";
import AuthForm from "../Components/Auth/AuthForm";
import Sidebar from "../Components/Authed/Sidebar";
import BikeForm from "../Components/Authed/Bikes/BikeForm";
import Logout from "../Components/Authed/Logout";

export const AuthenticatedRoutes = () => {
  return (
    <>
      <Sidebar />
      <div className="py-12">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/bikes" element={<Bikes />} /> */}
          <Route path="/add" element={<BikeForm add={true} />} />
          <Route path="/search" element={<SearchBike />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
};

export const UnauthenticatedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthForm />} />
      </Routes>
    </>
  );
};
