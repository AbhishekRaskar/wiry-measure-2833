import React from 'react'
import { NavLink } from "react-router-dom"
import "../CSS/navbar.css"
import { AiOutlineHeart, AiOutlineUser, AiOutlineShopping } from "react-icons/ai"
import Logo from "../Image/area12.png"
import { Img } from "@chakra-ui/react"


const links = [
  { to: "/", name: "HOME" },
  { to: "/mens", name: "MENS" },
  { to: "/womens", name: "WOMENS" },
  { to: "/kids", name: "KIDS" },
  { to: "/sale", name: "SALE" },
  { to: "/featured", name: "FEATURED" },
]
const active = { color: "red", textDecoration: "none" }
const deactive = { color: "black", textDecoration: "none" }


const Navbar = () => {
  return (
    <>
      <div className='main'>
        <div className='logo' logo={<Logo />}>
          <Img src={Logo} alt='Logo' 
          style={{ width: 250, marginRight: 30 }} />
          </div>

        <div className='menubar'> {
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
          <NavLink to="/favourite"><AiOutlineHeart /></NavLink>
          <NavLink to="/login"><AiOutlineUser /></NavLink>
          <NavLink to="/cart"><AiOutlineShopping /></NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar












// ---------------------------------------------
// import { Link as RouterLink } from "react-router-dom";
// import { Flex ,Heading ,Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';

// function Navbar(){
//     const links = [
//         {path:"/" , title:"Home"},
//         {path:"/login" , title:"Login"},
//         // {path:"/search" , title:"Search"}, 
//         // {path:"/bag" , title:"Bag"},
//         ]
        
//     return (
//         <>
//         <img src="Images\Logo.png" alt="logo" />
//         <Flex align={"center"} justifyContent={"space-around"} fontSize="20px">
//             {links.map((el)=>{
//                 return(
//                     <RouterLink key={el.path} to={el.path}>
//                         <Heading>{el.title}</Heading>
//                     </RouterLink>
//                 )
//             })}
//         </Flex>
//         <Tabs variant='enclosed'>
//   <TabList>
//     <Tab>SHIRTS</Tab>
//     <Tab>SUITS</Tab>
//     <Tab>TROUSERS</Tab>
//     <Tab>KNITWEAR</Tab>
//     <Tab>COATS & JACKETS</Tab>
//     <Tab>SHOES</Tab>
//     <Tab>ACCESSORIES</Tab>
//   </TabList>
//   <TabPanels>
//     <TabPanel>
//       <p>one!</p>
//     </TabPanel>
//     <TabPanel>
//       <p>two!</p>
//     </TabPanel>
//   </TabPanels>
// </Tabs>
//         </>
//     )
// }

// export default Navbar;