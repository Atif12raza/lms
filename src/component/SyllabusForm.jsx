import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SyllabusAdd = () => {
  const [formData, setFormData] = useState({
    subject: '',
    className: '',
    pdf: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, pdf: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.pdf) {
      alert('Please upload a PDF file.');
      return;
    }

    try {
      await addDoc(collection(db, 'syllabuses'), {
        subject: formData.subject,
        className: formData.className,
        pdf: formData.pdf.name,
      });

      console.log('Form Submitted:', formData);

      setFormData({
        subject: '',
        className: '',
        pdf: null,
      });

      alert('Syllabus data saved successfully!');
      navigate('/syllabus/list');
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
      alert('Error saving syllabus data. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-heading">Add Syllabus</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">Subject Name:</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter subject name"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            required
          />

          <label className="form-label">Class:</label>
          <input
            type="text"
            name="className"
            placeholder="Enter class name"
            value={formData.className}
            onChange={handleChange}
            className="form-input"
            required
          />

          <label className="form-label">Upload PDF:</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="form-input"
            required
          />

          <button type="submit" className="submit-btn">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default SyllabusAdd;
