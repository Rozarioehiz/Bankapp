
import React, { useState, useEffect } from 'react';
import './dashboard.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import {Oval} from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const Settings = () => {
  const [transferPin, setTransferPin] = useState('');
  const [loading, setLoading] = useState(false);
  const userToken = useSelector((state) => state.mySlice.userToken) 

  useEffect(() => {
    console.log("Settings component mounted");
  }, []);

  const handlePinChange = (e) => {
    setTransferPin(e.target.value);
  };

  const Url = "https://twopay-bank.onrender.com/api/v1/createpin";

  const handleSubmit = async () => {
    try {
      setLoading(true); // Set loading to true before the request

      const data = { pin: transferPin };
      const headers = {
        Authorization: `Bearer ${userToken}`,
        // Add other headers if required by the backend
      };
      const res = await axios.put(Url, data,{headers});

      // Show success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Transfer Pin Created!',
        text: 'Your transfer pin has been successfully created.',
      });
      console.log(res.data.message);

      // Optionally, you can reset the input field after a successful submission
      setTransferPin('');
    } catch (error) {
      // Show error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again.',
      });

      console.error('Error:', error.message);
    } finally {
      setLoading(false); // Set loading back to false after the request
    }
  };

  return (
    <div style={{paddingLeft:"30px"}}>
      <h2>Settings</h2>
      <div>
        <label>Create Transfer Pin:</label>
        <input
          type="text"
          placeholder="Enter Transfer Pin"
          value={transferPin}
          onChange={handlePinChange}
          style={{width: '30%'}}
        />
      </div>
      <div className='setBTN'>
      <button onClick={handleSubmit} style={{padding:"10px 50px",margin:"6px",border:"none",background:"#4D91FF",borderRadius:"5px",color:'white',cursor:'pointer'}}>
                {loading === true ? (<div className='loader'>
            <Oval
                height={30}
                width={30}
                color="#fff"
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#030303"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>) : <span>Submit</span>}
                </button>
      </div>
    </div>
  );
};

export default Settings;
