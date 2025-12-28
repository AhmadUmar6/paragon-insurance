"use client";
import ContactForm from '@/components/ContactForm';
import LogoMarquee from '@/components/LogoMarquee';
import Maps from '@/components/Maps';
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <section className={styles.formSection}>
        <ContactForm lightMode />
      </section>
      <LogoMarquee />
      <section className={styles.formSection}>
        <Maps lightMode />
      </section>
    </div>
  );
}
