
import { v4 as uuid } from 'uuid';
import React from 'react';
import Progress from './Progress';
import styles from './Payment2.module.css';

const Payment2 = () => {
  const address = {
    name: 'Gajraj Singh',
    address: 'abc',
    city: 'puner',
    pin: '33201',
    phone: 9414584444,
  };
  return (
    <div>
      <Progress />
      <div className={styles.mainUpperDiv}>
        <div className={styles.upper_submitbtnDiv}>
          <h2>YOUR ORDER</h2>
          <div>
            <button>SUBMIT ORDER</button>
          </div>
        </div>
        <div className={styles.leftright}>
          <div className={styles.leftdiv}>
            <div className={styles.shippingdeatails}>
              <div>
                <h4>ship to</h4>
                <p>{address.name}</p>
                <p>{address.address}</p>
                <p>{address.city}</p>
                <p>{address.pin}</p>
                <p>{address.phone}</p>
              </div>
              <div>
                <h4>Shipping Method</h4>
                <p>Standard</p>
                <p>$6.99</p>
              </div>
              <div>
                <a href="/">Edit</a>
              </div>
            </div>
            <div className={styles.billingdetails}>
              <div>
                <h4>Bill to</h4>
                <p>{address.name}</p>
                <p>{address.address}</p>
                <p>{address.city}</p>
                <p>{address.pin}</p>
                <p>{address.phone}</p>
              </div>
              <div>
                <h4>Payment Method</h4>
                <p>CREDIT CARD</p>
                <p>Visa</p>
                <p>card last four degit</p>
                <p>price to paid</p>
              </div>
              <div>
                <a href="/">Edit</a>
              </div>
            </div>
            <div>
              <h2>YOUR ITEMS</h2>
              <hr />
              {[1, 2].map((item) => {
                return <div key={uuid()}>item:{item}</div>;
              })}
              <hr />
              <div className={styles.endsubmitbtn }>
                <button>SUBMIT ORDER</button>
              </div>
            </div>
          </div>
          <div className={styles.paymentsummary}>
            <h3>PAYMENT SUMMARY</h3>

            <hr />
            <div className={styles.price_deatails}>
              <p>MERCHANDISE SUBTOTAL</p>
              <p>total of cart we show here</p>
            </div>
            <div className={styles.price_deatails}>
              <p>ESTIMATED SHIPPING & HANDLING - Standard</p>
              <p>$6.99</p>
            </div>
            <div className={styles.price_deatails}>
              <p>SALES TAX</p>
              <p>$1.48</p>
            </div>

            <hr />
            <div className={styles.price_deatails}>
              <h4>ORDER TOTAL (USD)</h4>
              <h4> $38.47 calculate total here</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment2;
