"use client";
import { useState } from 'react';
import styles from './faqs.module.css';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';

const faqs = [
  {
    question: "What types of insurance do you offer?",
    answer: "We offer comprehensive personal insurance including home, auto, and umbrella coverage, as well as commercial insurance solutions such as general liability, commercial property, and workers' compensation. Our team works with multiple carriers to find the best coverage for your specific needs."
  },
  {
    question: "How do I get a quote?",
    answer: "Getting a quote is simple. You can fill out our online contact form, call us directly at (469) 466-8081, or email us at admin@insureparagon.com. We typically respond within 24 hours with a personalized quote tailored to your needs."
  },
  {
    question: "What information do I need to get a quote?",
    answer: "For personal insurance, we'll need basic information about you and the property or vehicle you want to insure. For commercial insurance, we'll need details about your business, including type of operations, number of employees, and annual revenue. Don't worry—we'll guide you through the process."
  },
  {
    question: "How long does it take to get coverage?",
    answer: "In many cases, we can bind coverage the same day you accept a quote. Some policies may require additional underwriting, which can take a few days. We'll keep you informed throughout the process and work to get you covered as quickly as possible."
  },
  {
    question: "Can you help me if I already have insurance?",
    answer: "Absolutely. We regularly help clients review their existing coverage to identify gaps or find better rates. There's no obligation—we're happy to provide a free coverage review and let you know if we can improve your situation."
  },
  {
    question: "What areas do you serve?",
    answer: "We're based in Dallas, Texas and primarily serve clients throughout the state of Texas. However, we work with national carriers and can often help clients in other states as well. Contact us to discuss your specific location."
  },
  {
    question: "How do I file a claim?",
    answer: "If you need to file a claim, contact your insurance carrier directly using the number on your policy documents. You can also reach out to us and we'll help guide you through the claims process and advocate on your behalf if needed."
  },
  {
    question: "Do you charge fees for your services?",
    answer: "No, our services are free to you. We're compensated by the insurance carriers when you purchase a policy through us. This means you get expert advice and personalized service at no additional cost."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
        <p className={styles.heroSubtitle}>
          Everything you need to know about our insurance services
        </p>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.faqOpen : ''}`}
            >
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <div className={styles.faqIcon}>
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14"
                  >
                    <path 
                      d="M7 1V13M1 7H13" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                  </svg>
              </div>
              </button>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className={styles.moreHelp}>
        <h2 className={styles.moreHelpTitle}>Still have questions?</h2>
        <p className={styles.moreHelpText}>
          Can't find what you're looking for? Our team is here to help.
        </p>
        <a href="/contact" className={styles.moreHelpButton}>
          Contact Us
        </a>
      </section>

      <WhyChooseUs />
      
      <CTASection />
    </div>
  );
}
