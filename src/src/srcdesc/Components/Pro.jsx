import React from "react";
import styled from "styled-components";
import "./pro.css";

const Desc = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  width: 90%;
  margin: auto;
  border: 2px solid red;
`;

const Descone = styled.div`
  display: flex;
  gap: 10px;
`;

const Imgdiv = styled.div`
  width: 70%;
`;

function Pro() {
  return (
    <div>
      <Desc>
        <div className="imagesproduct">
          <Descone>
            <h4>
              <a href="#">GIFTS/</a>
            </h4>
            <h4>
              <a href="#">GIFTS BY RECEPTIONS/</a>
            </h4>
            <h4>
              <a href="#">GIFTS FOR HOME/</a>
            </h4>
          </Descone>
          <Imgdiv className="CandleImage">
            <img
              style={{ width: "100%" }}
              src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw3c0effbd/large/024635101.jpg"
              alt=""
            />
          </Imgdiv>
        </div>
        <div>
          <p className="Title_of_product">FLORAL</p>
          <p className="wickcandle">3-Wick Candle</p>
          <div className="abcd">
            <p>
              MRP <span>₹2,599.00</span>
            </p>
          </div>
          <p className="gmsofcandle"> 411 g / 14.5 oz</p>

          <p className="Mix_Match">Mix & Match: Buy 2, Get 2</p>
          <p className="Itemname">Item No. 667552161490</p>
          <hr />
          <a href="#">
            <p>details </p>
          </a>
          <p className="quantity">quantity</p>
          <div className="locationcheck">
            <div>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            <div>
              <button className="Add_To_Cart">ADD TO CART</button>
            </div>
          </div>
          <p className="instock">In Stock</p>
          <p className="checkpincode">Check pincode for delivery</p>
          <div className="Check_Address">
            <input type="text" />
            <button className="checkoutthecandle">CHEK</button>
          </div>
          <p className="vehicledeliver">
            <img
              src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw847c678c/images/get-it-on-day.svg"
              alt=""
            />
            Enter Pincode to Check Estimation Days
          </p>
        </div>
      </Desc>
    </div>
  );
}

export default Pro;
