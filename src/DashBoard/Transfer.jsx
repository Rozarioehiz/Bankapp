import React, { useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useSelector,useDispatch } from 'react-redux';
import './dashboard.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Oval } from 'react-loader-spinner';
import { userBalance } from '../Features/Slice';

const Transfer = () => {
  const [Acct, setReceiverAccountNumber] = useState('');
  const [fetchedAccountName, setFetchedAccountName] = useState('');
  const [amount, setAmount] = useState('');
  const [desc, setDescription] = useState('');
  const [pin, setPin] = useState('');
  const [Loading, setLoading] = useState(false)
  const userToken = useSelector((state) => state.mySlice.userToken) 

  const Url = "https://twopay-bank.onrender.com/api/v1/transfer";

  const handleCheckUser = () => {
    // Implement logic to check user existence and fetch account name
    // For demonstration purposes, a simple alert is used here
    // alert(`Checking user with account number: ${receiverAccountNumber}`);
    // You can replace this with your logic to fetch the account name
    // and set it using setFetchedAccountName
  };

  const headers = {
    Authorization: `Bearer ${userToken}`,
    // Add other headers if required by the backend
  };

  const handleTransfer = async () => {
    try {
      setLoading(true)
      const response = await axios.put(Url, {
        Acct,
        amount,
        desc,
        pin,
      },{headers});

      if (response.status === 200) {
        // Successful transfer
        Swal.fire(`Success', 'Transfer successfully sent to ${fetchedAccountName} !', 'success`);
      } else {
        // Handle other status codes or error responses
        Swal.fire('Error', 'Transfer failed. Please try again.', 'error');
      }
      dispatch(userBalance(res.data.sender));
    } catch (error) {
      console.error('Error transferring money:', error);
      if(error.response){
        Swal.fire(`${error.response.data.message}`);
      }
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <div className="transferWrapper">
      <div className="transferAndButtonDiv">
        <button>
          <IoIosArrowRoundBack size={24} />
        </button>
        <p>Money Transfer</p>
      </div>

      <div className="AccountNumber">
        <label>Receiver's Account Number</label>
        <input
          type="text"
          placeholder="Enter account number"
          value={Acct}
          onChange={(e) => setReceiverAccountNumber(e.target.value)}
        />
        {/* <button onClick={handleCheckUser}>Check User</button> */}
      </div>

      <div className="AccountNumber">
        <label>Account Name</label>
        <input
          type="text"
          placeholder="Account name"
          value={fetchedAccountName}
          onChange={(e)=> setFetchedAccountName(e.target.value)}
          
        />
      </div>

      <div className="AccountNumber">
        <label>Amount</label>
        <input
          type="text"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="AccountNumber">
        <label>Description</label>
        <input
          type="text"
          placeholder="Enter your description"
          value={desc}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="AccountNumber">
        <label>Pin</label>
        <input
          type="text"
          placeholder="Enter your transaction pin"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
      </div>
      <button className="depositButton" onClick={handleTransfer}>
        
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
    </div>) : <span>Transfer</span>}
        
</button>
    </div>
  );
};

export default Transfer;
