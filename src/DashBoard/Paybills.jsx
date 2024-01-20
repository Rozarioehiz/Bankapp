// Paybills.js
import React from 'react';
import Betting from './Betting'; // Import the Betting component
import './dashboard.css'; // Import the paybills.css file for styling

const Paybills = () => {
  return (
    <div className="dashboard-container">
      <div className="Menu">
        {/* Include your Menu component here */}
      </div>
      <div className="Holder">
        <div className="DashboardContent">
          <h2>Pay Bills</h2>
          <Betting />
        </div>
      </div>
    </div>
  );
};

export default Paybills;
