'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Steps.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Steps() {
  return (
    <section className={styles.stepsContainer}>
      <div className={styles.contentWrapper}>
        <motion.div 
          className={styles.gridContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          
          {/* Row 1 */}
          <div className={styles.row1}>
            {/* Card 1: Contact Us (Wider) */}
            <motion.div className={`${styles.card} ${styles.contactCard}`} variants={cardVariants}>
              <div className={styles.textSide}>
                <h4 className={styles.smallLabel}>GET IN TOUCH</h4>
                <h2 className={styles.cardTitle}>
                  Reach out to Paragon Insurance today.
                </h2>
                <Link href="/contact" className={styles.cardButton}>
                  Contact Us
                </Link>
              </div>
              <div className={styles.imageCutout}>
                <Image 
                  src="/contact.png" 
                  alt="Contact Agent" 
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
            </motion.div>

            {/* Card 2: Get a Quote (Narrower) */}
            <motion.div className={`${styles.card} ${styles.quoteCard}`} variants={cardVariants}>
              {/* Removed Overlay */}
              <div className={styles.cardContent}>
                 <h4 className={styles.smallLabel}>INSTANT ESTIMATE</h4>
                 <h2 className={styles.cardTitle}>
                   Get your free quote in minutes.
                 </h2>
                 <Link href="/contact" className={styles.cardButton}>
                   Get a Quote
                 </Link>
              </div>
               <Image 
                  src="/quote.jpg" 
                  alt="Get a Quote" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.bgImage}
                />
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className={styles.row2}>
             {/* Card 3: Customized Plan (Full Width) */}
             <motion.div className={`${styles.card} ${styles.customCard}`} variants={cardVariants}>
                <div className={styles.customOverlay} />
                <div className={styles.cardContent}>
                   <h4 className={styles.smallLabel}>TAILORED SOLUTIONS</h4>
                   <h2 className={styles.cardTitle}>
                      Coverage built around your life, not the other way around.
                   </h2>
                   <Link href="/our-services" className={styles.cardButton}>
                      Read More
                   </Link>
                </div>
                 <Image 
                  src="/custom.png" 
                  alt="Customized Plan" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.bgImage}
                />
             </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
