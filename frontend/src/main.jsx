import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="560632915392-a25hvmqmbln074p7cvg3lj1ldug26j06.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
