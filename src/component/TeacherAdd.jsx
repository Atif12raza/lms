import React, { useState } from 'react';
import './TeacherAdd.css';  // You can create custom CSS for this component
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';  // Import your Firebase configuration
import { useNavigate } from 'react-router-dom';  // Use navigate for redirection

function TeacherAdd() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    gender: '',
  });

  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form submission from causing a page refresh

    try {
      // Add teacher's data to Firestore
      await addDoc(collection(db, 'teachers'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        subject: formData.subject,
        gender: formData.gender,
      });

      console.log('Teacher Form Submitted:', formData); // Log form data

      // Clear form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        gender: '',
      });

      alert('Teacher data saved successfully!'); // Optionally show success message

      // Redirect to teacher list page after successful submission
      navigate('/teachers/list');  // This will take the user to the teacher list page (you need to set this route in your app)
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
      alert('Error saving teacher data. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-heading">Teacher Registration Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">First Name:</label>
          <input
            style={{ color: 'white', backgroundColor: 'black' }}
            type="text"
            name="firstName"
            placeholder="Enter teacher's first name"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            required
          />

          <label className="form-label">Last Name:</label>
          <input
            style={{ color: 'white', backgroundColor: 'black' }}
            type="text"
            name="lastName"
            placeholder="Enter teacher's last name"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            required
          />

          <label className="form-label">Email:</label>
          <input
            style={{ color: 'white', backgroundColor: 'black' }}
            type="email"
            name="email"
            placeholder="Enter teacher's email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />

          <label className="form-label">Subject:</label>
          <input
            style={{ color: 'white', backgroundColor: 'black' }}
            type="text"
            name="subject"
            placeholder="Enter teacher's subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            required
          />

          <label className="form-label">Gender:</label>
          <div className="gender-options">
            <label className="gender-label">
              <input
                style={{ color: 'white', backgroundColor: 'black' }}
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                className="gender-input"
                required
              />
              Female
            </label>
            <label className="gender-label">
              <input
                style={{ color: 'white', backgroundColor: 'black' }}
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                className="gender-input"
                required
              />
              Male
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default TeacherAdd;
