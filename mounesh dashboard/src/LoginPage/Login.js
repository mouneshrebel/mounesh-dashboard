import React from 'react'
import light_house from './light-house.jpg'
import './Login.css'
import { Facebook, Google } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='total-container'>
      <div className='second-container'>
        <img src={light_house} alt = "#None"/> 
      </div>
      <div className='third-container'>
        
        <h5>Welcome Back</h5>
        <form className='form'>
            <input type='text' className='input-1' placeholder='Enter Email Address...'/> <br/> <br/>
            <input type='password' className='input-2'  placeholder='Password'/> <br/><br/>
            <input type='checkbox' className='input-3'/><span>Remember Me</span> <br/><br/>
            <Link to='/login'><button onClick={() => alert('your already in Login page!!')} className='btns'>Login</button></Link> <br/> 
            <hr className='hrs'/><br/>
            </form>
            <button className='btn-1'>
        <Link to="/" style={{textDecoration:"none",color:"white"}}>
          <Google /> Login with Google
        </Link>
      </button> <br/><br/>
      <button className='btn-2'>
        <Link to="/" style={{textDecoration:"none",color:"white"}}>
          <Facebook /> Login with Facebook
        </Link>
      </button> <br/>
      <Link to='/forgot'  className='acc_link'><span>Forgot Password?</span> </Link><br/>
      <Link to='/create'  className='acc_link'><span>Create an Account!</span> </Link><br/>
      </div>
    </div>
    
  )
}

export default Login
