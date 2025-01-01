import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import './style/global.css'; // Import the global CSS file

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div>
      {isLogin ? (
        <Login toggleLogin={toggleLogin} />
      ) : (
        <Register toggleLogin={toggleLogin} />
      )}
    </div>
  );
}

export default App;
