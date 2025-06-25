import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StaffLogin.css';

function StaffLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard/view-status');
  };

  return (
    <div className="center-wrapper">
      <div className="login-container">
        <h2>Staff Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default StaffLogin;