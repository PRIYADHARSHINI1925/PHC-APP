import React, { useState } from 'react';
import './SuperAdminPortal.css';

// Mock data for demonstration
const mockApprovedUsers = [
  { id: 1, name: 'Dr. Arjun', email: 'arjun@hospital.com', type: 'Doctor', status: 'Active' },
  { id: 2, name: 'Dr. Lakshmi', email: 'lakshmi@clinic.com', type: 'Doctor', status: 'Active' },
  { id: 3, name: 'PHC Delhi', email: 'delhi.phc@health.gov', type: 'PHC', status: 'Active' },
  { id: 4, name: 'PHC Mumbai', email: 'mumbai.phc@health.gov', type: 'PHC', status: 'Active' }
];

const mockDoctorRequests = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    email: 'rajesh@gmail.com',
    specialization: 'Cardiology',
    documents: {
      license: 'medical_license_001.pdf',
      degree: 'mbbs_degree_001.pdf',
      experience: 'experience_certificate_001.pdf'
    },
    status: 'Pending'
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    email: 'priya.sharma@hospital.com',
    specialization: 'Pediatrics',
    documents: {
      license: 'medical_license_002.pdf',
      degree: 'mbbs_degree_002.pdf',
      experience: 'experience_certificate_002.pdf'
    },
    status: 'Pending'
  }
];

const mockPHCRequests = [
  {
    id: 1,
    name: 'PHC Bangalore',
    email: 'bangalore.phc@health.gov',
    location: 'Bangalore, Karnataka',
    documents: {
      registration: 'phc_registration_001.pdf',
      authorization: 'govt_authorization_001.pdf',
      facilities: 'facilities_list_001.pdf'
    },
    status: 'Pending'
  },
  {
    id: 2,
    name: 'PHC Chennai',
    email: 'chennai.phc@health.gov',
    location: 'Chennai, Tamil Nadu',
    documents: {
      registration: 'phc_registration_002.pdf',
      authorization: 'govt_authorization_002.pdf',
      facilities: 'facilities_list_002.pdf'
    },
    status: 'Pending'
  }
];

