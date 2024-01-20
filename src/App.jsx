import React from 'react'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './DashBoard/Dashboard'
import Private from './Route/Private'
import Maincontent from './DashBoard/Maincontent'
import Transfer from './DashBoard/Transfer'
import Withdraw from './DashBoard/Withdraw'
import Deposit from './DashBoard/Deposit'
import Paybills from './DashBoard/Paybills'
import Settings from './DashBoard/Settings'
import Menu from './DashBoard/Menu'
import Logout from './DashBoard/Logout'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/logs',
    element: <Login/>
  },
  {
    path:"/sign-up",
    element: <SignUp/>
  },
  {
    path: "userDash",
    element: <Private element={<Dashboard/>}></Private>,
    children: [
      { path: 'dashboard', element: <Maincontent /> },
      { path: 'transfer', element: <Transfer /> },
      { path: 'withdraw', element: <Withdraw /> },
      { path: 'deposit', element: <Deposit /> },
      { path: 'pay-bills', element: <Paybills /> },
      { path: 'settings', element: <Settings /> },
      { path: 'maincontent', element: <Maincontent /> },
      { path: 'logout', element: < Logout /> },
      
    ]
  }
])





const App = () => {


  return (
  <>
  <RouterProvider router={router}/>
  </>
  )
}

export default App