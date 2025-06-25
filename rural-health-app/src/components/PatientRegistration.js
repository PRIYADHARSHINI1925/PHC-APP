import React, { useState } from 'react';
import './PatientRegistration.css'; // Import the CSS file

function PatientRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    mobile: '',
    guardian: '',
    symptoms: '',
    focus: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // You can push to backend or localStorage here
    alert("Patient registered successfully!");
    setFormData({
      name: '',
      age: '',
      gender: '',
      address: '',
      mobile: '',
      guardian: '',
      symptoms: '',
      focus: '',
      file: null
    });
  };

  return (
    <div className="center-wrapper">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Patient Registration</h2>
        
        {/* Personal Information Section */}
        <div className="form-field">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter patient's full name"
            required
          />
        </div>

        {/* Age and Gender in same row */}
        <div className="form-row">
          <div className="form-field">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              min="0"
              max="150"
              required
            />
          </div>
          
          <div className="form-field">
            <label>Gender</label>
            <select 
              name="gender" 
              value={formData.gender} 
              onChange={handleChange} 
              required
            >
              <option value="">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Address */}
        <div className="form-field">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter complete address"
            rows="3"
            required
          />
        </div>

        {/* Contact Information */}
        <div className="form-row">
          <div className="form-field">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              pattern="[0-9]{10}"
              required
            />
          </div>
          
          <div className="form-field">
            <label>Guardian/Spouse</label>
            <input
              type="text"
              name="guardian"
              value={formData.guardian}
              onChange={handleChange}
              placeholder="Guardian or spouse name"
            />
          </div>
        </div>

        {/* Medical Information */}
        <div className="form-field">
          <label>Symptoms</label>
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="Describe current symptoms and concerns"
            rows="4"
            required
          />
        </div>

        <div className="form-field">
          <label>Focus (Chief Concern)</label>
          <input
            type="text"
            name="focus"
            value={formData.focus}
            onChange={handleChange}
            placeholder="Main health concern or reason for visit"
          />
        </div>

        {/* File Upload */}
        <div className="form-field">
          <label>Upload Medical Documents</label>
          <input
            type="file"
            name="file"
            accept="image/*,application/pdf,.doc,.docx"
            onChange={handleChange}
          />
          <small style={{color: 'var(--text-light)', fontSize: '12px', marginTop: '5px', display: 'block'}}>
            Supported formats: Images (JPG, PNG), PDF, Word documents
          </small>
        </div>

        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
}

export default PatientRegistration;