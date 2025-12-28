'use client'
import React from 'react';
import Link from 'next/link';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Your Trusted Partner for Comprehensive Insurance Solutions
        </h2>
        <p className={styles.description}>
          At Paragon Insurance, we understand that protecting what matters most requires more than just a policy—it requires a partner who listens. With years of experience serving individuals and businesses across the region, we deliver tailored coverage that adapts to your unique circumstances and evolving needs.
        </p>
        <p className={styles.description}>
          Our commitment to transparency, competitive rates, and exceptional client service has made us a preferred choice for families seeking peace of mind and enterprises looking to safeguard their future. Whether you need personal, life, or commercial insurance, our dedicated team is here to guide you every step of the way.
        </p>
        <Link href="/about-us" className={styles.button}>
          Learn More About Us
        </Link>
      </div>
    </section>
  );
}

