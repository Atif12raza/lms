import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SubjectAdd = () => {
  const [formData, setFormData] = useState({
    subjectName: '',
    className: '',
    group: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "subjects"), {
        subjectName: formData.subjectName,
        className: formData.className,
        group: formData.group,
      });

      console.log('Form Submitted:', formData);

      setFormData({
        subjectName: '',
        className: '',
        group: '',
      });

      alert('Subject data saved successfully!');

      navigate('/subjects/list');
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
      alert('Error saving subject data. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-heading">Subject Registration Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">Subject Name:</label>
          <input
            style={{ color: 'white', backgroundColor: 'black' }}
            type="text"
            name="subjectName"
            placeholder="Enter subject name"
            value={formData.subjectName}
            onChange={handleChange}
            className="form-input"
            required
          />

          <label className="form-label">Class:</label>
          <input
            style={{ color: 'white', backgroundColor: 'black' }}
            type="text"
            name="className"
            placeholder="Enter class name"
            value={formData.className}
            onChange={handleChange}
            className="form-input"
            required
          />

            <legend className="form-heading">Select Group</legend>
            <label style={{color:'white'}} className="group-label">
              <input
                style={{ color: 'white', backgroundColor: 'black' }}
                type="radio"
                name="group"
                value="General Science"
                checked={formData.group === 'General Science'}
                onChange={handleChange}
                className="group-input"
                required
              />
              General Science
            </label>
            <br />
            <label style={{color:'white'}} className="group-label">
              <input
                style={{ color: 'white', backgroundColor: 'black' }}
                type="radio"
                name="group"
                value="Pre-Engineering"
                checked={formData.group === 'Pre-Engineering'}
                onChange={handleChange}
                className="group-input"
                required
              />
              Pre-Engineering
            </label>

          <button type="submit" className="submit-btn">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubjectAdd;
