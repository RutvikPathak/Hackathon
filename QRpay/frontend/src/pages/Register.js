import React from 'react';
import Toggle from '../components/Toggle';

function Register({ toggleLogin }) {
  return (
    <div className="container">
      <h2>Register</h2>
      <form className="register-form">
        <div className="row">
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
          </div>
          <div className="input-group">
            <label>ID Type</label>
            <select>
              <option value="passport">Passport</option>
              <option value="national_id">National ID</option>
              <option value="driver_license">Driver's License</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Unique ID</label>
            <input type="text" placeholder="Enter your unique ID" />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      {/* Toggle Component */}
      <Toggle isLogin={false} toggleLogin={toggleLogin} />
    </div>
  );
}

export default Register;
