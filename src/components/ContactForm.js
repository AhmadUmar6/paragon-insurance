'use client'
import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from 'emailjs-com';

export default function ContactForm({ lightMode = false }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_mh5mmto';
    const templateID = 'template_1rsa53c';
    const userID = 'XwCC8PSZN8_HLzYZA';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true);
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className={`${styles.contactWrapper} ${lightMode ? styles.lightMode : ''}`}>
      <div className={styles.contactInfo}>
        <span className={styles.label}>Contact Us</span>
        <h2 className={styles.title}>Get a Free Quote</h2>
        <p className={styles.subtitle}>
          Ready to protect what matters most? Fill out the form and our team will get back to you within 24 hours.
        </p>
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Phone</span>
            <span className={styles.contactValue}>(469) 466-8081</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email</span>
            <span className={styles.contactValue}>admin@insureparagon.com</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Address</span>
            <span className={styles.contactValue}>12100 Ford Rd, Suite B308, Dallas TX</span>
          </div>
        </div>
      </div>

      <div className={styles.formContainer}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <label className={styles.inputLabel}>First Name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={styles.input}
          />
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.inputLabel}>Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={styles.input}
          />
            </div>
        </div>
        <div className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <label className={styles.inputLabel}>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={styles.input}
          />
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.inputLabel}>Email Address*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.inputLabel}>Message*</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textarea}
        />
          </div>
        <button type="submit" className={styles.button}>Send Message</button>
        </form>

      {isSent && <p className={styles.successMessage}>Message sent successfully!</p>}
      </div>
    </div>
  );
}
