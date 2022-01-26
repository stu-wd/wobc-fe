import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Filter from "../components/bikes/Actions/Filter";
import LoginRegisterForm from "../components/auth/LoginRegisterForm";
import Header from "../components/Header";
import Logout from "../components/Logout";
import Sidebar from "../components/Sidebar";
import AddBike from "../components/bikes/Actions/Add";
import { useAuth } from "../state/authContext";

const AuthenticatedRoutes = () => (
  <div className="flex flex-col">
    <div className="">
      <Header />
      <Sidebar />
    </div>
    <div className="mt-16">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/bikes" element={<Bikes />} /> */}
        <Route path="/add" element={<AddBike add={true} />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  </div>
);

const UnauthenticatedRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginRegisterForm />} />
  </Routes>
);

export const RouteTree = () => {
  const { loggedIn } = useAuth();

  useEffect(() => {
    return loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
  }, [loggedIn]);

  return loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};
