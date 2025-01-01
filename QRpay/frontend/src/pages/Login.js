import React from 'react';
import Toggle from '../components/Toggle';


function Login({ toggleLogin }) {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* Toggle Component */}
      <Toggle isLogin={true} toggleLogin={toggleLogin} />
    </div>
  );
}

export default Login;
