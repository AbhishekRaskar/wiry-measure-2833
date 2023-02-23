import React from 'react'
import { NavLink } from "react-router-dom"
import "../CSS/navbar.css"
// import { AiOutlineHeart, AiOutlineUser, AiOutlineShopping } from "react-icons/ai"
// import Logo from "../Image/area12.png"
// import { Img } from "@chakra-ui/react"


const links = [
    //   { to: "/", name: "HOME" },
    { to: "/mens", name: "MENS" },
    { to: "/womens", name: "WOMENS" },
    { to: "/kids", name: "KIDS" },
    { to: "/sale", name: "SALE" },
    //   { to: "/featured", name: "FEATURED" },
]
const active = { color: "red", textDecoration: "none" }
const deactive = { color: "black", textDecoration: "none" }


const HomeNav = () => {
    return (
        <>
            <div className='main1'>
                <div className='menubar1'> {
                    links.map((el) => {
                        return <NavLink key={el.to} style={({ isActive }) => {
                            return isActive ? active : deactive
                        }} to={el.to}>
                            <h3>{el.name}</h3>
                        </NavLink>
                    })}
                </div>
            </div>
        </>
    )
}

export default HomeNav

