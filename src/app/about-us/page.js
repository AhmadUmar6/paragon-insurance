"use client";
import React from 'react';
import styles from './Firm.module.css';
import OurJourney from '../../components/OurJourney';
import WhyChooseUs from '../../components/WhyChooseUs';
import OurClients from '../../components/OurClients';

export default function Firm() {
  return (
    <div className={styles.firmPage}>
      <div id="ourJourney" className={styles.section}>
        <OurJourney />
      </div>
      <div id="ourClients" className={styles.section2}>
        <OurClients />
      </div>
      <div id="whyChooseUs" className={styles.section3}>
        <WhyChooseUs />
      </div>
    </div>
  );
}