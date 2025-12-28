import React from 'react';
import Image from 'next/image';
import styles from './OurClients.module.css';

export default function OurClients() {
  const clients = [
    { name: 'Attune Insurance', logo: '/attune.png' },
    { name: 'CNA Financial', logo: '/cna.png' },
    { name: 'Elephant Insurance', logo: '/elephant.png' },
    { name: 'Liberty Mutual', logo: '/liberty2.png' },
    { name: 'NEXT Insurance', logo: '/next.png' },
    { name: 'Progressive Insurance', logo: '/progressive.png' },
    { name: 'Texas Mutual', logo: '/texas.png' },
    { name: 'USLI', logo: '/usli.png' }
  ];

  return (
    <div className={styles.ourClients}>
      <h2>Our Clients</h2>
      <div className={styles.clientGrid}>
        {clients.map((client, index) => (
          <div className={styles.clientTile} key={index}>
            <div className={styles.logoWrapper}>
              <Image 
                src={client.logo} 
                alt={client.name} 
                width={150}
                height={80}
                className={styles.clientLogo}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.clientName}>{client.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
