import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Auth/Home'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'

const LoginRoutes = () => {
  return (
   <Routes>
     <Route path='/'element={<Home/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/register' element={<Register/>} />
   </Routes>
  )
}

export default LoginRoutes
