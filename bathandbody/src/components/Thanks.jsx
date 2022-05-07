import React from 'react';
import styles from './Thanks.module.css';

const Thanks = () => {
    return (
      <div>
        <div>
          <h1>Thank You!</h1>
          <p>
            <strong>Please check your email</strong> for further instructions.
          </p>

          <p>
            Having trouble? <a href="/">Contact us</a>
          </p>
          <p>
            <button>Continue to homepage</button>
           
          </p>
        </div>
      </div>
    );
};

export default Thanks;
