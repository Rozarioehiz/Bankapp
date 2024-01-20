import React,{ useState} from 'react'
import './Style.css';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {Link,useNavigate} from 'react-router-dom'
import {Oval} from 'react-loader-spinner'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { UserToken, Userdata,userBalance,userAcct} from '../Features/Slice';

const Login = () => {

const [showpassword, setShowpassword] = useState(false)
const [Loading, setLoading] = useState(false)
const [email, setemail] = useState('')
const [password, setpassword] = useState('')

const Navigate = useNavigate()

const Dispatch = useDispatch()

const HandleEmail = (e)=>{
    setemail(e.target.value)
    console.log(email);
}
const HandlePassword = (e)=>{
    setpassword(e.target.value);
    console.log(password);
}

    const handleShowPassword = ()=>{
        console.log("show");
        setShowpassword(!showpassword)
      }

      const Url = "https://twopay-bank.onrender.com/api/v1/login"
      const data = {email,password}

      const HandleSubmit = async(e)=>{
        e.preventDefault()
       
        try{ 
            setLoading(true)
            const res = await axios.post(Url,data)

            Dispatch(Userdata(res.data.data))
            Dispatch(UserToken(res.data.token))
            Dispatch(userBalance(res.data.data))
            Dispatch(userAcct(res.data.data));
            console.log(res);
            Swal.fire({
                title: 'Login Successful!',
                text: 'You have successfully logged up.',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#00a6fb',
                confirmButtonText: 'Go to DashBoard',
                allowOutsideClick: false,
              }).then((result) => {
                if (result.isConfirmed) {
                    
                  Navigate('/userDash/dashboard');
                }
              });
              console.log(res.message);
        }
        catch(error){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'User Not Found ❌',
              });
              console.log(error.message);
        }
        finally{
            setLoading(false)
        }
      }

  return (
   <div className="LoginBody">
    <div className="loginHold">
        <div className="loginHeader">
           <div className="LayerHold">
           <div className="firstlayer"></div>
            <div className="secondlayer"></div>
           </div>
           <div className="LogoText">
           <h4>TWOPAY</h4>
           </div>
        </div>
        <div className="LoginWelcome">
            <h3>Welcome Back!</h3>
            <span>Login to continue</span>
        </div>
        <form action="" onSubmit={HandleSubmit}>
            <div className="loginEmail">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Your Email' onChange={HandleEmail} />
            </div>
            <div className="LoginPassword">
            <label htmlFor="">Password</label>
            <input  placeholder='Enter Password' id='password' type={showpassword ? "text" : "password"} onChange={HandlePassword} />
            <div
                    className="SignUpContentDownFormPwdEyes"
                >
                   {
                    showpassword ?  (<AiOutlineEye onClick={handleShowPassword} className='AiOutlineEye'/>) :( <AiOutlineEyeInvisible className='AiOutlineEyeInvisible' onClick={handleShowPassword}/>) 
                   }
                </div>
            </div>
            <div className="loginRemeber">
                <input type="checkbox" />
                <span>Remeber Me</span>
            </div>
            <div className="loginBtn">
                <button>
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
            </div>) : <span>Login</span>}
                </button>
            </div>
            <div className="LoginDontHave">
                <p>Don't Have an Account with us? <Link to='/sign-up' style={{textDecoration:"none",color:"#00a6fb"}}>Sign Up</Link> </p>
            </div>
        </form>
    </div>
   </div>
  )
}

export default Login