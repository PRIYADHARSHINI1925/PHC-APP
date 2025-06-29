
import React, { useState } from 'react';
import { Eye, Users, FileText, Check, X, ArrowLeft, Stethoscope, Building2 } from 'lucide-react';

const SuperAdminPortal = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Hardcoded data
  const approvedUsers = [
    { id: 1, name: 'Dr. John Smith', email: 'john.smith@hospital.com', role: 'Doctor', joinDate: '2024-01-15' },
    { id: 2, name: 'PHC Mumbai Central', email: 'mumbai.central@phc.gov.in', role: 'PHC', joinDate: '2024-02-10' },
    { id: 3, name: 'Dr. Sarah Johnson', email: 'sarah.j@clinic.com', role: 'Doctor', joinDate: '2024-01-20' },
    { id: 4, name: 'PHC Andheri East', email: 'andheri.east@phc.gov.in', role: 'PHC', joinDate: '2024-02-05' },
    { id: 5, name: 'Dr. Rajesh Patel', email: 'rajesh.patel@hospital.com', role: 'Doctor', joinDate: '2024-01-25' }
  ];

  const doctorRequests = [
    {
      id: 1,
      name: 'Dr. Amit Sharma',
      email: 'amit.sharma@gmail.com',
      phone: '+91 9876543210',
      specialization: 'Cardiology',
      experience: '10 years',
      hospital: 'Apollo Hospital',
      license: 'MH/DOC/2024/001',
      documents: ['Medical License', 'Degree Certificate', 'Experience Letter']
    },
    {
      id: 2,
      name: 'Dr. Priya Reddy',
      email: 'priya.reddy@hospital.com',
      phone: '+91 9876543211',
      specialization: 'Pediatrics',
      experience: '8 years',
      hospital: 'Fortis Hospital',
      license: 'MH/DOC/2024/002',
      documents: ['Medical License', 'Degree Certificate', 'Experience Letter']
    },
    {
      id: 3,
      name: 'Dr. Vikram Singh',
      email: 'vikram.singh@clinic.com',
      phone: '+91 9876543212',
      specialization: 'Orthopedics',
      experience: '12 years',
      hospital: 'Max Hospital',
      license: 'MH/DOC/2024/003',
      documents: ['Medical License', 'Degree Certificate', 'Experience Letter']
    },
    {
      id: 4,
      name: 'Dr. Meera Joshi',
      email: 'meera.joshi@medical.com',
      phone: '+91 9876543213',
      specialization: 'Gynecology',
      experience: '7 years',
      hospital: 'Lilavati Hospital',
      license: 'MH/DOC/2024/004',
      documents: ['Medical License', 'Degree Certificate', 'Experience Letter']
    },
    {
      id: 5,
      name: 'Dr. Arjun Kumar',
      email: 'arjun.kumar@hospital.com',
      phone: '+91 9876543214',
      specialization: 'Neurology',
      experience: '15 years',
      hospital: 'Hinduja Hospital',
      license: 'MH/DOC/2024/005',
      documents: ['Medical License', 'Degree Certificate', 'Experience Letter']
    },
    {
      id: 6,
      name: 'Dr. Kavita Menon',
      email: 'kavita.menon@clinic.com',
      phone: '+91 9876543215',
      specialization: 'Dermatology',
      experience: '9 years',
      hospital: 'Breach Candy Hospital',
      license: 'MH/DOC/2024/006',
      documents: ['Medical License', 'Degree Certificate', 'Experience Letter']
    },
    {
      id: 7,
      name: 'Dr. Suresh Nair',
      email: 'suresh.nair@medical.com',
      phone: '+91 9876543216',
      specialization: 'General Medicine',
      experience: '11 years',
      hospital: 'KEM Hospital',
      license: 'MH/DOC/2024/007',
      documents: ['Medical License', 'Degree Certificate', 'Experience Letter']
    },
    {
      id: 8,
      name: 'Dr. Anjali Gupta',
      email: 'anjali.gupta@hospital.com',
      phone: '+91 9876543217',
      specialization: 'Psychiatry',
      experience: '6 years',
      hospital: 'Jaslok Hospital',
      license: 'MH/DOC/2024/008',
      documents: ['Medical License', 'Degree Certificate', 'Experience Letter']
    }
  ];

  const phcRequests = [
    {
      id: 1,
      name: 'PHC Borivali West',
      email: 'borivali.west@phc.gov.in',
      phone: '+91 22-28920001',
      address: 'Borivali West, Mumbai - 400092',
      district: 'Mumbai Suburban',
      headOfficer: 'Dr. Ramesh Patil',
      registrationNo: 'MH/PHC/2024/001',
      documents: ['Registration Certificate', 'NOC from Health Department', 'Infrastructure Certificate']
    },
    {
      id: 2,
      name: 'PHC Malad East',
      email: 'malad.east@phc.gov.in',
      phone: '+91 22-28920002',
      address: 'Malad East, Mumbai - 400097',
      district: 'Mumbai Suburban',
      headOfficer: 'Dr. Sunita Sharma',
      registrationNo: 'MH/PHC/2024/002',
      documents: ['Registration Certificate', 'NOC from Health Department', 'Infrastructure Certificate']
    },
    {
      id: 3,
      name: 'PHC Kandivali North',
      email: 'kandivali.north@phc.gov.in',
      phone: '+91 22-28920003',
      address: 'Kandivali North, Mumbai - 400101',
      district: 'Mumbai Suburban',
      headOfficer: 'Dr. Prakash Desai',
      registrationNo: 'MH/PHC/2024/003',
      documents: ['Registration Certificate', 'NOC from Health Department', 'Infrastructure Certificate']
    },
    {
      id: 4,
      name: 'PHC Bhandup West',
      email: 'bhandup.west@phc.gov.in',
      phone: '+91 22-28920004',
      address: 'Bhandup West, Mumbai - 400078',
      district: 'Mumbai Suburban',
      headOfficer: 'Dr. Vidya Kulkarni',
      registrationNo: 'MH/PHC/2024/004',
      documents: ['Registration Certificate', 'NOC from Health Department', 'Infrastructure Certificate']
    },
    {
      id: 5,
      name: 'PHC Mulund East',
      email: 'mulund.east@phc.gov.in',
      phone: '+91 22-28920005',
      address: 'Mulund East, Mumbai - 400081',
      district: 'Mumbai Suburban',
      headOfficer: 'Dr. Ashok Jain',
      registrationNo: 'MH/PHC/2024/005',
      documents: ['Registration Certificate', 'NOC from Health Department', 'Infrastructure Certificate']
    },
    {
      id: 6,
      name: 'PHC Powai',
      email: 'powai@phc.gov.in',
      phone: '+91 22-28920006',
      address: 'Powai, Mumbai - 400076',
      district: 'Mumbai Suburban',
      headOfficer: 'Dr. Rekha Singh',
      registrationNo: 'MH/PHC/2024/006',
      documents: ['Registration Certificate', 'NOC from Health Department', 'Infrastructure Certificate']
    },
    {
      id: 7,
      name: 'PHC Vikhroli West',
      email: 'vikhroli.west@phc.gov.in',
      phone: '+91 22-28920007',
      address: 'Vikhroli West, Mumbai - 400079',
      district: 'Mumbai Suburban',
      headOfficer: 'Dr. Mohan Rao',
      registrationNo: 'MH/PHC/2024/007',
      documents: ['Registration Certificate', 'NOC from Health Department', 'Infrastructure Certificate']
    },
    {
      id: 8,
      name: 'PHC Ghatkopar East',
      email: 'ghatkopar.east@phc.gov.in',
      phone: '+91 22-28920008',
      address: 'Ghatkopar East, Mumbai - 400077',
      district: 'Mumbai Suburban',
      headOfficer: 'Dr. Sanjay Patil',
      registrationNo: 'MH/PHC/2024/008',
      documents: ['Registration Certificate', 'NOC from Health Department', 'Infrastructure Certificate']
    }
  ];

  const handleLogin = () => {
    if (loginData.email && loginData.password) {
      setCurrentPage('dashboard');
    }
  };

  const handleApprove = (id, type) => {
    alert(`${type} request with ID ${id} has been approved!`);
  };

  const handleReject = (id, type) => {
    alert(`${type} request with ID ${id} has been rejected!`);
  };

  const renderLogin = () => (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 flex items-center justify-center p-6" style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}>
      <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl w-full max-w-md border border-purple-200/50">
        <h1 className="text-4xl font-black text-center mb-10 text-slate-800 tracking-tight">
          SUPER ADMIN PORTAL
        </h1>
        <div>
          <div className="mb-6">
            <label className="block text-slate-700 font-extrabold mb-3 text-sm uppercase tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              placeholder="Enter admin email"
              className="w-full px-5 py-4 border-2 border-purple-200 rounded-2xl focus:border-purple-400 focus:outline-none transition-all duration-200 font-semibold text-slate-700 bg-purple-50/50 placeholder-slate-400"
            />
          </div>
          <div className="mb-8">
            <label className="block text-slate-700 font-extrabold mb-3 text-sm uppercase tracking-wide">
              Password
            </label>
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              placeholder="Enter password"
              className="w-full px-5 py-4 border-2 border-purple-200 rounded-2xl focus:border-purple-400 focus:outline-none transition-all duration-200 font-semibold text-slate-700 bg-purple-50/50 placeholder-slate-400"
            />
          </div>
          <button 
            onClick={handleLogin} 
            className="w-full bg-gradient-to-r from-purple-300 to-pink-300 text-slate-800 py-4 rounded-2xl font-black text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl tracking-wide uppercase"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-10 flex flex-col items-center relative" style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}>
      <h1 className="text-6xl font-black text-slate-800 mb-16 text-center tracking-tight">
        ADMIN DASHBOARD
      </h1>

      <div className="flex flex-col gap-8 w-full max-w-lg">
        <button
          onClick={() => setCurrentPage('users')}
          className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 flex items-center justify-center gap-6 border border-blue-200/50 hover:border-blue-300"
        >
          <Users size={48} className="text-blue-400" />
          <span className="text-3xl font-black text-slate-800 tracking-wide">VIEW USERS</span>
        </button>

        <button
          onClick={() => setCurrentPage('requests')}
          className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 flex items-center justify-center gap-6 border border-purple-200/50 hover:border-purple-300"
        >
          <FileText size={48} className="text-purple-400" />
          <span className="text-3xl font-black text-slate-800 tracking-wide">VIEW REQUESTS</span>
        </button>
      </div>

      <div className="absolute top-8 right-8">
        <button
          onClick={() => setCurrentPage('login')}
          className="px-8 py-3 border-2 border-slate-400 text-slate-700 rounded-2xl hover:bg-slate-400 hover:text-white transition-all duration-200 font-bold uppercase tracking-wide"
        >
          Logout
        </button>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 p-10" style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8 mb-12">
          <button 
            onClick={() => setCurrentPage('dashboard')} 
            className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-emerald-300 text-emerald-700 rounded-2xl hover:bg-emerald-300 hover:text-white transition-all duration-200 font-bold uppercase tracking-wide"
          >
            <ArrowLeft size={24} />
            Back
          </button>
          <h2 className="text-6xl font-black text-slate-800 tracking-tight">APPROVED USERS</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approvedUsers.map(user => (
            <div key={user.id} className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-200/50">
              <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-wide">{user.name}</h3>
              <div className="space-y-3">
                <p className="text-slate-700 font-bold">
                  <span className="text-emerald-600 font-black">EMAIL:</span> 
                  <span className="font-semibold ml-2">{user.email}</span>
                </p>
                <p className="text-slate-700 font-bold">
                  <span className="text-emerald-600 font-black">ROLE:</span> 
                  <span className="font-semibold ml-2">{user.role}</span>
                </p>
                <p className="text-slate-700 font-bold">
                  <span className="text-emerald-600 font-black">JOINED:</span> 
                  <span className="font-semibold ml-2">{user.joinDate}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRequests = () => (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 flex flex-col items-center relative px-4 py-10" style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}>
      <div className="absolute top-12 text-center">
        <h2 className="text-6xl font-black text-slate-800 flex items-center gap-4 justify-center tracking-tight">
          📋 ACCOUNT REQUESTS
        </h2>
      </div>

      <div className="absolute top-12 left-12">
        <button
          onClick={() => setCurrentPage('dashboard')}
          className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-pink-300 text-pink-700 rounded-2xl hover:bg-pink-300 hover:text-white transition-all duration-200 font-bold uppercase tracking-wide"
        >
          <ArrowLeft size={24} />
          Back
        </button>
      </div>

      <div className="w-full max-w-lg flex flex-col gap-10 mt-32">
        <button
          onClick={() => setCurrentPage('doctor-requests')}
          className="bg-white/80 backdrop-blur-sm px-12 py-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 flex items-center gap-6 justify-center border border-blue-200/50 hover:border-blue-300"
        >
          <Stethoscope className="text-blue-400" size={48} />
          <h3 className="text-3xl font-black text-slate-800 tracking-wide">DOCTOR REQUESTS</h3>
        </button>

        <button
          onClick={() => setCurrentPage('phc-requests')}
          className="bg-white/80 backdrop-blur-sm px-12 py-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 flex items-center gap-6 justify-center border border-purple-200/50 hover:border-purple-300"
        >
          <Building2 className="text-purple-400" size={48} />
          <h3 className="text-3xl font-black text-slate-800 tracking-wide">PHC REQUESTS</h3>
        </button>
      </div>
    </div>
  );

  const renderDoctorRequests = () => (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 p-10" style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8 mb-12">
          <button 
            onClick={() => setCurrentPage('requests')} 
            className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-300 text-blue-700 rounded-2xl hover:bg-blue-300 hover:text-white transition-all duration-200 font-bold uppercase tracking-wide"
          >
            <ArrowLeft size={24} />
            Back
          </button>
          <h2 className="text-6xl font-black text-slate-800 tracking-tight">DOCTOR REQUESTS</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorRequests.map(request => (
            <div key={request.id} className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-blue-200/50 hover:shadow-3xl transition-all duration-300">
              <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-wide">{request.name}</h3>
              <p className="text-slate-700 mb-6 font-bold">
                <span className="text-blue-600 font-black">SPECIALIZATION:</span> 
                <span className="font-semibold ml-2">{request.specialization}</span>
              </p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setSelectedRequest({ ...request, type: 'doctor' })}
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-blue-200 text-blue-800 rounded-2xl hover:bg-blue-300 transition-all duration-200 font-bold uppercase tracking-wide"
                >
                  <Eye size={20} />
                  View Details
                </button>
                <button 
                  onClick={() => handleApprove(request.id, 'Doctor')}
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-green-200 text-green-800 rounded-2xl hover:bg-green-300 transition-all duration-200 font-bold uppercase tracking-wide"
                >
                  <Check size={20} />
                  Approve
                </button>
                <button 
                  onClick={() => handleReject(request.id, 'Doctor')}
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-red-200 text-red-800 rounded-2xl hover:bg-red-300 transition-all duration-200 font-bold uppercase tracking-wide"
                >
                  <X size={20} />
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPhcRequests = () => (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-100 p-10" style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8 mb-12">
          <button 
            onClick={() => setCurrentPage('requests')} 
            className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-purple-300 text-purple-700 rounded-2xl hover:bg-purple-300 hover:text-white transition-all duration-200 font-bold uppercase tracking-wide"
          >
            <ArrowLeft size={24} />
            Back
          </button>
          <h2 className="text-6xl font-black text-slate-800 tracking-tight">PHC REQUESTS</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phcRequests.map(request => (
            <div key={request.id} className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-purple-200/50 hover:shadow-3xl transition-all duration-300">
              <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-wide">{request.name}</h3>
              <p className="text-slate-700 mb-6 font-bold">
                <span className="text-purple-600 font-black">DISTRICT:</span> 
                <span className="font-semibold ml-2">{request.district}</span>
              </p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setSelectedRequest({ ...request, type: 'phc' })}
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-purple-200 text-purple-800 rounded-2xl hover:bg-purple-300 transition-all duration-200 font-bold uppercase tracking-wide"
                >
                  <Eye size={20} />
                  View Details
                </button>
                <button 
                  onClick={() => handleApprove(request.id, 'PHC')}
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-green-200 text-green-800 rounded-2xl hover:bg-green-300 transition-all duration-200 font-bold uppercase tracking-wide"
                >
                  <Check size={20} />
                  Approve
                </button>
                <button 
                  onClick={() => handleReject(request.id, 'PHC')}
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-red-200 text-red-800 rounded-2xl hover:bg-red-300 transition-all duration-200 font-bold uppercase tracking-wide"
                >
                  <X size={20} />
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  const renderRequestDetails = () => {
  if (!selectedRequest) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 p-10" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-8 mb-12">
          <button 
            onClick={() => setSelectedRequest(null)} 
            className="flex items-center gap-3 px-8 py-4 bg-white border-3 border-rose-300 text-rose-600 rounded-2xl hover:bg-rose-300 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-black uppercase tracking-wider text-sm"
          >
            <ArrowLeft size={24} />
            Back
          </button>
          <h2 className="text-6xl font-black text-slate-800 tracking-tight">
            {selectedRequest.type === 'doctor' ? 'DOCTOR' : 'PHC'} DETAILS
          </h2>
        </div>
        
        <div className="bg-white p-12 rounded-3xl shadow-2xl border border-rose-200 backdrop-blur-sm">
          <h3 className="text-4xl font-black text-slate-800 mb-10 tracking-wide text-center border-b-4 border-rose-200 pb-6">
            {selectedRequest.name}
          </h3>
          
          {selectedRequest.type === 'doctor' ? (
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-blue-300">
                  <p className="font-black text-blue-700 uppercase tracking-wider text-sm mb-2">Email Address</p>
                  <p className="font-bold text-slate-700 text-lg">{selectedRequest.email}</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-300">
                  <p className="font-black text-green-700 uppercase tracking-wider text-sm mb-2">Phone Number</p>
                  <p className="font-bold text-slate-700 text-lg">{selectedRequest.phone}</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-2xl border-l-4 border-purple-300">
                  <p className="font-black text-purple-700 uppercase tracking-wider text-sm mb-2">Specialization</p>
                  <p className="font-bold text-slate-700 text-lg">{selectedRequest.specialization}</p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-300">
                  <p className="font-black text-orange-700 uppercase tracking-wider text-sm mb-2">Experience</p>
                  <p className="font-bold text-slate-700 text-lg">{selectedRequest.experience}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-teal-300">
                  <p className="font-black text-teal-700 uppercase tracking-wider text-sm mb-2">Hospital</p>
                  <p className="font-bold text-slate-700 text-lg">{selectedRequest.hospital}</p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl border-l-4 border-indigo-300">
                  <p className="font-black text-indigo-700 uppercase tracking-wider text-sm mb-2">License Number</p>
                  <p className="font-bold text-slate-700 text-lg">{selectedRequest.license}</p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl border-l-4 border-pink-300">
                  <p className="font-black text-pink-700 uppercase tracking-wider text-sm mb-4">Documents</p>
                  <ul className="space-y-3">
                    {selectedRequest.documents.map((doc, index) => (
                      <li key={index} className="bg-white p-4 rounded-xl border-2 border-pink-200 text-slate-700 font-bold shadow-sm hover:shadow-md transition-shadow">
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-blue-300">
                  <p className="font-black text-blue-700 uppercase tracking-wider text-sm mb-2">Email Address</p>
                  <p className="font-bold text-slate-700 text-lg">{selectedRequest.email}</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-300">
                  <p className="font-black text-green-700 uppercase tracking-wider text-sm mb-2">Phone Number</p>
                  <p className="font-bold text-slate-700 text-lg">{selectedRequest.phone}</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-2xl border-l-4 border-purple-300">
                  <p className="font-black text-purple-700 uppercase tracking-wider text-sm mb-2">Address</p>
                  <p className="font-bold text-slate-700 text-lg">{selectedRequest.address}</p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-300">
                  <p className="font-black text-orange-700 uppercase tracking-wider text-sm mb-2">District</p>
                  <p className="font-bold text-slate-700 text-lg">{selectedRequest.district}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-teal-300">
                  <p className="font-black text-teal-700 uppercase tracking-wider text-sm mb-2">Head Officer</p>
                  <p className="font-bold text-slate-700 text-lg">{selectedRequest.headOfficer}</p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl border-l-4 border-indigo-300">
                  <p className="font-black text-indigo-700 uppercase tracking-wider text-sm mb-2">Registration Number</p>
                  <p className="font-bold text-slate-700 text-lg">{selectedRequest.registrationNo}</p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl border-l-4 border-pink-300">
                  <p className="font-black text-pink-700 uppercase tracking-wider text-sm mb-4">Documents</p>
                  <ul className="space-y-3">
                    {selectedRequest.documents.map((doc, index) => (
                      <li key={index} className="bg-white p-4 rounded-xl border-2 border-pink-200 text-slate-700 font-bold shadow-sm hover:shadow-md transition-shadow">
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
  return (
    <>
      {currentPage === 'login' && renderLogin()}
      {currentPage === 'dashboard' && renderDashboard()}
      {currentPage === 'users' && renderUsers()}
      {currentPage === 'requests' && renderRequests()}
      {currentPage === 'doctor-requests' && renderDoctorRequests()}
      {currentPage === 'phc-requests' && renderPhcRequests()}
      {selectedRequest && renderRequestDetails()}
    </>
  );
};

export default SuperAdminPortal;
