// Private.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Private = ({ element }) => {
  const userToken = useSelector((state) => state.mySlice.userToken);

  return userToken ? ( element) : <Navigate to="/logs" />;
};

export default Private;
