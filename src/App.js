import React, { useEffect } from 'react';
import Header from './Components/Common/Header.js';
import { useAuth } from './Contexts/auth.context.js';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './Routes/routes.index.js';

function App() {
  const { loggedIn } = useAuth();

  // useEffect(() => {
  //   return (
  //     <>
  //     <Header />
  //     { loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes /> }
  //     </>
  //   )
  // },[loggedIn])

  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>
      <div className='box-border flex flex-col items-center'>
        { loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </div>
    </div>
  )

}

export default App;
