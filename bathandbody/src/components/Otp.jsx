import React from 'react';

import { IoMdLock } from 'react-icons/io';
import { MdOutlineSendToMobile } from 'react-icons/md';
import styles from './Otp.module.css';

const Otp = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Welcome, USERNAME(FATCH NAME HERE) </h2>
        <h2>
          <IoMdLock />
          Let's keep your account secure
        </h2>
      </div>
      <div className={styles.innerpart}>
        <div>
          <MdOutlineSendToMobile style={{ fontSize: '60px' }} />
        </div>
        <div>
          <h5>Enter the code we sent to (MOBILE NUMBER)</h5>
        </div>
        <div>
          <input type="password" placeholder="Enter four digit OTP" />
        </div>
        <div className={styles.errorDiv}>
          <p>Didn't get a code ? </p>
          <a href="/">Send Again</a>
        </div>
        <div className={styles.errorDiv}>
          <p>Wrong number ? </p>

          <a href="/">Update here</a>
        </div>
        <div className={styles.verifybtn}>
          <button>Verify</button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
