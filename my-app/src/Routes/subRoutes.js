
import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Checkout from "../checkout/Checkout";
import Payment from "../components/Payment";
import Payment2 from "../components/Payment2";
import Otp from "../components/Otp";
import Thanks from "../components/Thanks";

export const SubRoutes = () => {
  return (
    <Routes>
          <Route path="/Products/cart/checkout" element={<Checkout/>}/>
          <Route path="/Products/cart/checkout/payment" element={<Payment/>}></Route>
          <Route path="/Products/cart/checkout/payment2" element={<Payment2/>}></Route>
          <Route path="/Products/cart/checkout/payment2/otp" element={<Otp/>}></Route>
          <Route path="/Products/cart/checkout/payment2/otp/thanks" element={<Thanks/>}></Route>
    </Routes>
  )
}
