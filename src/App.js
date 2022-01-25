import React, { useEffect } from "react";
import { useAuth } from "./Contexts/authContext.js";
import { AuthenticatedRoutes, UnauthenticatedRoutes } from "./Routes/index.js";

function App() {
  const { loggedIn } = useAuth();

  useEffect(() => {
    return (
      <div className="min-h-screen bg-gray-200 flex flex-col px-6 lg:px-8 relative">
        {loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </div>
    );
  }, [loggedIn]);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col px-6 lg:px-8 relative">
      {loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
    </div>
  );
}

export default App;
