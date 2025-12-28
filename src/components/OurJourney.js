import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './OurJourney.module.css';

export default function OurJourney() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.container}>
      <motion.div className={styles.ourJourney}>
        <h2>About Paragon Insurance</h2>
        <p>
          At Paragon Insurance, we believe that protecting what matters most shouldn't be complicated. Founded with a commitment to transparency and client-focused service, we have grown into a trusted partner for individuals and businesses seeking comprehensive insurance solutions across Texas and beyond.
        </p>
        <p>
          Our team of experienced professionals works closely with leading insurance carriers to deliver tailored coverage options that fit your unique needs and budget. Whether you're looking for personal auto, homeowners, commercial, or specialty insurance, we take the time to understand your situation and recommend the right protection.
        </p>
        <p>
          With a focus on building lasting relationships, we pride ourselves on providing exceptional customer service, competitive rates, and expert guidance every step of the way. Your peace of mind is our priority.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Get a Quote
        </Link>
      </motion.div>
    </motion.div>
  );
}
