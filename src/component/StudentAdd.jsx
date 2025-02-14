import React, { useState } from 'react';
import './StudentAdd.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';  

function StudentAdd() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    className: '',
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
      await addDoc(collection(db, "students"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        className: formData.className,
        gender: formData.gender,
      });

      console.log('Form Submitted:', formData); 

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        className: '',
        gender: '',
      });

      alert('Student data saved successfully!'); 

      navigate('/students/list');  
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
      alert('Error saving student data. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-heading">Student Registration Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">First Name:</label>
          <input
            style={{ color: 'white', backgroundColor: 'black' }}
            type="text"
            name="firstName"
            placeholder="Enter your first name"
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
            placeholder="Enter your last name"
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
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />

          <label className="form-label">Class:</label>
          <input
            style={{ color: 'white', backgroundColor: 'black' }}
            type="text"
            name="className"
            placeholder="Enter your class name"
            value={formData.className}
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

          <button onClick={navigate} type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentAdd;
