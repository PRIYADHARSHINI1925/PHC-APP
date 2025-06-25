import React from 'react';
import './ViewDoctors.css';

const doctorList = [
  {
    id: 1,
    name: 'Dr. Arjun Raj',
    education: 'MBBS, MD (General Medicine)',
    specialization: 'Internal Medicine',
    hospital: 'Apollo Hospitals',
    city: 'Chennai',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Dr. Revathi Menon',
    education: 'MBBS, MS (Orthopedics)',
    specialization: 'Orthopedic Surgeon',
    hospital: 'Fortis Healthcare',
    city: 'Bangalore',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Dr. Sanjay Kumar',
    education: 'MBBS, DGO',
    specialization: 'Gynecology',
    hospital: 'AIIMS',
    city: 'Delhi',
    photo: 'https://randomuser.me/api/portraits/men/54.jpg'
  },
  {
    id: 4,
    name: 'Dr. Aarthi Ramesh',
    education: 'MBBS, MD (Pediatrics)',
    specialization: 'Pediatrician',
    hospital: 'Rainbow Hospitals',
    city: 'Hyderabad',
    photo: 'https://randomuser.me/api/portraits/women/58.jpg'
  }
];

const ViewDoctors = () => {
  return (
    <div className="doctors-container">
      <h2 className="section-heading">Our Doctors</h2>
      <div className="doctors-grid">
        {doctorList.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-education">{doctor.education}</p>
            <p className="doctor-specialization"><strong>Specialization:</strong> {doctor.specialization}</p>
            <p className="doctor-hospital"><strong>Hospital:</strong> {doctor.hospital}</p>
            <p className="doctor-city"><strong>City:</strong> {doctor.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDoctors;
