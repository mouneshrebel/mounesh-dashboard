import React from 'react'
import './ForgotPasw.css'
import { Link } from 'react-router-dom'
import forgetimg from './lighthouse-animation-1.gif'
const ForgotPasw = () => {
  return (
    <div className='contanier'>
     <div className='sec_container'>
          <img src ={forgetimg} alt = "#pass"/>
     </div>
     <div className='thir_container'>
        <br/> <br/> <br/><br/>
         <h4>Forgot Your Password?</h4>
         <br/>
        <p>We get it, stuff happens.
            Just enter your  <br/>  email address
            below and we'll send  <br/> you a link 
            to reset your password!
         </p>
         <br/>
         <input type='text' className='forgot-input' placeholder='Enter Email Address...' /> <br/>
         <br/>
         <button className='reset-btn' ><Link to='/login' onClick={()=>alert('Password changed Login!!')} style={{textDecoration:"none",fontSize:"0.8rem",color:"white"}}>Reset Password</Link></button> <br/>
        <br/> <hr/> <br/>
         <Link to='/create'  className='acc_link_2'><span>Create an Account!</span></Link> <br/>
         <Link to='/login'  className='acc_link_2'><span>Already have an account? Login!</span></Link>
     </div>
    </div>
  )
}

export default ForgotPasw
