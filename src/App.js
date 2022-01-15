import React, { useEffect } from "react";
import { useAuth } from "./Contexts/auth.context.js";
import {
  AuthenticatedRoutes,
  UnauthenticatedRoutes,
} from "./Routes/routes.index.js";
import LandingPage from "./Components/Auth/LandingPage.js";

function App() {
  const { loggedIn } = useAuth();

  useEffect(() => {
    return (
      <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 px-6 lg:px-8">
        {loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </div>
    );
  }, [loggedIn]);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 px-6 lg:px-8">
      {loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
    </div>
  );
}

export default App;
