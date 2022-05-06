import React from 'react';

import { IoMdLock } from 'react-icons/io';
import { MdOutlineSendToMobile } from 'react-icons/md';

const Otp = () => {
  return (
      <div style={{
          width: "500px", margin: "auto",
      textAlign:"center"}}>
      <div>
        <h1>Welcome, USERNAME(FATCH NAME HERE) </h1>
        <h2>
          <IoMdLock />
          Let's keep your account secure
        </h2>
      </div>
      <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div>
          <MdOutlineSendToMobile style={{ fontSize: '60px' }} />
        </div>
        <div>
          <h3>Enter the code we sent to (MOBILE NUMBER)</h3>
        </div>
        <div>
          <input type="number" />
        </div>
        <div>
          <p>Didn't get a code ? </p>
          <a href="/">Send Again</a>
        </div>
        <div>
          <p>Wrong number ? </p>
         
        
            <a href="/">Update here</a>
          
              </div>
              <div>
                  <button>Verify</button>
              </div>
            
      </div>
    </div>
  );
};

export default Otp;
