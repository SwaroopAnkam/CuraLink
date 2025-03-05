import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';
import { FaHandHoldingMedical } from "react-icons/fa";
import SignupForm from './signupform';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

function Template() {
  const [authMode, setAuthMode] = useState('login'); // Default to 'login'
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
      const response = await axios.post('http://localhost:4000/api/v1/auth/login', { email, password });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
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
    <div className="flex h-full w-[80%] mx-auto"> 
      {/* Left Side - Login Form or Signup Form */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center px-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-md mx-auto ml-6 mt-40">
          {/* Medical Logo */}
          {/* Heading */}
          <h1 className="text-3xl font-bold text-blue-500">
            {authMode === 'login' ? 'Welcome back!' : 'Create an Account'}
          </h1>
          <p className="text-gray-500 mt-2 mb-6">
            {authMode === 'login'
              ? 'Enter to get unlimited access to healthcare data & information.'
              : 'Enter your details to register for secure healthcare access.'}
          </p>

          {/* Form based on authMode */}
          <motion.form 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={authMode === 'login' ? handleSubmit : null}
          >
            {authMode === 'login' ? (
              <>
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
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 text-blue-500" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-blue-500 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}
              </>
            ) : (
              <SignupForm />
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded font-semibold transition-transform hover:scale-105"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {authMode === 'login' ? 'Log In' : 'Sign Up'}
            </motion.button>
          </motion.form>

          {/* Google Login */}
          {authMode === 'login' && (
            <div className="mt-4 flex items-center justify-center">
              <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
            </div>
          )}

          {/* Register / Login Link */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              {authMode === 'login' ? (
                <>
                  Don’t have an account?{' '}
                  <Link
                    to="/signup" // Use Link component to navigate to the Signup page
                    className="text-blue-500 hover:underline font-medium"
                  >
                    Register here
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => setAuthMode('login')}
                    className="text-blue-500 hover:underline font-medium"
                  >
                    Login here
                  </button>
                </>
              )}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <div className="w-[35vw] max-[800px]:w-auto flex items-center justify-center mt-40 ">
        <img src="login.png" alt="aboutUs" className="w-full h-auto rounded-3xl" />
      </div>
    </div>
  );
}

export default Template;
