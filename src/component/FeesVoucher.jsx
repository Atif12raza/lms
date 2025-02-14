import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import './FeesStructure.css';

const feeData = [
  { className: "Class 1", monthlyFee: 500, yearlyFee: 6000 },
  { className: "Class 2", monthlyFee: 600, yearlyFee: 7200 },
  { className: "Class 3", monthlyFee: 700, yearlyFee: 8400 },
  { className: "Class 4", monthlyFee: 800, yearlyFee: 9600 },
  { className: "Class 5", monthlyFee: 900, yearlyFee: 10800 },
  { className: "Class 6", monthlyFee: 1000, yearlyFee: 12000 },
  { className: "Class 7", monthlyFee: 1100, yearlyFee: 13200 },
  { className: "Class 8", monthlyFee: 1200, yearlyFee: 14400 },
  { className: "Class 9", monthlyFee: 1300, yearlyFee: 15600 },
  { className: "Class 10", monthlyFee: 1400, yearlyFee: 16800 },
];

const FeeVouchers = () => {
  const navigate = useNavigate(); // Create an instance of useNavigate

  const handlePayNow = (className) => {
    // Navigate to a payment page when the button is clicked
    navigate(`/fees/submission`); // Navigate to the payment page with className as a parameter
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Fee Vouchers</h1>
        <div className="grid">
          {feeData.map((fee, index) => (
            <div key={index} className="card">
              <h2 className="class-name">Fee Voucher - {fee.className}</h2>
              <p className="fee monthly">
                Monthly Fee: <span>Rs.{fee.monthlyFee}</span>
              </p>
              <p className="fee yearly">
                Yearly Fee: <span>Rs.{fee.yearlyFee}</span>
              </p>
              <button 
                className="pay-button"
                onClick={() => handlePayNow(fee.className)} // Trigger navigation on click
              >
                Pay Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeeVouchers;
