import React from 'react'
import styles from './Progress.module.css'

const Progress = () => {
  return (
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
  );
}

export default Progress