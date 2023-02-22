import React from 'react'
import { Routes, Route } from "react-router-dom"
import Mens from '../Pages/Mens'
import Home from '../Pages/Home'
import Womens from '../Pages/Womens'
import Sale from "../Pages/Sale"
import Kids from "../Pages/Kids";
import Featured from "../Pages/Featured"
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Favourite from "../Pages/Favourite"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/mens" element={<Mens />} />
        <Route to="/womens" element={<Womens />} />
        <Route to="/kids" element={<Kids />} />
        <Route to="/sale" element={<Sale />} />
        <Route to="/featured" element={<Featured />} />
        <Route to="/cart" element={<Cart />} />
        <Route to="/login" element={<Login />} />
        <Route to="/signup" element={<SignUp />} />
        <Route to="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  )
}

export default AllRoutes;






// -------------------------------------------------->>>>>>>>>
// import {Route , Routes} from "react-router-dom";
// // import Search from "../Pages/Search";
// // import Home from "../Pages/Home";
// // import Login from "../Pages/Login";
// // import NotFound from "../Pages/NotFound";
// // import ProductCard from "../Pages/ProductCard";
// // import Bag from "../Pages/Bag";

// function AllRoutes(){
//     return (
//         <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/login" element={<Login/>}></Route>
//         {/* <Route path="*" element={<NotFound/>}></Route>
//         <Route path="/bag" element={<Bag/>}></Route>
//         <Route path="/search" element={<Search/>}></Route>
//         <Route path="/productcard/:id" element={<ProductCard/>}></Route> */}
//     </Routes>
//     )
// }

// export default AllRoutes;