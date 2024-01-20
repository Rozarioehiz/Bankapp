import React from 'react'
import './dashboard.css'
import Menu from '../DashBoard/Menu'
import UserHeader from '../DashBoard/UserHeader'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="Dashbody">
     <div className='Menu'>
      <Menu/>
     </div>
     <div className="Holder">
      <UserHeader/>
      <div>
        <Outlet/>
      </div>
     </div>
    </div>
  )
}

export default Dashboard