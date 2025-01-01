import React from 'react';
import Toggle from '../components/Toggle';


function Register({ toggleLogin }) {
  return (
    <div className="container">
      <h2>Register</h2>
      <form>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />
        </div>
        <button type="submit">Register</button>
      </form>
      {/* Toggle Component */}
      <Toggle isLogin={false} toggleLogin={toggleLogin} />
    </div>
  );
}

export default Register;
