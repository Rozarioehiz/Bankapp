// Betting.js
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Oval } from 'react-loader-spinner';
import { userBalance } from '../Features/Slice';

const Betting = () => {
  const [betId, setBettingID] = useState('');
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const userToken = useSelector((state) => state.mySlice.userToken);
  const dispatch = useDispatch();

  const url = "https://twopay-bank.onrender.com/api/v1/betting"; 

  const handleBettingIDChange = (e) => {
    setBettingID(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleBetting = async () => {
    try {
      setLoading(true);

      const response = await axios.put(
        url,
        {
          betId,
          amount,
          pin,
        },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );

      if (response.status === 200) {
        // Successful betting
        Swal.fire('Success', 'Betting successful!', 'success');
        // Dispatch an action if needed, for example, to update user balance
        dispatch(userBalance(response.data.balance));
      } else {
        // Handle other status codes or error responses
        Swal.fire('Error', 'Betting failed. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error placing bet:', error);
      if (error.response) {
        Swal.fire(`${error.response.data.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bettingWrapper">
      <div className="bettingContent">
        <h2>Betting</h2>

        <div className="bettingInput">
          <label>Betting ID</label>
          <input
            type="text"
            placeholder="Enter Betting ID"
            value={betId}
            onChange={handleBettingIDChange}
          />
        </div>

        <div className="bettingInput">
          <label>Amount</label>
          <input
            type="text"
            placeholder="Enter Betting Amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <div className="bettingInput">
          <label>Pin</label>
          <input
            type="password"
            placeholder="Enter your PIN"
            value={pin}
            onChange={handlePinChange}
          />
        </div>

        <button className="bettingButton" onClick={handleBetting}>
          {loading ? (
            <div className='loader'>
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
            </div>
          ) : (
            <span>Place Bet</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Betting;
