import React,{useState,useEffect} from 'react'
import './Style.css'
import 'animate.css';
import {Link, NavLink} from 'react-router-dom'

const Home = () => {

    const [Text, setText] = useState('SAVE')

    useEffect(()=>{
        const Interval = setInterval(()=>{
            setText((prevText)=> {
                if(prevText === "SAVE"){
                    return "BUILD"
                }else if(prevText === "BUILD"){
                    return "INNOVATE"
                }else{
                    return "SAVE"
                }
            })
        },3000)
        return ()=> clearInterval(Interval)
    }, [])
    
  return (
    <div className="Homebody">
        <div className="HomeBox">
            <div className="HomeHold">
            <h3>Welcome To TWOPAY</h3>
            <p> A Platform that helps you <span style={{fontSize:"20px",fontWeight:"700",color:"#00a6fb"}}>{Text}</span> your Income </p>
            </div>
            <div className="HomeBtn">
                <Link className='Link' to='/sign-up'>Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Home 