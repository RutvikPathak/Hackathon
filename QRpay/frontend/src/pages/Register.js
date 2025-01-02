// frontend/src/pages/Register.js
import React, { useEffect, useState } from 'react';
import Toggle from '../components/Toggle';

function Register({ toggleLogin }) {
  const [idTypes, setIdTypes] = useState([]);

  useEffect(() => {
    // Fetch user ID types from the backend
    fetch('http://localhost:5000/api/user-id-types')
      .then((response) => response.json())
      .then((data) => {
        setIdTypes(data); // Set the fetched data to state
      })
      .catch((error) => console.error('Error fetching user ID types:', error));
  }, []);

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
              {idTypes.length > 0 ? (
                idTypes.map((type, index) => (
                  <option key={index} value={type.user_IDtype_name}>
                    {type.user_IDtype_name}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
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
