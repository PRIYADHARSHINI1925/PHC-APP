import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StaffLogin.css';

function StaffLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    navigate('/dashboard/view-status');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">STAFF LOGIN</h2>
        
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-container">
            <div className="input-icon">👤</div>
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleInputChange}
              required 
              className="form-input"
            />
          </div>
          
          <div className="input-container">
            <div className="input-icon">🔒</div>
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleInputChange}
              required 
              className="form-input"
            />
          </div>
          
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
        
        <div className="forgot-password">
          Forgot Password? <span className="link">Click Here</span>
        </div>
      </div>
    </div>
  );
}

export default StaffLogin;