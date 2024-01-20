import React from 'react';
import './dashboard.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="Menubody">
      <div className="MenuHeader">
        <div className="MenuLayerHold">
          <div className="Menufirstlayer"></div>
          <div className="Menusecondlayer"></div>
        </div>
        <div className="MenuLogoText">
          <h4>TWOPAY</h4>
        </div>
      </div>
      <div className="MenuFeatures">
        <NavLink to='/userDash/maincontent'>Dashboard</NavLink>
        <NavLink to='/userDash/transfer'>Transfer</NavLink>
        <NavLink to='/userDash/withdraw'>Withdraw</NavLink>
        <NavLink to='/userDash/deposit'>Deposit</NavLink>
        <NavLink to='/userDash/pay-bills'>Pay Bills</NavLink>
        <NavLink to='/userDash/settings'>Settings</NavLink>
        {/* <NavLink to='/userDash/user-profile'>User Profile</NavLink> */}
        {/* <NavLink to='/userDash/logout'>Logout</NavLink> */}
      </div>
    </div>
  );
}

export default Menu;
