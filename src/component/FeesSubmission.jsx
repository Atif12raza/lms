import React, { useState } from 'react';
import './style.css'
const FeesSubmission = () => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    amount: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-heading">Payment for</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label">Name *</label>
            <input 
            placeholder='Name'
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="form-input"
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Class</label>
            <input 
            placeholder='Class'
              type="text" 
              name="class" 
              value={formData.class} 
              onChange={handleChange} 
              className="form-input"
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Amount</label>
            <input 
            placeholder='Amount'
              type="number" 
              name="amount" 
              value={formData.amount} 
              onChange={handleChange} 
              className="form-input"
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Payment Method *</label>
            <select 
              name="paymentMethod" 
              value={formData.paymentMethod} 
              onChange={handleChange} 
              required 
              className="form-input"
            >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

export default FeesSubmission;
