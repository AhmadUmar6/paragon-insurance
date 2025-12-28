'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoColumn}>
          <Image src="/paragon.png" alt="Paragon Insurance" width={270} height={80} className={styles.logo} style={{ objectFit: 'contain' }} />
          <div className={styles.followUs}>
            <h3>FOLLOW US ON</h3>
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
              </a>
              <a href="https://www.facebook.com/your-company" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />
              </a>
              <a href="https://www.twitter.com/your-company" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.siteMap}>
          <h3>SITE MAP</h3>
          <ul>
            {['About Us', 'Our Services', 'FAQs', 'Contact', 'Privacy Policies'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 12100 Ford Rd, Suite B308, Dallas TX 75234</p>
          <p><FontAwesomeIcon icon={faPhone} /> (469) 466 8081</p>
          <p><FontAwesomeIcon icon={faPhone} /> (469) 533-4927</p>
          <p><FontAwesomeIcon icon={faPhone} /> (682) 433-2013</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> admin@insureparagon.com</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {currentYear ? currentYear : 'Loading...'} Paragon Insurance. All rights reserved.</p>
        <p>Developed by: <a href="https://ahmadumar.space" target="_blank" rel="noopener noreferrer" className={styles.developerLink}>AUF Devs</a></p>
      </div>
    </footer>
  );
}

