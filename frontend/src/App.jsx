import React from 'react';
import Navbar from './components/common/navbar';
import Template from './components/core/auth/template';
import Home from './pages/home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Template/>  */}
    </>
  );
}

export default App;
