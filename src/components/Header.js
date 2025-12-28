"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ['About Us', 'Our Services', 'FAQs', 'Privacy Policies', 'Contact'];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image src="/paragon2.png" alt="Paragon Insurance" width={50} height={50} className={styles.logo} />
          <span className={styles.companyName}>Paragon Insurance</span>
        </Link>
      </div>
      <nav className={styles.desktopNav}>
        {navItems.map((item) => (
          <Link key={item} href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
            {item}
          </Link>
        ))}
      </nav>
      <div className={styles.callNowWrapper}>
        <button className={styles.callNow}>
          Get a Quote
        </button>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {menuOpen && (
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
