'use client'
import React from 'react';
import { FaUserTie, FaDollarSign, FaCompass, FaShieldAlt } from 'react-icons/fa';
import styles from './WhyChooseUs.module.css';

const features = [
  {
    icon: FaUserTie,
    title: "Personalized Service",
    description: "We take time to understand your unique needs and craft coverage that fits your lifestyle and budget."
  },
  {
    icon: FaDollarSign,
    title: "Competitive Rates",
    description: "Access to multiple top-rated carriers means we find you the best coverage at the most competitive prices."
  },
  {
    icon: FaCompass,
    title: "Expert Guidance",
    description: "Our experienced team simplifies complex insurance decisions with clear, honest advice you can trust."
  },
  {
    icon: FaShieldAlt,
    title: "Fast Claims Support",
    description: "When you need us most, we're here to help navigate the claims process quickly and efficiently."
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Paragon</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <feature.icon className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
