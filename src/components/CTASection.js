import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/cta.jpg"
            alt="Get protected today"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Protect What Matters?</h2>
          <p className={styles.description}>
            Whether you're looking to safeguard your home, vehicle, or business, our team is here to help you find the right coverage at competitive rates. Get a personalized quote in minutes.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

