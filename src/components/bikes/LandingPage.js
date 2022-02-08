import React, { useState } from "react";
import Login from "../auth/Login";
import MyAuthForm from "../auth/MyAuthForm";
import Register from "../auth/Register";
import WOBCLogo from "../../assets/images/wobclogotransparent.png";
import { useAuth } from "../../state/authContext";

const LandingPage = () => {
  const { authAction } = useAuth();
  return (
    <div className="flex flex-col items-center mt-8">
      <img className="mx-auto h-40 w-auto" src={WOBCLogo} alt="WOBC Logo" />
      {authAction === "login" && <Login />}
      {authAction === "register" && <Register />}
      {/* {authAction === 'logout' && <Logout />} */}
    </div>
  );
};

export default LandingPage;
