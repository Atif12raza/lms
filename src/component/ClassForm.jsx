import React, { useState } from 'react';
import { db } from '../firebase'; 
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; 
import './StudentAdd.css';

const ClassForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dob: '',
    qualification: '',
    gender: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add data to Firestore
      await addDoc(collection(db, 'Class Form'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        dob: formData.dob,
        qualification: formData.qualification,
        gender: formData.gender,
      });

      console.log('Form Submitted:', formData);

      // Reset form data after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dob: '',
        qualification: '',
        gender: '',
      });

      alert('Data saved successfully!');

      // Navigate to the "ClassRegistration" page with form data as state
      navigate('/class/registration', { state: formData }); 
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-heading">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label">First Name:</label>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            className="form-input" 
            placeholder="Enter your first name" 
            required 
          />

          <label className="form-label">Last Name:</label>
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            className="form-input" 
            placeholder="Enter your last name" 
            required 
          />

          <label className="form-label">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="form-input" 
            placeholder="Enter your email" 
            required 
          />

          <label className="form-label">Phone Number:</label>
          <input 
            type="tel" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            className="form-input" 
            placeholder="Enter your phone number" 
            required 
          />

          <label className="form-label">Date of Birth:</label>
          <input 
            type="date" 
            name="dob" 
            value={formData.dob} 
            onChange={handleChange} 
            className="form-input" 
            required 
          />

          <label className="form-label">Qualification:</label>
          <input 
            type="text" 
            name="qualification" 
            value={formData.qualification} 
            onChange={handleChange} 
            className="form-input" 
            placeholder="Enter your qualification" 
            required 
          />

          <label className="form-label">Gender:</label>
          <div className="gender-options">
            <label className="gender-label">
              <input 
                type="radio" 
                name="gender" 
                value="Female" 
                checked={formData.gender === 'Female'} 
                onChange={handleChange} 
                className="gender-input" 
              /> Female
            </label>
            <label className="gender-label">
              <input 
                type="radio" 
                name="gender" 
                value="Male" 
                checked={formData.gender === 'Male'} 
                onChange={handleChange} 
                className="gender-input" 
              /> Male
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClassForm;
