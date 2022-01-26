import React, { useEffect } from "react";
import { useAuth } from "./state/authContext.js";
import { AuthenticatedRoutes, UnauthenticatedRoutes } from "./routes/index.js";
import "./assets/styles/index.css";

function App() {
  const { loggedIn } = useAuth();

  useEffect(() => {
    return (
      <div className="min-h-screen bg-gray-200 px-3 flex flex-col">
        {loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </div>
    );
  }, [loggedIn]);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col  px-3">
      {loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
    </div>
  );
}

export default App;
