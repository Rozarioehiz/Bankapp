import React, { useState, useRef } from 'react';
import './Style.css';

import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import {Oval} from 'react-loader-spinner'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const SignUp = () => {


  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

const Navigate = useNavigate()

 
  const [Loading, setLoading] = useState(false)

  const HandleFirstName = (e)=>{
    setfirstName(e.target.value)
  }

  const HandleLastName = (e)=>{
    setlastName(e.target.value)
  }
  
  const HandleEmail = (e)=>{
    setemail(e.target.value)
  }
  const HandlePassword = (e)=>{
    setpassword(e.target.value)
  }
  
  const HandleConfirmPassword = (e)=>{
    setconfirmPassword(e.target.value)
  }
  
  const HandlePhoneNumber = (e)=>{
    setphoneNumber(e.target.value)
  }

  const [showpassword, setShowpassword] = useState(false)

  
  const handleShowPassword = ()=>{
    console.log("show");
    setShowpassword(!showpassword)
  }

  const Url = "https://twopay-bank.onrender.com/api/v1/signup";
  const data = {firstName,lastName,email,password,phoneNumber,confirmPassword}


  const HandleSubmit = async (e)=>{
    e.preventDefault()
    
    try{
      setLoading(true)
      const res = await axios.post(Url,data)
      Swal.fire({
        title: 'Registration Successful!',
        text: 'You have successfully signed up.',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#00a6fb',
        confirmButtonText: 'Go to Login',
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
        
          Navigate('/logs');
        }
      });
      console.log(res.data);
    }
    catch (error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      console.log('Registration Failed',error.message);
     }
     finally{
      setLoading(false)
     }
    
  }
  



  return (
    <div className="SignBody">
      <div className="SignContainer">
        <div className="SignHeader">
        <div className="SignLayerHold">
           <div className="Signfirstlayer"></div>
            <div className="Signsecondlayer"></div>
           </div>
           <div className="SignLogoText">
           <h4>TWOPAY</h4>
           </div>
        </div>
        <div className="SignText">
          <h3>Create an Account with Us</h3>
        </div>
        <form action="" onSubmit={HandleSubmit}>
            <div className="SignFirst">
            {/* <span className="error-message"> {FormErrors.firstName} </span> */}
              <label htmlFor="">First Name</label>
              <input type="text" placeholder='Enter First Name'
              value={firstName}
              onChange={HandleFirstName}
               />
            </div>
            <div className="SignLast">
            {/* <span className="error-message"> {FormErrors.lastName} </span> */}
            <label htmlFor="">Last Name</label>
              <input type="text" placeholder='Enter Last Name'
              value={lastName}
              onChange={HandleLastName}
               />
            </div>
            <div className="SignEmail">
            {/* <span className="error-message"> {FormErrors.email} </span> */}
              <label htmlFor="">Email</label>
              <input type="text" placeholder='one@email.com'
              value={email}
              onChange={HandleEmail}
              />
            </div>
            <div className="SignPhone">
            {/* <span className="error-message"> {FormErrors.phoneNumber} </span> */}
              <label htmlFor="">Phone Number</label>
              <input type="text"  placeholder='Enter Phone Number'
              onChange={HandlePhoneNumber}
              value={phoneNumber}
              />
            </div>
         
          <div className="SignPassword">
            <label htmlFor="">Password</label>
            <input type={showpassword ? "text" : "password"} id='pass'
            value={password}
            onChange={HandlePassword}
             />
               <div
                    className="SignUpFormPwdEyes"
                >
                   {
                    showpassword ?  (<AiOutlineEye onClick={handleShowPassword} className='AiOutlineEye'/>) :( <AiOutlineEyeInvisible className='AiOutlineEyeInvisible' onClick={handleShowPassword}/>) 
                   }
                </div>
          </div>
            <div className="SignConfirm">
            {/* <span className="error-message"> {FormErrors.confirmPassword} </span> */}
              <label htmlFor="">Confirm Password</label>
              <input type="password"
              value={confirmPassword}
              onChange={HandleConfirmPassword}
               />
            </div>
          <div className="SignBtn">
            <button type='submit'>
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
            </div>) : (<span>Sign Up</span>)}
        </button>
           
          </div>
          <div className="SignAlready">
            <p>Already have an account? <Link style={{textDecoration:"none",color:"#00a6fb"}} to='/logs'>Login</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
