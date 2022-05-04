import React from 'react';
import styles from './Payment.module.css';

const Payment = () => {
  const address = {
    name: 'Gajraj Singh',
    address: 'abc',
    city: 'puner',
    pin: '33201',
    phone: 9414584444,
  };
  return (
    <div>
      <div className={styles.progress}>
        <div>
          <p>Shipping</p>
          <span>1</span>
        </div>
        <div>
          <p>Billing</p>
          <span>2</span>
        </div>
        <div>
          <p>Review & Submit Order</p>
          <span>3</span>
        </div>
      </div>
      <div>
        <div>
          <h3>BILLING ADDRESS</h3>
        </div>
        <div className={styles.billing_address}>
          <p>{address.name}</p>
          <p>{address.address}</p>
          <p>{address.city}</p>
          <p>{address.pin}</p>
          <p>{address.phone}</p>
        </div>
        <div>
          <h3>CONTACT INFORMATION</h3>
        </div>
        <div>
          <label>Email </label>
        </div>
        <div>
          <input type="email" />
        </div>
        <div>
          <h3>PROMOTION CODE</h3>
        </div>
        <div>
          <h3>GIFT CARDS</h3>
        </div>
        <div>
          <h3>PAYMENT METHOD</h3>
          <div>
            <input type="radio" />
            <input type="radio" />
          </div>
          <div>
            <form>
              <div>
                <div>
                  <label>Name on Card</label>
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div>
                  <label>Number</label>
                </div>
                <div>
                  <input type="Number" />
                </div>
              </div>

              <div>
                <div>
                  <label>Expiration Date</label>
                </div>
                <div>
                  <select></select>
                  <select></select>
                </div>
              </div>
              <div>
                <div>
                  <label>Security Code</label>
                </div>
                <div>
                  <input type="Number" />
                </div>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  Save card & make default
                </label>
              </div>
              <div>
                <p>Please complete all form fields before continuing</p>
              </div>
              <div>
                <button type="submit">REVIEW ORDER</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
