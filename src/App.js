import React, { useEffect } from "react";
import { useAuth } from "./Contexts/auth.context.js";
import UserForm from "./Pages/Auth/UserForm.js";
import {
  AuthenticatedRoutes,
  UnauthenticatedRoutes,
} from "./Routes/routes.index.js";
import LandingPage from "./Pages/Auth/LandingPage.js";

function App() {
  const { loggedIn } = useAuth();

  useEffect(() => {
    return (
      <div className="box-border flex">
        {loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </div>
    );
  }, [loggedIn]);

  return (
    <div className="box-border flex">
      {loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
    </div>
  );
}

export default App;
