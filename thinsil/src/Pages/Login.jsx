import React from 'react';
import "../styles/login.css";
import { FcUnlock } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='login-container'>
      <FcUnlock className='login-icon'/>
      <h1>Login</h1>     
      <form className='login-form'>
        <label>Email<span>*</span> 
        <input type="text" /></label>
        <label>Password<span>*</span> 
        <input type="password" /></label>
        <div > 
        <input type="checkbox"/> Remember me</div>
        <input type='submit' value={"Login"}/>
      </form>
      <div className='login-links'>
         <div>forgot password?</div>
          <div>Don't have account?<Link className="signup-url-in-login" to="/signup"> SignUp</Link></div>
      </div>
    </div>
  )
}

export default Login;
