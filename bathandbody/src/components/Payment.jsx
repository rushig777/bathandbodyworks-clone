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
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
