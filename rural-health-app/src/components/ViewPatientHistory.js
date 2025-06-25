import React, { useState } from 'react';
import './ViewPatientHistory.css';

const patientData = [
  {
    id: 1,
    name: 'Meera Devi',
    age: 42,
    gender: 'Female',
    history: [
      { title: 'Cough & Cold', date: '2024-11-18', doctor: 'Dr. Arjun Raj' },
      { title: 'Back Pain', date: '2024-09-02', doctor: 'Dr. Revathi Menon' },
    ],
  },
  {
    id: 2,
    name: 'Ravi Kumar',
    age: 35,
    gender: 'Male',
    history: [
      { title: 'Fever', date: '2024-10-10', doctor: 'Dr. Aarthi Ramesh' },
      { title: 'Blood Pressure Check', date: '2024-08-15', doctor: 'Dr. Sanjay Kumar' },
    ],
  },
  {
    id: 3,
    name: 'Latha Priya',
    age: 28,
    gender: 'Female',
    history: [
      { title: 'Stomach Pain', date: '2024-08-21', doctor: 'Dr. Sanjay Kumar' },
      { title: 'Fatigue', date: '2024-07-12', doctor: 'Dr. Revathi Menon' },
      { title: 'Headache', date: '2024-06-05', doctor: 'Dr. Arjun Raj' },
    ],
  },
  {
    id: 4,
    name: 'Kiran Nair',
    age: 55,
    gender: 'Male',
    history: [
      { title: 'Diabetes Check-up', date: '2024-11-20', doctor: 'Dr. Revathi Menon' },
      { title: 'Joint Pain', date: '2024-10-18', doctor: 'Dr. Aarthi Ramesh' },
    ],
  },
];

const ViewPatientHistory = () => {
  const [expandedPatientId, setExpandedPatientId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleHistory = (id) => {
    setExpandedPatientId(prevId => (prevId === id ? null : id));
  };

  // Filter patients based on search term
  const filteredPatients = patientData.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.age.toString().includes(searchTerm) ||
    patient.gender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="patient-history-container">
      <h2 className="section-heading">Patient Medical History</h2>
      
      {/* Search Bar */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search by name, age, or gender..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px 15px',
            fontSize: '14px',
            border: '2px solid var(--border-color)',
            borderRadius: '8px',
            width: '300px',
            maxWidth: '100%',
            backgroundColor: 'var(--white)',
            color: 'var(--text-dark)'
          }}
        />
      </div>

      {/* Main Table */}
      {filteredPatients.length > 0 ? (
        <table className="patient-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <React.Fragment key={patient.id}>
                <tr 
                  className="clickable-row" 
                  onClick={() => toggleHistory(patient.id)}
                  title="Click to view medical history"
                >
                  <td><strong>{patient.name}</strong></td>
                  <td>{patient.age} years</td>
                  <td>{patient.gender}</td>
                </tr>
                {expandedPatientId === patient.id && (
                  <tr>
                    <td colSpan="3" style={{ padding: '0', border: 'none' }}>
                      <div className="history-section">
                        <h3>Medical History - {patient.name}</h3>
                        {patient.history.length > 0 ? (
                          <table className="history-table">
                            <thead>
                              <tr>
                                <th>Complaint/Condition</th>
                                <th>Visit Date</th>
                                <th>Consulting Doctor</th>
                              </tr>
                            </thead>
                            <tbody>
                              {patient.history.map((entry, index) => (
                                <tr key={index}>
                                  <td>
                                    <strong>{entry.title}</strong>
                                  </td>
                                  <td>{new Date(entry.date).toLocaleDateString('en-IN', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric'
                                  })}</td>
                                  <td>{entry.doctor}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <p className="empty-state">No medical history available for this patient.</p>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-state">
          <p>No patients found matching your search criteria.</p>
        </div>
      )}
      
      {/* Summary Info */}
      <div style={{ 
        marginTop: '20px', 
        textAlign: 'center', 
        color: 'var(--text-light)', 
        fontSize: '14px' 
      }}>
        Showing {filteredPatients.length} of {patientData.length} patients
      </div>
    </div>
  );
};

export default ViewPatientHistory;