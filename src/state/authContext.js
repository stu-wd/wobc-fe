import React, { createContext, useContext, useEffect, useState } from "react";
import { useAsyncFn } from "react-use";
import { attachments } from "../utils/attachments";

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

  const registerUrl = process.env.REACT_APP_API + "/auth/register";
  const [registrationAttempt, register] = useAsyncFn(
    async (data) => {
      const response = await fetch(registerUrl, {
        ...attachments,
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      return result;
    },
    [registerUrl]
  );

  const loginUrl = process.env.REACT_APP_API + "/auth/login";
  const [loginAttempt, login] = useAsyncFn(
    async (data) => {
      const response = await fetch(loginUrl, {
        ...attachments,
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (data.remember === true) localStorage.setItem("token", result.token);
      if (result.message === "Login Success") {
        setUser(result.user);
        setLoggedIn(true);
        return { token: result.token, user: result.user };
      } else return result;
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
    loginAttempt,
    registrationAttempt,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