function SuperAdminPortal() {
  const [currentView, setCurrentView] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedRequestType, setSelectedRequestType] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation - in real app, this would be proper authentication
    if (loginData.email && loginData.password) {
      setCurrentView('dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  const handleApprove = (id, type) => {
    alert(`${type} request with ID ${id} has been approved!`);
    // In real app, this would update the backend
  };

  const handleReject = (id, type) => {
    alert(`${type} request with ID ${id} has been rejected!`);
    // In real app, this would update the backend
  };

  const renderLogin = () => (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Super Admin Portal</h2>
          <p>Access Administrative Dashboard</p>
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Super Admin Dashboard</h2>
        <button className="logout-btn" onClick={() => setCurrentView('login')}>Logout</button>
      </div>
      <div className="dashboard-buttons">
        <button 
          className="dashboard-btn"
          onClick={() => setCurrentView('viewUsers')}
        >
          View Status
        </button>
        <button 
          className="dashboard-btn"
          onClick={() => setCurrentView('viewRequests')}
        >
          View Account Requests
        </button>
      </div>
    </div>
  );

  const renderViewUsers = () => (
    <div className="view-container">
      <div className="view-header">
        <h2>Approved User Accounts</h2>
        <button className="back-btn" onClick={() => setCurrentView('dashboard')}>Back to Dashboard</button>
      </div>
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockApprovedUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.type}</td>
                <td><span className="status-active">{user.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderViewRequests = () => (
    <div className="view-container">
      <div className="view-header">
        <h2>Account Requests</h2>
        <button className="back-btn" onClick={() => setCurrentView('dashboard')}>Back to Dashboard</button>
      </div>
      <div className="request-buttons">
        <button 
          className="request-type-btn"
          onClick={() => setCurrentView('doctorRequests')}
        >
          Doctor Requests
        </button>
        <button 
          className="request-type-btn"
          onClick={() => setCurrentView('phcRequests')}
        >
          PHC Requests
        </button>
      </div>
    </div>
  );

  const renderDoctorRequests = () => (
    <div className="view-container">
      <div className="view-header">
        <h2>Doctor Account Requests</h2>
        <button className="back-btn" onClick={() => setCurrentView('viewRequests')}>Back to Requests</button>
      </div>
      <div className="requests-list">
        {mockDoctorRequests.map(doctor => (
          <div key={doctor.id} className="request-card">
            <div className="request-info">
              <h3>{doctor.name}</h3>
              <p><strong>Email:</strong> {doctor.email}</p>
              <p><strong>Specialization:</strong> {doctor.specialization}</p>
              <p><strong>Status:</strong> <span className="status-pending">{doctor.status}</span></p>
            </div>
            <div className="request-actions">
              <button 
                className="view-btn"
                onClick={() => {
                  setSelectedRequest(doctor);
                  setSelectedRequestType('doctor');
                  setCurrentView('viewDocuments');
                }}
              >
                View
              </button>
              <button 
                className="approve-btn"
                onClick={() => handleApprove(doctor.id, 'Doctor')}
              >
                Approve
              </button>
              <button 
                className="reject-btn"
                onClick={() => handleReject(doctor.id, 'Doctor')}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPHCRequests = () => (
    <div className="view-container">
      <div className="view-header">
        <h2>PHC Account Requests</h2>
        <button className="back-btn" onClick={() => setCurrentView('viewRequests')}>Back to Requests</button>
      </div>
      <div className="requests-list">
        {mockPHCRequests.map(phc => (
          <div key={phc.id} className="request-card">
            <div className="request-info">
              <h3>{phc.name}</h3>
              <p><strong>Email:</strong> {phc.email}</p>
              <p><strong>Location:</strong> {phc.location}</p>
              <p><strong>Status:</strong> <span className="status-pending">{phc.status}</span></p>
            </div>
            <div className="request-actions">
              <button 
                className="view-btn"
                onClick={() => {
                  setSelectedRequest(phc);
                  setSelectedRequestType('phc');
                  setCurrentView('viewDocuments');
                }}
              >
                View
              </button>
              <button 
                className="approve-btn"
                onClick={() => handleApprove(phc.id, 'PHC')}
              >
                Approve
              </button>
              <button 
                className="reject-btn"
                onClick={() => handleReject(phc.id, 'PHC')}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderViewDocuments = () => (
    <div className="view-container">
      <div className="view-header">
        <h2>{selectedRequest?.name} - Documents</h2>
        <button 
          className="back-btn" 
          onClick={() => setCurrentView(selectedRequestType === 'doctor' ? 'doctorRequests' : 'phcRequests')}
        >
          Back to Requests
        </button>
      </div>
      <div className="documents-container">
        <div className="applicant-info">
          <h3>Applicant Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <strong>Name:</strong> {selectedRequest?.name}
            </div>
            <div className="info-item">
              <strong>Email:</strong> {selectedRequest?.email}
            </div>
            {selectedRequestType === 'doctor' && (
              <div className="info-item">
                <strong>Specialization:</strong> {selectedRequest?.specialization}
              </div>
            )}
            {selectedRequestType === 'phc' && (
              <div className="info-item">
                <strong>Location:</strong> {selectedRequest?.location}
              </div>
            )}
          </div>
        </div>
        
        <div className="documents-list">
          <h3>Uploaded Documents</h3>
          {selectedRequest?.documents && Object.entries(selectedRequest.documents).map(([key, filename]) => (
            <div key={key} className="document-item">
              <div className="document-info">
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                <span>{filename}</span>
              </div>
              <button className="view-doc-btn">View Document</button>
            </div>
          ))}
        </div>

        <div className="final-actions">
          <button 
            className="approve-btn"
            onClick={() => handleApprove(selectedRequest?.id, selectedRequestType)}
          >
            Approve Application
          </button>
          <button 
            className="reject-btn"
            onClick={() => handleReject(selectedRequest?.id, selectedRequestType)}
          >
            Reject Application
          </button>
        </div>
      </div>
    </div>
  );

  const renderCurrentView = () => {
    switch(currentView) {
      case 'login': return renderLogin();
      case 'dashboard': return renderDashboard();
      case 'viewUsers': return renderViewUsers();
      case 'viewRequests': return renderViewRequests();
      case 'doctorRequests': return renderDoctorRequests();
      case 'phcRequests': return renderPHCRequests();
      case 'viewDocuments': return renderViewDocuments();
      default: return renderLogin();
    }
  };

  return (
    <div className="superadmin-portal">
      {renderCurrentView()}
    </div>
  );
}

export default SuperAdminPortal;