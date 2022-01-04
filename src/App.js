import React from 'react';
import Header from './Components/Header.js';
import { useAuth } from './Contexts/AuthContext.js';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './Routes/routes.index.js';

function App() {
  const { loggedIn } = useAuth();

  return (
    <>
    <Header />
    { loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes /> }
    </>
  )

}

export default App;
