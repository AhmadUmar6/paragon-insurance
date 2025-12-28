import React from 'react';
import Image from 'next/image';
import styles from './LogoMarquee.module.css';

const partners = [
  { name: 'Attune Insurance', logo: '/attune2.png' },
  { name: 'CNA Financial', logo: '/cna.png' },
  { name: 'Elephant Insurance', logo: '/elephant2.png' },
  { name: 'Liberty Mutual', logo: '/liberty2.png' },
  { name: 'NEXT Insurance', logo: '/next.png' },
  { name: 'Progressive Insurance', logo: '/progressive.png' },
  { name: 'Texas Mutual', logo: '/texas.png' },
  { name: 'USLI', logo: '/usli.png' }
];

export default function LogoMarquee() {
  return (
    <div className={styles.marqueeSection}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className={styles.logoItem}>
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={120}
                height={60}
                className={styles.logo}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

