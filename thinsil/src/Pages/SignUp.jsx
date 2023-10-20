
import React from 'react';
import "../styles/signup.css";
import { FcLock } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className='signup-container'>
      <FcLock className='signup-icon'/>
      <h1>Sign up</h1>     
      <form className='signup-form'>
        <label>Name<span>*</span> 
        <input type="text" /></label>
        <label>Email<span>*</span> 
        <input type="email" /></label>
        <label>Password<span>*</span> 
        <input type="password" /></label>
        <div className='signup-checkbox'> 
        <input type="checkbox"/>By continuing, you agree to Thensil Terms and Policy.</div>
        <input type='submit' value={"Sign up"}/>
      </form>
          <Link className='signup-Link-in-login' to="/login">Already have user? <span>Login</span></Link>
    </div>
  )
}

export default SignUp;
