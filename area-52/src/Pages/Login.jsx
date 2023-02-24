import React from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import "../CSS/Login.css"
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='form'>
      <h2>Login</h2>
      <FormControl>
        <FormLabel>Email Address : <br /><Input className='ip' placeholder='Enter Email' type='email' /></FormLabel>
        <FormLabel>Your Password : <br /> <Input className='ip' placeholder='Enter Password' type='password' /></FormLabel>
        <Input className='btn' placeholder='Submit' type='submit' /> <br />
        <span>If Not User  </span><NavLink to= "/signup" href="">Sign Up</NavLink>
      </FormControl>
    </div>
  )
}

export default Login
