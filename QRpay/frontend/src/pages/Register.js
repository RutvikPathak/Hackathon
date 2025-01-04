import React, { useEffect, useState } from 'react';
import Toggle from '../components/Toggle';

function Register({ toggleLogin }) {
  const [idTypes, setIdTypes] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    idType: '',
    uniqueId: '',
    password: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/user-id-types')
      .then((response) => response.json())
      .then((data) => setIdTypes(data))
      .catch((error) => console.error('Error fetching ID types:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        }
      })
      .catch((error) => console.error('Error registering user:', error));
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label>ID Type</label>
            <select
              name="idType"
              value={formData.idType}
              onChange={handleInputChange}
            >
              {idTypes.length > 0 ? (
                idTypes.map((type) => (
                  <option key={type.user_IDtype_id} value={type.user_IDtype_id}>
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
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label>Unique ID</label>
            <input
              type="text"
              name="uniqueId"
              value={formData.uniqueId}
              onChange={handleInputChange}
              placeholder="Enter your unique ID"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      <Toggle isLogin={false} toggleLogin={toggleLogin} />
    </div>
  );
}

export default Register;
