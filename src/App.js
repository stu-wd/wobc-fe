import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </header>

    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

    </Routes>

    </div>
  );
}

export default App;
