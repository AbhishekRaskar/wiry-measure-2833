import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import "../CSS/navbar.css"
import { AiOutlineHeart, AiOutlineUser, AiOutlineShopping,AiOutlineMenu } from "react-icons/ai"
import Logo from "../Image/area12.png"
import { Img } from "@chakra-ui/react"
import { FaSistrix } from "react-icons/fa";



const links = [
  { to: "/", name: "HOME" },
  { to: "/mens", name: "MENS" },
  { to: "/womens", name: "WOMENS" },
  { to: "/kids", name: "KIDS" },
  { to: "/sale", name: "SALE" },
  { to: "/featured", name: "FEATURED" },
]
const active = { color: "teal", textDecoration: "none" }
const deactive = { color: "black", textDecoration: "none" }


const Navbar = () => {
  const [icon,setIcon] = useState(false)
  return (
    <>
      <div className='main'>
        {/* onClick = {() => {return <NavLink to="/"/>}} */}
        <div className='logo' logo={<Logo />}>
          <Img src={Logo} alt='Logo'
            style={{ width: 190, marginTop: 13 }} />
        </div>

        <div className= {icon ? {display : "none"} : 'menubar' }> {
          links.map((el) => {
            return <NavLink key={el.to} style={({ isActive }) => {
              return isActive ? active : deactive
            }} to={el.to}>
              <h3>{el.name}</h3>
            </NavLink>
          })}
        </div>
        <div className='search'>
          <input placeholder='Search'></input>
          
          
        </div>
        
        <div className='icons'>
        <a className='lens' href="/"><FaSistrix /></a>
          <NavLink to="/favourite" ><AiOutlineHeart /></NavLink>
          <NavLink to="/login"><AiOutlineUser /></NavLink>
          <NavLink to="/cart"><AiOutlineShopping /></NavLink>
          <a className='hamburger' href="/" onClick={(e)=> {
            e.preventDefault() 
            return setIcon(!icon)}} ><AiOutlineMenu /></a>
        </div>
        
      </div>
    </>
  )
}

export default Navbar;
