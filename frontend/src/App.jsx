import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/navbar';
import Home from './pages/home';
import Login from './components/core/auth/loginform';
import Signup from './components/core/auth/signupform';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </Router>
  );
}

export default App;