import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/auth.context";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  });

  return <div></div>;
};

export default Logout;
