import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/navbar.module.css";
import { Dropdown } from "./DropdownMenu";

export const Navbar = () => {
  const [searchToggle, setToogle] = useState(true);

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
        <img
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
                  <p>Sign In or Sign Up</p>
                  <p>Order Tracking</p>
                  <p>My Auto Refresh</p>
                  <p>My Love-It List</p>
                </div>
              </div>
              <div className={styles.cart}>0</div>
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
