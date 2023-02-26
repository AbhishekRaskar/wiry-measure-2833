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
import Favourite from "../Pages/Favourite"
import SingleProduct from '../Pages/SingleProduct'
import Register from '../Pages/Register'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default AllRoutes;
