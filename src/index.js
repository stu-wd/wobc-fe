import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Contexts/auth.context';
import { UserProvider } from './Contexts/user.context';
import { BikesProvider } from './Contexts/bikes.context';

ReactDOM.render(
  <AuthProvider>
    <UserProvider>
      <BikesProvider>
        <Router>
          <App />
        </Router>
      </BikesProvider>
    </UserProvider>
  </AuthProvider>,
  document.getElementById('root')
);
