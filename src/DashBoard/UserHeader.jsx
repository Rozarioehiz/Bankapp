import React from 'react';
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogOut } from '../Features/Slice';

const UserHeader = () => {
 
  const user = useSelector((state)=> state.mySlice.user)
  const userToken = useSelector((state) => state.mySlice.userToken) 
  console.log(userToken);
   const dispatch = useDispatch()

  return (
    <div className="UserHeader">
      <div className="UserName">
        <h3>Welcome {user?.firstName}</h3>
      </div>
      <div className="UserProperties">
      <button onClick={()=> dispatch(UserLogOut())}>Log Out</button>
      </div>
      
    </div>
  );
};

export default UserHeader;
