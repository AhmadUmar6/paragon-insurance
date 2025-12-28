'use client'
import React from 'react';
import styles from './Maps.module.css';

export default function Maps({ lightMode = false }) {
  const handleDirections = () => {
    window.open('https://www.google.com/maps/dir//12100+Ford+Rd+b308,+Farmers+Branch,+TX+75234,+USA', '_blank');
  };

  return (
    <div className={`${styles.mapsWrapper} ${lightMode ? styles.lightMode : ''}`}>
      <div className={styles.mapsContainer}>
        <div className={styles.textSide}>
          <h2 className={styles.title}>Visit Our Office</h2>
          <p className={styles.description}>
            We'd love to meet you in person. Stop by our office to discuss your insurance needs with our friendly team.
          </p>
          <button onClick={handleDirections} className={styles.directionsBtn}>
            Get Directions
          </button>
        </div>
        <div className={styles.mapSide}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.4505981181633!2d-96.89296412413105!3d32.91269127360727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c27bd6956900d%3A0x46f6565f5ce80102!2s12100%20Ford%20Rd%20b308%2C%20Farmers%20Branch%2C%20TX%2075234%2C%20USA!5e0!3m2!1sen!2suk!4v1764177001599!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.iframe}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
