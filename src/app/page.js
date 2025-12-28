'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaStar } from 'react-icons/fa';
/* Changed imports to get the colored Google icon */
import { FcGoogle } from 'react-icons/fc'; 
import { SiTrustpilot } from 'react-icons/si';

// Components
import Steps from '../components/Steps';
import LogoMarquee from '../components/LogoMarquee';
import Maps from '../components/Maps';
import ContactForm from '../components/ContactForm';
import WhyUs from '../components/WhyUs';
import styles from './page.module.css';

const slides = [
  {
    id: 1,
    title: "Personal Insurance",
    subtitle: "Protect Your Lifestyle",
    description: "Secure your home, vehicle, and personal assets with comprehensive coverage tailored to your unique needs. Experience true peace of mind knowing what matters most is safe.",
    image: "/heropersonal.jpg"
  },
  {
    id: 2,
    title: "Commercial Insurance",
    subtitle: "Empower Your Business",
    description: "Safeguard your enterprise with robust liability and property solutions designed for growth. Let us handle the risk so you can focus on building your business success.",
    image: "/commercial.jpg"
  }
];

const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" }
];

const StatsBar = () => {
    return (
        <div className={styles.statsBar}>
            <div className={styles.statsWrapper}>
                <div className={styles.metricsGroup}>
                    {stats.map((stat, index) => (
                        <React.Fragment key={index}>
                            <div className={styles.statItem}>
                                <h3 className={styles.statNumber}>{stat.number}</h3>
                                <p className={styles.statLabel}>{stat.label}</p>
                            </div>
                            {index < stats.length - 1 && <div className={styles.statDivider}></div>}
                        </React.Fragment>
                    ))}
                </div>

                <div className={styles.trustGroup}>
                    <div className={styles.trustBadge}>
                        <FcGoogle className={styles.trustIcon} />
                        <div className={styles.trustDetails}>
                            <div className={styles.stars}>
                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                            </div>
                            <span className={styles.trustLabel}>4.9 Rating</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={styles.container}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            className={styles.slideContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Text Content */}
            <div className={styles.textSide}>
              <motion.div 
                className={styles.textContentWrapper}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className={styles.slideTitle}>{slides[currentSlide].title}</h1>
                <p className={styles.slideDescription}>{slides[currentSlide].description}</p>
                
                <div className={styles.buttonContainer}>
                  <Link href="/contact" className={styles.primaryButton}>
                    Get a Quote <FaArrowRight />
                  </Link>
                  <Link href="/our-services" className={styles.secondaryButton}>
                    View Services
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Image Side */}
            <div className={styles.imageSide}>
               <motion.div 
                className={styles.imageWrapper}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
               >
                  <div className={styles.blobShape}>
                    <Image 
                      src={slides[currentSlide].image} 
                      alt={slides[currentSlide].title}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </div>
               </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slide Indicators */}
        <div className={styles.indicators}>
          {slides.map((slide, index) => (
            <button 
              key={slide.id}
              className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <LogoMarquee />

      <Steps />

      <section className={styles.contactSection}>
          <ContactForm />
      </section>

      <WhyUs />

      <Maps />

      <StatsBar />

    </div>
  );
}