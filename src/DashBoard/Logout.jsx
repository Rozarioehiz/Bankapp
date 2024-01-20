 import React from 'react'
 
 const Logout = () => {
   return (
     <div>
        <button onClick={()=> dispatch(UserLogOut())}>LOG OuT</button>
     </div>
   )
 }
 
 export default Logout
 