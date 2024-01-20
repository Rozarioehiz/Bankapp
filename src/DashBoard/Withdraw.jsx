import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Oval } from 'react-loader-spinner';
import { userBalance } from '../Features/Slice';

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const userToken = useSelector((state) => state.mySlice.userToken);
  const dispatch = useDispatch();

  const Url = "https://twopay-bank.onrender.com/api/v1/withdraw";

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleWithdraw = async () => {
    try {
      setLoading(true);

      const response = await axios.put(
        Url,
        {
          amount,
          pin,
        },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );

      if (response.status === 200) {
        // Successful withdrawal
        Swal.fire('Success', 'Withdrawal successful!', 'success');
        // Dispatch an action if needed, for example, to update user balance
        dispatch(userBalance(response.data.balance));
      } else {
        // Handle other status codes or error responses
        Swal.fire('Error', 'Withdrawal failed. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error withdrawing money:', error);
      if (error.response) {
        Swal.fire(`${error.response.data.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="withdrawWrapper">
      <div className="withdrawContent">
        <h2>Withdraw</h2>

        <div className="withdrawInput">
          <label>Amount</label>
          <input
            type="text"
            placeholder="Enter withdrawal amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <div className="withdrawInput">
          <label>Pin</label>
          <input
            type="password"
            placeholder="Enter your PIN"
            value={pin}
            onChange={handlePinChange}
          />
        </div>

        <button className="withdrawButton" onClick={handleWithdraw}>
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
            <span>Withdraw</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Withdraw;
