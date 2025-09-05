import React from 'react'
import { useState } from 'react'
import './SignUp.css'
import user_icon from "../../assets/SignUp assets/person.png"
import email_icon from "../../assets/SignUp assets/email.png"
import password_icon from "../../assets/SignUp assets/password.png"

const SignUp = () => {

    const [action, setAction]  = useState("SignUp");

  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login"? <div/>: <div className="input">
                <img src = {user_icon} alt = ""/>
                <input type='text' placeholder='Name'/>
            </div>}
            
            <div className="input">
                <img src ={email_icon} alt = ""/>
                <input type='email' placeholder='emai id'/>
            </div>
            <div className="input">
                <img src = {password_icon} alt = ""/>
                <input type='password' placeholder='password'/>
            </div>
            {action === "SignUp"? <div/>:<div className="forgot-password">Forgot Password? <span>Clicl here</span></div> }
        </div>
        
        <div className="submit-container">
            <div className={action === "Login"?"submit gray":  "submit"} onClick={()=>{setAction("SignUp")}}>SignUp</div>
            <div className={action === "SignUp"?"submit gray": "submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default SignUp