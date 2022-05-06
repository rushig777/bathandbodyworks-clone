import React, { useState } from 'react';
import styles from './Payment.module.css';
import { v4 as uuid } from 'uuid';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Progress from './Progress';

const Payment = () => {
  const address = {
    name: 'Gajraj Singh',
    address: 'abc',
    city: 'puner',
    pin: '33201',
    phone: 9414584444,
  };
  const [radiovalue, setradiovalue] = useState(true);
  const [formData,setFormData]=useState({})
  const [promotionshow, setpromotionshow] = useState(false)
    const [giftshow, setgiftshow] = useState(false);


  const catchData = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleForm = (e) => {
    console.log(formData)
    e.preventDefault();

  }

  return (
    <div>
      <Progress /> 
      {/* <div className={styles.progress}>
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
      </div> */}
      <div className={styles.primary}>
        <div className={styles.leftDiv}>
          <div>
            <h2>BILLING ADDRESS</h2>
          </div>
          <div className={styles.billing_address}>
            <p>{address.name}</p>
            <p>{address.address}</p>
            <p>{address.city}</p>
            <p>{address.pin}</p>
            <p>{address.phone}</p>
            <br />
            <a href="/">Edit</a>
          </div>
          <div>
            <h2>CONTACT INFORMATION</h2>
          </div>
          <div>
            <label>Email </label>
          </div>
          <div>
            <input type="email" className={styles.inputboxwidth} />
          </div>
          <div
            className={styles.giftcards}
            onClick={() => {
              setpromotionshow(!promotionshow);
            }}
          >
            <h2>PROMOTION CODE</h2>
            <div>{promotionshow ? <BsChevronUp /> : <BsChevronDown />}</div>
          </div>
          {promotionshow && (
            <div>
              <p>Promotion Code</p>
              <div className={styles.promotionDiv}>
                <input type="text" />
                <button>APPLY</button>
              </div>
              <p>
                Only one promotion code can be applied per order. You can submit
                a different code by entering it in the field above and clicking
                apply.
              </p>
            </div>
          )}

          <div
            className={styles.giftcards}
            onClick={() => {
              setgiftshow(!giftshow);
            }}
          >
            <h2>GIFT CARDS</h2>
            <div>{giftshow ? <BsChevronUp /> : <BsChevronDown />}</div>
          </div>
          {giftshow && (
            <div className={styles.giftdiv}>
              <div>
                <p>Gift Card Number</p>
                <input type="number" />
              </div>
              <div>
                <p>PIN</p>
                <input type="number" />
              </div>
              <button>APPLY</button>
              <p>Up to 2 Gift Cards can be applied per order.</p>
            </div>
          )}

          <div className={styles.formdiv}>
            <h2>PAYMENT METHOD</h2>
            <div className={styles.radioformdiv}>
              <label className={styles.radioform}>
                <input
                  type="radio"
                  checked={radiovalue}
                  onChange={() => {
                    setradiovalue(!radiovalue);
                  }}
                />
                Credit card
                <img
                  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw540fb29c/images/cc-strap-updated-4-4.png?yocs=o_s_"
                  alt=""
                />
              </label>
              <label className={styles.radioform}>
                <input
                  type="radio"
                  checked={!radiovalue}
                  onChange={() => {
                    setradiovalue(!radiovalue);
                  }}
                />
                PayPal
                <img
                  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites/default/dw6143880f/images/payments/payment-ppal.svg?yocs=o_s_"
                  alt=""
                />
              </label>
            </div>
            <div>
              <form className={styles.cardForm} onSubmit={handleForm}>
                <div>
                  <div>
                    <label>Name on Card</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className={styles.inputboxwidth}
                      name="name"
                      onChange={catchData}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label>Number</label>
                  </div>
                  <div>
                    <input
                      type="Number"
                      className={styles.inputboxwidth}
                      name="number"
                      onChange={catchData}
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label>Expiration Date</label>
                  </div>
                  <div className={styles.expirymonthandyear}>
                    <select name="month" onChange={catchData}>
                      <option value="">Month</option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                    <select name="year" onChange={catchData}>
                      <option value="">Year</option>
                      <option value="20">2020</option>
                      <option value="21">2021</option>
                      <option value="22">2022</option>
                      <option value="23">2023</option>
                      <option value="24">2024</option>
                      <option value="25">2025</option>
                      <option value="26">2026</option>
                      <option value="27">2027</option>
                      <option value="28">2028</option>
                      <option value="29">2029</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <label>Security Code</label>
                  </div>
                  <div>
                    <input
                      type="Number"
                      className={styles.inputboxwidth}
                      name="CVV"
                      onChange={catchData}
                    />
                  </div>
                </div>
                <div>
                  <input type="checkbox" />

                  <label>Save card & make default</label>
                </div>
                <div>
                  <p className={styles.warning}>
                    Please complete all form fields before continuing
                  </p>
                </div>
                <div className={styles.submitDiv}>
                  <button className={styles.submitbtn} type="submit">
                    REVIEW ORDER
                  </button>
                  <a href="/#">Privacy Policy</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.right_div}>
          <div className={styles.orders}>
            <h3>YOUR ORDER</h3>
            <hr />
            {[1, 2].map((item) => {
              return <div key={uuid()}>item:{item}</div>;
            })}
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
            <div>
              <p className={styles.pricebio}>
                Tax is estimated and will be calculated when your order is
                processed.
              </p>
            </div>
            <hr />
            <div className={styles.price_deatails}>
              <h4>ORDER TOTAL (USD)</h4>
              <h4> $38.47</h4>
            </div>
          </div>
          <br />
          <br />
          <div className={styles.billing_address}>
            <div className={styles.addressedit}>
              <h2>SHIPPING ADDRESS</h2>
              <a href="/">Edit</a>
            </div>
            <p>{address.name}</p>
            <p>{address.address}</p>
            <p>{address.city}</p>
            <p>{address.pin}</p>
            <p>{address.phone}</p>
            <br />
            <p>Shipping - Standard $6.99</p>
          </div>
          <br />
          <br />
          <div className={styles.billing_address}>
            <div className={styles.addressedit}>
              <h2>BILLING ADDRESS</h2>
              <a href="/">Edit</a>
            </div>
            <p>{address.name}</p>
            <p>{address.address}</p>
            <p>{address.city}</p>
            <p>{address.pin}</p>
            <p>{address.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
