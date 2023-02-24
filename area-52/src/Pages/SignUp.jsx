import React from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import "../CSS/Login.css"
// import { NavLink } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className='form'>
      <h2>SignUp</h2>
      <FormControl>
        <FormLabel>First Name : <br /><Input className='ip' placeholder='Enter First Name' type='text' /></FormLabel>
        <FormLabel>Last Name : <br /> <Input className='ip' placeholder='Enter Last Name' type='text' /></FormLabel>
        <FormLabel>Email Address : <br /><Input className='ip' placeholder='Enter Email' type='email' /></FormLabel>
        <FormLabel>Password : <br /> <Input className='ip' placeholder='Enter Password' type='password' /></FormLabel>
        <FormLabel>Confirm Password : <br /> <Input className='ip' placeholder='Enter Password' type='password' /></FormLabel>
        <Input className='btn' placeholder='Submit' type='submit' /> <br />
        {/* <span>If Not User  </span><NavLink to= "/signup" href="">Sign Up</NavLink> */}
      </FormControl>
    </div>
  )
}

export default SignUp
