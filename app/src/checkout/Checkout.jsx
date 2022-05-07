// import React, {useEffect,useState} from 'react'
import CountryDetail from './CountryDetail'
import Statedetail from './Statedetail'
// import axios from '.axios';
import "./Checkout.css"
// 
function Cart (){

}

const Checkout = () => {
  return (
      <>
    <div  className='cointainer'>
        <div className='cointainer1'>
         <p className='sizechange'>Sign in for faster Checkout</p>
    <p className='changeshipping'>Shipping address</p>
    <p>First Name</p>
    <input type="text" className='changeinput'/>
    <p>Last Name</p>
    <input type="text"  className='changeinput'/>
    <p>Address1</p>
    <input type="text" className='changeinput' />
    <p>Address2</p>
    <input type="text"  className='changeinput'/>
    <p>Country</p>
    <CountryDetail/>
    <p>City</p>
    <input type="text" className='changeinput' />
    <p>State</p>
    <Statedetail/>
    <p>Zip-code</p>
    <input type="Number" className='changeinput' />
    <p>Phone</p>
    <input type="Number"  className='changeinput'/><b></b>
    <div></div>
    <div></div>
    <input type="Checkbox" /> Use Address for Billing 
    <p>Are You Shipping a Gift</p>
    <label>
        <input type="Radio"  name='Choice-radio'/>Yes
    </label>
    <label>
     <input type="Radio" name='Choice-radio' />No
     </label>
    <h1>SHiPPING Method</h1>
     <label>
    <input type="Radio"  name='Choice-radio'/> 
        <span>Standard</span>
        <span>(3-7 business days.)</span>
        <p>Estimated delivery Tues May 10 - Mon May 16</p>

   </label> <br></br>
   <label>
   <input type="Radio" name='Choice-radio' />
   <span>Expedited</span>
   <span>(2 business days)</span>
   <p>Estimated delivery Tues May 10 </p>
  </label><br></br>
  <label>
   <input type="Radio" name='Choice-radio' />
   <span>Overnight </span>
   <span>(1 business day)</span>
   <p>Estimated delivery Mon May 09</p>
    </label>

    <p>Please complete all form fields before continuing</p>

   <button>Go to billing</button>

   </div>


 <div>

     <thead>
         <tr>
             <td>
                 bhhhhh
             </td>
             <td>bh</td>
         </tr>
     </thead>
 </div>
 </div>
</>
   
  )
}

export default Checkout