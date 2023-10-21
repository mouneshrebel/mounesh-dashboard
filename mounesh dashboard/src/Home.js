import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './LoginPage/Login'
import ForgotPasw from './LoginPage/ForgotPasw'
import Error from './Error/Error'
import Createacc from './LoginPage/Createacc'
import Color from './Custom_Utilities/Color'
import Dashboard from './DashBoard/Dashboard'


const Home = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element ={<Dashboard/>}>
        </Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/forgot' element ={<ForgotPasw/>}></Route>
        <Route path='*' element = {<Error/>}></Route>
        <Route path='/create' element ={<Createacc/>}></Route>
        <Route path='/color' element = {<Color/>}></Route>
      </Routes>
    
    </div>
  )
}

export default Home
