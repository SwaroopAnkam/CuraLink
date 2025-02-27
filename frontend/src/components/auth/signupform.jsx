import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSignupSuccess = (credentialResponse) => {
    console.log('Google Signup Success:', credentialResponse);
    // You can handle the token or redirect the user here.
  };

  const handleSignupError = () => {
    console.log('Google Signup Failed');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic client-side validation for password match
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }

    try {
      // Adjust the URL to match your backend endpoint
      const response = await axios.post('http://localhost:4000/api/v1/auth/signup', {
        firstName,
        lastName,
        email,
        phone,
        password,
      });

      console.log('Signup successful:', response.data);
      localStorage.setItem('token', response.data.token);
      // Optionally redirect or update the UI after successful signup.
    } catch (error) {
      console.error('Signup error:', error.response ? error.response.data : error.message);
      setErrorMsg(
        error.response && error.response.data.error
          ? error.response.data.error
          : 'Signup failed. Please try again.'
      );
    }
  };

  return (
    <div className="flex h-3/4 w-3/4">
      {/* Left Side - Aesthetic Background */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-blue-600 to-blue-400 items-center justify-center relative">
        <div className="absolute inset-0 bg-[url('/medical-pattern.svg')] bg-cover opacity-50"></div>

        {/* Decorative Elements */}
        <div className="relative z-10 flex flex-col items-center text-white">
          <motion.div 
            className="h-16 w-16 bg-yellow-500 rounded-full mt-6"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
          <motion.div 
            className="h-10 w-10 bg-blue-300 rounded-lg mt-6"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
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

      {/* Right Side - Signup Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-12">
        <motion.div
          className="p-8 w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <h2 className="text-3xl font-bold text-blue-500 text-center">Create an Account</h2>
          <p className="text-gray-500 text-center mt-2 mb-6">Join the medical portal today</p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First & Last Name (Side by Side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                initial={{ x: -30, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.4 }}
              >
                <label className="block text-sm font-medium text-blue-400">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full border border-blue-500 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </motion.div>

              <motion.div 
                initial={{ x: 30, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.4 }}
              >
                <label className="block text-sm font-medium text-blue-500">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full border border-blue-500 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </motion.div>
            </div>

            {/* Email Address */}
            <motion.div 
              initial={{ x: -30, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.4 }}
            >
              <label className="block text-sm font-medium text-blue-400">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border border-blue-500 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>

            {/* Phone Number */}
            <motion.div 
              initial={{ x: 30, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.4 }}
            >
              <label className="block text-sm font-medium text-blue-500">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter contact number"
                className="w-full border border-blue-500 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </motion.div>

            {/* Password & Confirm Password (Side by Side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                initial={{ x: -30, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.4 }}
              >
                <label className="block text-sm font-medium text-blue-400">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full border border-blue-500 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </motion.div>

              <motion.div 
                initial={{ x: 30, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.4 }}
              >
                <label className="block text-sm font-medium text-blue-500">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full border border-blue-500 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </motion.div>
            </div>

            {/* Error Message */}
            {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}

            {/* Create Account Button */}
            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded font-semibold transition-transform hover:scale-105"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Create Account
            </motion.button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-2 text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Google Signup */}
          <div className="mt-4 flex items-center justify-center">
            <GoogleLogin onSuccess={handleSignupSuccess} onError={handleSignupError} />
          </div>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="#" className="text-blue-500 hover:underline font-medium">
                Log in here
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SignupForm;
