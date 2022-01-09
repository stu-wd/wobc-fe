import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Contexts/auth.context';
import { BikesProvider } from './Contexts/bikes.context';

ReactDOM.render(
  <AuthProvider>
      <BikesProvider>
        <Router>
          <App />
        </Router>
      </BikesProvider>
  </AuthProvider>,
  document.getElementById('root')
);
