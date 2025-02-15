import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LoginForm from './loginform';
import SignupForm from './signupform';

function Template() {
  const [authMode, setAuthMode] = useState('login');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 p-4">
      <div className="mb-8 w-64">
        <div className="relative flex bg-gray-200 p-1 rounded-full">
          {/* Animated indicator with tween transition */}
          <motion.div 
            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
            animate={{ x: authMode === 'login' ? 0 : "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            style={{ width: '50%' }}
          />
          <motion.button
            onClick={() => setAuthMode('login')}
            className="flex-1 p-2 rounded-full relative text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={authMode === 'login' ? 'text-white font-semibold' : 'text-gray-800'}>
              Login
            </span>
          </motion.button>
          <motion.button
            onClick={() => setAuthMode('signup')}
            className="flex-1 p-2 rounded-full relative text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={authMode === 'signup' ? 'text-white font-semibold' : 'text-gray-800'}>
              Sign Up
            </span>
          </motion.button>
        </div>
      </div>
      {authMode === 'login' ? <LoginForm /> : <SignupForm />}
    </div>
  );
}

export default Template;
