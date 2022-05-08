import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/navbar.module.css";
import { Dropdown } from "./DropdownMenu";

export const Navbar = () => {
  const [searchToggle, setToogle] = useState(true);
  const {cartProducts} = useSelector((state) => state);
 let Navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div className={styles.adDiv}>
        <div>
          <p>Limited time only! </p>
          <h3>$40 SPRING GIFT BUNDLE WITH $40 ORDER</h3>
          <Link to={"/"}>DETAILS</Link>
        </div>
      </div>

      <div className={styles.pickupDiv}>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/67/67696.png"
            alt=""
          />
          <h5>PICK UP IN STORE</h5>
          <Link to={"/"}>Set Store</Link>
          
        </div>
      </div>
      <div className={styles.logoNameDiv}>
        <img onClick={()=> Navigate('/')}
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwf1f0e62b/images/svg-icons/Logos-main.svg?yocs=o_s_"
          alt=""
        />
        {searchToggle ? (
          <div>
            <div className={styles.inputDiv}>
              <input
                onClick={() => setToogle(false)}
                type="text"
                placeholder="Search by fragrance or product..."
              />
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw729fd72d/images/svg-icons/UI-Search-v2.svg?yocs=o_s_"
                alt=""
              />
            </div>
            <div>
              <div className={styles.hover}>
                <img
                  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwc807e833/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"
                  alt=""
                />
                <div className={styles.hoverDiv}>
                  <Link to={"/Profile"}>Sign In or Sign Up</Link>
                  <Link to={"/Profile"}>Order Tracking</Link>
                  <Link to={"/Profile"}>My Auto Refresh</Link>
                  <Link to={"/Profile"}>My Love-It List</Link>
                </div>
              </div>
              <Link to="/Products/cart">
              <div className={styles.cart}>{cartProducts.length}</div>
              </Link>
            
            </div>
          </div>
        ) : (
          <div onBlur={() => setToogle(true)}>
            <div className={styles.changeSbar}>
              <input
                type="text"
                placeholder="Search by fragrance or product..."
              />
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw729fd72d/images/svg-icons/UI-Search-v2.svg?yocs=o_s_"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
      {searchToggle ? (
        ""
      ) : (
        <div className={styles.downDiv}>
          <div className={styles.product}></div>
          <div className={styles.Shistory}></div>
        </div>
      )}
      <Dropdown />
    </div>
  );
};
