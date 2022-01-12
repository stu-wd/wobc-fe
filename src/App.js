import React, { useEffect } from 'react';
import Header from './Components/Common/Header.js';
import { useAuth } from './Contexts/auth.context.js';
import UserForm from './Pages/Auth/UserForm.js';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './Routes/routes.index.js';
import LandingPage from './Pages/Auth/LandingPage.js';

function App() {
  const { loggedIn } = useAuth();

  useEffect(() => {
    return (
      <>
      { loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes /> }
      </>
    )
  },[loggedIn])

  return (
      <div className='box-border flex'>
        { loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </div>
  )

}

export default App;
