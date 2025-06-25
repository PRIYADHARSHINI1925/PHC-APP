import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar">
      
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        <span className="hamburger">&#9776;</span>
      </div>

      <h3 className="menu-heading">Menu</h3>

      {open && (
        <ul>
          <li><Link to="/dashboard/view-status">View Status</Link></li>
          <li><Link to="/dashboard/patient-registration">Patient Registration</Link></li>
          <li><Link to="/dashboard/view-doctors">View Doctors</Link></li>
          <li><Link to="/dashboard/patient-history">View Patient History</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
