import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../state/authContext";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  }, []);

  return <></>;
};

export default Logout;
