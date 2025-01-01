// src/components/Toggle.js
import React from 'react';

function Toggle({ isLogin, toggleLogin }) {
  return (
    <p>
      {isLogin ? "Don't have an account? " : 'Already have an account? '}
      <span className="toggle" onClick={toggleLogin}>
        {isLogin ? 'Register here' : 'Login here'}
      </span>
    </p>
  );
}

export default Toggle;
