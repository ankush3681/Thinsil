import React from 'react';
import "../App.css";

const Login = () => {
  return (
    <div className='login-container'>
      <h1>Login Here</h1>
      <form className='login-form'>
        <label>Email<span>*</span> 
        <input type="text" /></label>
        <label>Password<span>*</span> 
        <input type="text" /></label>
        <div > 
        <input type="checkbox" style={{border:"1px solid red"}}/> Remember me</div>
        <input type='submit' value={"Login"}/>
      </form>
      <div></div>
    </div>
  )
}

export default Login;
