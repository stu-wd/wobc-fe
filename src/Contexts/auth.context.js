import React, { createContext, useContext, useEffect, useState } from "react";
import { urls } from "../Utils/meta";
import { useAsyncFn } from "react-use";
import { attachments } from "../Utils/authedAxios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const splitToken = token.split(",");
      setLoggedIn(true);
      setUser({
        username: splitToken[1],
        user_id: parseInt(splitToken[2]),
      });
    }
  }, []);

  const registerUrl = urls.local + "/auth/register";
  const [registration, register] = useAsyncFn(
    async (data) => {
      const response = await fetch(registerUrl, {
        ...attachments,
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setMessage(result.message);
      return result;
    },
    [registerUrl]
  );

  const loginUrl = urls.local + "/auth/login";
  const [loginAttempt, login] = useAsyncFn(
    async (data) => {
      const response = await fetch(loginUrl, {
        ...attachments,
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.message === "Login Success") {
        setTimeout(() => {
          setLoggedIn(true);
        }, 2500);
      }
      if (data.remember === true) localStorage.setItem("token", result.token);
      setMessage(result.message);
      return result;
    },
    [loginUrl]
  );

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  const authContextValue = {
    loggedIn,
    login,
    logout,
    register,
    user,
    message,
    setMessage,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
