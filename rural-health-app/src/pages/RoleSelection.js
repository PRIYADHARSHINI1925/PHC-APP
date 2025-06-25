import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css';

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="center-wrapper">
      <div className="role-box">
        <div className="header">
          <h2>Select Role</h2>
          <p className="subtitle">Choose your access level to continue</p>
        </div>
        <div className="button-container">
          <button 
            className="role-button admin-button"
            onClick={() => navigate('/admin')}
          >
            <span className="button-icon">👨‍💼</span>
            Admin Login
          </button>
          <button 
            className="role-button staff-button"
            onClick={() => navigate('/staff')}
          >
            <span className="button-icon">👩‍⚕️</span>
            Staff Login
          </button>
          <button 
            className="role-button superadmin-button"
            onClick={() => navigate('/superadmin')}
          >
            <span className="button-icon">⚡</span>
            SuperAdmin Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;