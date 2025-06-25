import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RoleSelection from './pages/RoleSelection';
import AdminLogin from './pages/AdminLogin';
import StaffLogin from './pages/StaffLogin';

import Sidebar from './components/Sidebar';
import PatientRegistration from './components/PatientRegistration';
import ViewDoctors from './components/ViewDoctors';
import ViewStatus from './components/ViewStatus';
import ViewPatientHistory from './components/ViewPatientHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/staff" element={<StaffLogin />} />

        {/* Dashboard Routes */}
        <Route
          path="/dashboard/patient-registration"
          element={
            <>
              <Sidebar />
              <PatientRegistration />
            </>
          }
        />
        <Route
          path="/dashboard/view-doctors"
          element={
            <>
              <Sidebar />
              <ViewDoctors />
            </>
          }
        />
        <Route
          path="/dashboard/view-status"
          element={
            <>
              <Sidebar />
              <ViewStatus />
            </>
          }
        />
        <Route
          path="/dashboard/patient-history"
          element={
            <>
              <Sidebar />
              <ViewPatientHistory />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
