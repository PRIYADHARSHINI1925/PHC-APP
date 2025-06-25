import React, { useState } from 'react';
import './ViewStatus.css';

const dummyData = [
  {
    id: 'RH-2025-0001',
    name: 'Meera Devi',
    date: '2025-06-20',
    issue: 'Cough & Cold',
    status: 'Pending',
    doctor: 'Dr. Arjun',
    nextAppointment: ''
  },
  {
    id: 'RH-2025-0002',
    name: 'Ravi Kumar',
    date: '2025-06-19',
    issue: 'Blood Pressure',
    status: 'Completed',
    doctor: 'Dr. Lakshmi',
    nextAppointment: '2025-06-25'
  },
  {
    id: 'RH-2025-0003',
    name: 'Kala Rani',
    date: '2025-06-18',
    issue: 'Fever',
    status: 'Follow-up',
    doctor: 'Dr. Veer',
    nextAppointment: '2025-06-23'
  }
];

function ViewStatus() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredPatients = dummyData.filter(patient => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'All' || patient.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="view-status-container">
      <h2 className="status-heading">Patient Status</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Follow-up">Follow-up</option>
        </select>
      </div>

      <div className="table-container">
        <table className="status-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Visit Date</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Doctor</th>
              <th>Next Appointment</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length === 0 ? (
              <tr>
                <td colSpan="7" className="no-records">No records found.</td>
              </tr>
            ) : (
              filteredPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.date}</td>
                  <td>{patient.issue}</td>
                  <td>{patient.status}</td>
                  <td>{patient.doctor}</td>
                  <td>{patient.nextAppointment || '-'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewStatus;
