import React from 'react'
import styles from "./AddtoCart.module.css";
import AddtoCart from './AddtoCart';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData } from '../redux/action';
import { useEffect } from 'react';

const Cart = () => {
    const {cartProducts} = useSelector((state) => state)
    const dispatch = useDispatch();
    useEffect(() => {
        getCartData(dispatch);
      }, [dispatch]);

    console.log(cartProducts);

  return (
    <div className={styles.cartContainer}>
        {
            cartProducts.map((e) => (
                <AddtoCart key={e.id} {...e} />
            ))
        }
    
         </div>
  )
}

export default Cart