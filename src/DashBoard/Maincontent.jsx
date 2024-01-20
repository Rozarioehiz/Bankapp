
import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { useSelector } from 'react-redux';
import History from './History';
// import BarChart from './Bar'; // Update the path

const Maincontent = () => {
  const UserBalance = useSelector((state) => state.mySlice.userBalance);
  const UserAcct = useSelector((state) => state.mySlice.userAcct);
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    // Your logic here to handle the effect when acctBalance changes
    console.log('Acct Balance updated:', UserBalance?.acctBalance);
    // You can perform any other actions or trigger UI updates here
  }, [UserBalance?.acctBalance]);

  


  return (
    <div className="Maincontent">
      <div className="Mainbalance">
        <h4>Balance</h4>
        <h2>₦ {UserBalance?.acctBalance}</h2>
        <p>Account Number: <span style={{fontWeight:"bolder",fontSize:"20px",color:"#001f54"}}>{UserAcct?.acctNum}</span> </p>
      </div>
      <div className="chartHold" >
        <History/>
      </div>
     
    </div>
  );
};

export default Maincontent;
