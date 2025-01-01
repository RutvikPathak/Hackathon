// src/App.js
import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Toggle from './components/Toggle';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(prevState => !prevState);
  };

  return (
    <div className="container">
      <div className="form-container">
        {isLogin ? (
          <>
            <Login />
            <Toggle isLogin={isLogin} toggleLogin={toggleLogin} />
          </>
        ) : (
          <>
            <Register />
            <Toggle isLogin={isLogin} toggleLogin={toggleLogin} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
