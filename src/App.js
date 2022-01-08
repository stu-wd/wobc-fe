import React, { useEffect } from 'react';
import Header from './Components/Common/Header.js';
import { useAuth } from './Contexts/auth.context.js';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './Routes/routes.index.js';

function App() {
  const { loggedIn } = useAuth();

  useEffect(() => {
    return (
      <>
      <Header />
      { loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes /> }
      </>
    )
  },[loggedIn])

  return (
    // <>
    // <Header />
    // { loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes /> }
    // </>
    <>
    <Header />
    <AuthenticatedRoutes />
    </>
  )

}

export default App;
