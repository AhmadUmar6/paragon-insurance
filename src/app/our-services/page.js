"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FaHome, FaCar, FaUmbrella, FaBuilding, FaShieldAlt, FaUsers } from 'react-icons/fa';
import styles from './practice.module.css';
import LogoMarquee from '@/components/LogoMarquee';
import CTASection from '@/components/CTASection';

const personalServices = [
  {
    icon: FaHome,
    title: "Home Insurance",
    description: "Comprehensive coverage for your home, belongings, and liability protection.",
    details: "Your home is more than just a building—it's where life happens. Our homeowners insurance provides comprehensive protection against fire, theft, vandalism, and natural disasters. We also cover your personal belongings, from furniture to electronics, and provide liability protection if someone is injured on your property. Whether you own a house, condo, or rent an apartment, we'll help you find the right coverage."
  },
  {
    icon: FaCar,
    title: "Auto Insurance",
    description: "Competitive rates on liability, collision, and comprehensive coverage.",
    details: "Stay protected on the road with our tailored auto insurance solutions. We offer liability coverage to protect you if you're at fault in an accident, collision coverage for damage to your vehicle, and comprehensive coverage for theft, weather damage, and more. We also provide options for uninsured motorist protection, medical payments coverage, and roadside assistance."
  },
  {
    icon: FaUmbrella,
    title: "Umbrella Insurance",
    description: "Extra liability protection beyond your standard policies.",
    details: "When your standard auto or home policy limits aren't enough, umbrella insurance steps in. This policy provides an additional layer of liability protection, typically starting at $1 million, to cover costs that exceed your other policies' limits. It protects your assets—your home, savings, and future earnings—from major claims or lawsuits."
  }
];

const commercialServices = [
  {
    icon: FaBuilding,
    title: "General Liability",
    description: "Protection against third-party claims and legal expenses.",
    details: "General liability insurance is the foundation of business protection. It covers third-party claims of bodily injury, property damage, and advertising injury. If a customer slips in your store, if your product causes damage, or if you're accused of slander in your marketing—this policy responds. We help businesses of all sizes secure the right limits and coverage."
  },
  {
    icon: FaShieldAlt,
    title: "Commercial Property",
    description: "Coverage for your business property, equipment, and inventory.",
    details: "Your business property represents a significant investment. Our commercial property insurance protects your building, equipment, inventory, furniture, and fixtures against fire, theft, vandalism, and certain natural disasters. We also offer business interruption coverage, which replaces lost income if a covered event forces you to temporarily close."
  },
  {
    icon: FaUsers,
    title: "Workers' Compensation",
    description: "Medical benefits and wage replacement for injured employees.",
    details: "Workers' compensation insurance is required in most states and provides essential protection for both employers and employees. When a worker is injured on the job, this policy covers medical expenses, rehabilitation costs, and a portion of lost wages. It also protects employers from lawsuits related to workplace injuries."
  }
];

export default function OurServices() {
  const [activeTab, setActiveTab] = useState('personal');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const currentServices = activeTab === 'personal' ? personalServices : commercialServices;
  const currentImage = activeTab === 'personal' ? '/heropersonal.jpg' : '/commercial.jpg';
  const currentTitle = activeTab === 'personal' ? 'Personal Insurance' : 'Commercial Insurance';
  const currentTagline = activeTab === 'personal' 
    ? 'Protection for you and your family'
    : 'Coverage for your business';

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpandedIndex(null);
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.header}>
        <h1 className={styles.pageTitle}>Our Services</h1>
        <p className={styles.pageSubtitle}>
          Texas-based insurance agency offering personalized coverage for homes, autos, and businesses
        </p>

        {/* Tab Buttons */}
        <div className={styles.tabContainer}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'personal' ? styles.activeTab : ''}`}
            onClick={() => handleTabChange('personal')}
          >
            Personal Insurance
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'commercial' ? styles.activeTab : ''}`}
            onClick={() => handleTabChange('commercial')}
          >
            Commercial Insurance
          </button>
        </div>
      </section>

      {/* Service Content */}
      <section className={styles.serviceSection}>
        <div className={styles.serviceContainer}>
          {/* Left - Image & Title */}
          <div className={styles.leftColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src={currentImage}
                alt={currentTitle}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageCaption}>
              <h2 className={styles.serviceTitle}>{currentTitle}</h2>
              <p className={styles.serviceTagline}>{currentTagline}</p>
            </div>
          </div>

          {/* Right - Services Grid */}
          <div className={styles.rightColumn}>
            {currentServices.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <div className={styles.serviceHeader}>
                  <service.icon className={styles.serviceIcon} />
                  <h3 className={styles.serviceName}>{service.title}</h3>
                </div>
                <p className={styles.serviceText}>{service.description}</p>
                
                <button 
                  className={styles.readMore}
                  onClick={() => toggleExpand(index)}
                >
                  <span>{expandedIndex === index ? 'Show Less' : 'Read More'}</span>
                  <svg 
                    className={`${styles.chevron} ${expandedIndex === index ? styles.chevronUp : ''}`}
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12"
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </button>

                <div className={`${styles.details} ${expandedIndex === index ? styles.detailsOpen : ''}`}>
                  <p>{service.details}</p>
                </div>

                <div className={styles.serviceLine}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />
      <CTASection />
    </div>
  );
}
