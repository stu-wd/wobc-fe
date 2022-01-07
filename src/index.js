import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Contexts/auth.context';
import { UserProvider } from './Contexts/user.context'


ReactDOM.render(
  <AuthProvider>
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  </AuthProvider>,
  document.getElementById('root')
);
