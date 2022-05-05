import React from "react";
import { useDispatch } from "react-redux";
import styles from "./ProductsCard.module.css";
import pic from "./Screenshot 2022-05-04 121215.png";
import { addProducts } from "../redux/action";

const ProductsCard = ({ id, img, title, name, subname, Price }) => {
  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(addProducts(img, name, subname, Price));
  };
  return (
    <div className={styles.innerDiv}>
      <img className={styles.heart} src={pic} alt="" />
      <img className={styles.prodImg} src={img} alt="" />
      <p className={styles.name}>{name}</p>
      <p className={styles.subname}>{subname}</p>
      <p className={styles.price}>${Price}</p>
      <p className={styles.offer}>Mix & Match: Buy 2, Get 2</p>
      <button  onClick={addtocart} className={styles.addtocart}>
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductsCard;
