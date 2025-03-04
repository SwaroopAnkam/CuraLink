import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';
import { FaHandHoldingMedical } from "react-icons/fa";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLoginSuccess = (credentialResponse) => {
    console.log('Google Login Success:', credentialResponse);
    // You can also handle Google login tokens here if needed.
  };

  const handleLoginError = () => {
    console.log('Google Login Failed');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      // Adjust the URL to match your backend endpoint
      const response = await axios.post('http://localhost:4000/api/v1/auth/login', { email, password });
      console.log('Login successful:', response.data);
      // Save token (for example in localStorage)
      localStorage.setItem('token', response.data.token);
      // Optionally, redirect or update the UI to indicate a successful login.
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      setErrorMsg(
        error.response && error.response.data.error
          ? error.response.data.error
          : 'Login failed. Please try again.'
      );
    }
  };

  return (
    <div className="flex h-3/4 w-3/4">
      {/* Left Side - Login Form */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center px-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-md mx-auto">
          {/* Medical Logo */}
          <div className="flex justify-start mb-6 text-blue-500">
            <FaHandHoldingMedical size={50} className="text-blue-500" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-blue-500">Welcome back!</h1>
          <p className="text-gray-500 mt-2 mb-6">
            Enter to get unlimited access to healthcare data &amp; information.
          </p>

          {/* Login Form */}
          <motion.form 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-500">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-blue-500 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-blue-500">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full border border-blue-500 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-blue-500" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot your password?
              </a>
            </div>

            {/* Error Message */}
            {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}

            {/* Login Button */}
            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded font-semibold transition-transform hover:scale-105"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Log In
            </motion.button>
          </motion.form>

          {/* Google Login */}
          <div className="mt-4 flex items-center justify-center">
            <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
          </div>

          {/* Register Link */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Don’t have an account?{' '}
              <a href="#" className="text-blue-500 hover:underline font-medium">
                Register here
              </a>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Aesthetic Background */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-blue-400 to-blue-600 items-center justify-center relative">
        <div className="absolute inset-0 bg-[url('/medical-pattern.svg')] bg-cover opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center text-white">
          <motion.div 
            className="h-16 w-16 bg-yellow-500 rounded-full mt-6"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          ></motion.div>
  
          <motion.div 
            className="h-10 w-10 bg-blue-300 rounded-lg mt-6"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          ></motion.div>
  
          <motion.div 
            className="mt-8 text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Secure Medical Signup
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
