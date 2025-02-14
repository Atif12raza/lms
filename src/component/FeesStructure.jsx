import React from 'react';
import './FeesStructure.css';

const feeData = [
  { class: 'Class 1', monthlyFee: 500, yearlyFee: 6000 },
  { class: 'Class 2', monthlyFee: 600, yearlyFee: 7200 },
  { class: 'Class 3', monthlyFee: 700, yearlyFee: 8400 },
  { class: 'Class 4', monthlyFee: 800, yearlyFee: 9600 },
  { class: 'Class 5', monthlyFee: 900, yearlyFee: 10800 },
  { class: 'Class 6', monthlyFee: 1000, yearlyFee: 12000 },
  { class: 'Class 7', monthlyFee: 1100, yearlyFee: 13200 },
  { class: 'Class 8', monthlyFee: 1200, yearlyFee: 14400 },
  { class: 'Class 9', monthlyFee: 1300, yearlyFee: 15600 },
  { class: 'Class 10', monthlyFee: 1400, yearlyFee: 16800 },
];

const FeesStructure = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Fee Structure</h1>
        <div className="grid">
          {feeData.map((item, index) => (
            <div key={index} className="card">
              <h2 className="class-name">{item.class}</h2>
              <p className="fee monthly">
                Monthly Fee: <span>Rs.{item.monthlyFee}</span>
              </p>
              <p className="fee yearly">
                Yearly Fee: <span>Rs.{item.yearlyFee}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeesStructure;
