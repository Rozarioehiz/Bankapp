import React, { useState } from 'react';
import './dashboard.css'; 
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { Oval } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import { userBalance } from '../Features/Slice';


const Deposit = () => {
  const [amount, setAmount] = useState(0);
  const [transferPin, setTransferPin] = useState('');
  const [Loading, setLoading] = useState(false)
  const userToken = useSelector((state) => state.mySlice.userToken) 

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTransferPinChange = (e) => {
    setTransferPin(e.target.value);
  };

  const Url = "https://twopay-bank.onrender.com/api/v1/deposit";
  const dispatch = useDispatch()

  const handleDeposit = async () => {
    try {
      setLoading(true); // Set loading to true before the request

      const data = { pin: transferPin,amount: amount };
      const headers = {
        Authorization: `Bearer ${userToken}`,
        // Add other headers if required by the backend
      };
      const res = await axios.put(Url, data,{headers});

      // Show success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Deposit Successful',
        text: 'Your deposit has been successfully made. Check Balance',
      });
      console.log(res.data.message);
      dispatch(userBalance(res.data));

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
    <div className="depositWrapper">
      <div className="depositContent">
        <h2>Deposit</h2>

        <div className="depositInput">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter deposit amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <div className="depositInput">
          <label>Transfer Pin</label>
          <input
            type="password"
            placeholder="Enter transfer pin"
            value={transferPin}
            onChange={handleTransferPinChange}
          />
        </div>

        <button className="depositButton" onClick={handleDeposit}>
        
                {Loading === true ? (<div className='loader'>
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
            </div>) : <span>Deposit</span>}
                
        </button>
      </div>
    </div>
  );
};

export default Deposit;
