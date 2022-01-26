import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Stats from "../components/bikes/Stats";
import SearchBike from "../components/bikes/Actions/SearchBike";
import LoginRegisterForm from "../components/auth/LoginRegisterForm";
import Header from "../components/Header";
import Logout from "../components/Logout";
import Sidebar from "../components/Sidebar";
import AddBike from "../components/bikes/Actions/AddBike";

export const AuthenticatedRoutes = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="py-12">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/bikes" element={<Bikes />} /> */}
          <Route path="/add" element={<AddBike add={true} />} />
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
        <Route path="/" element={<LoginRegisterForm />} />
      </Routes>
    </>
  );
};
