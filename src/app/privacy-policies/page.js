"use client";
import styles from './privacy.module.css';
import CTASection from '@/components/CTASection';

const sections = [
  {
    id: "information-collected",
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you request a quote, purchase a policy, or contact us, we may collect personal information including your name, address, email address, phone number, date of birth, Social Security number, driver's license number, and financial information necessary to process your insurance application."
      },
      {
        subtitle: "Property & Vehicle Information",
        text: "For insurance purposes, we collect information about the property or vehicles you wish to insure, including addresses, vehicle identification numbers (VINs), make, model, year, and current coverage details."
      },
      {
        subtitle: "Automatically Collected Information",
        text: "When you visit our website, we automatically collect certain information including your IP address, browser type, device information, pages visited, and the date and time of your visit. This helps us improve our services and user experience."
      }
    ]
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Providing Insurance Services",
        text: "We use your information to process insurance applications, provide quotes, underwrite policies, process claims, and communicate with you about your coverage. This includes sharing necessary information with insurance carriers to obtain quotes and bind coverage."
      },
      {
        subtitle: "Communication",
        text: "We may use your contact information to send you policy documents, renewal notices, billing statements, and important updates about your coverage. With your consent, we may also send promotional communications about our services."
      },
      {
        subtitle: "Legal Compliance",
        text: "We use and retain your information as necessary to comply with applicable federal and Texas state laws, including insurance regulations, tax requirements, and legal proceedings."
      }
    ]
  },
  {
    id: "information-sharing",
    title: "Information Sharing & Disclosure",
    content: [
      {
        subtitle: "Insurance Carriers",
        text: "We share your information with insurance carriers and underwriters to obtain quotes and process your insurance applications. These carriers have their own privacy policies governing their use of your information."
      },
      {
        subtitle: "Service Providers",
        text: "We may share information with third-party service providers who assist us in operating our business, such as payment processors, IT services, and communication platforms. These providers are contractually obligated to protect your information."
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others."
      }
    ]
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      {
        subtitle: "Protection Measures",
        text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls."
      },
      {
        subtitle: "Data Retention",
        text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Insurance records are retained in accordance with Texas Department of Insurance requirements."
      }
    ]
  },
  {
    id: "your-rights",
    title: "Your Rights Under Texas Law",
    content: [
      {
        subtitle: "Access & Correction",
        text: "Under the Texas Insurance Code and applicable federal regulations, you have the right to access the personal information we maintain about you and request corrections to any inaccurate information. Contact us to submit an access or correction request."
      },
      {
        subtitle: "Opt-Out Rights",
        text: "You may opt out of receiving promotional communications from us at any time by contacting us or using the unsubscribe link in our emails. Note that you cannot opt out of transactional communications related to your insurance policies."
      },
      {
        subtitle: "Texas Data Privacy and Security Act",
        text: "As a Texas resident, you may have additional rights under state law regarding your personal data. We are committed to honoring these rights and responding to verified requests in accordance with applicable law."
      }
    ]
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    content: [
      {
        subtitle: "What We Use",
        text: "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from. You can control cookie settings through your browser preferences."
      },
      {
        subtitle: "Third-Party Analytics",
        text: "We use third-party analytics services such as Google Analytics to help us understand how visitors use our website. These services may collect information about your online activities over time and across different websites."
      }
    ]
  }
];

export default function PrivacyPolicy() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Privacy Policy</h1>
        <p className={styles.heroSubtitle}>
          Your privacy matters to us. Learn how we collect, use, and protect your information.
        </p>
        <p className={styles.lastUpdated}>Last Updated: December 2025</p>
      </section>

      {/* Introduction */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <p>
            Paragon Insurance ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, request insurance quotes, or purchase policies through our agency.
          </p>
          <p>
            As a Texas-based insurance agency, we comply with all applicable federal and state privacy laws, including the Texas Insurance Code, the Gramm-Leach-Bliley Act (GLBA), and the Texas Data Privacy and Security Act. By using our services, you consent to the practices described in this policy.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className={styles.toc}>
        <h2 className={styles.tocTitle}>Contents</h2>
        <nav className={styles.tocNav}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={styles.tocLink}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </section>

      {/* Main Content */}
      <section className={styles.content}>
        {sections.map((section, index) => (
          <div key={section.id} id={section.id} className={styles.section}>
            <div className={styles.sectionNumber}>{String(index + 1).padStart(2, '0')}</div>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.sectionContent}>
              {section.content.map((item, idx) => (
                <div key={idx} className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{item.subtitle}</h3>
                  <p className={styles.subsectionText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2 className={styles.contactTitle}>Questions About This Policy?</h2>
        <p className={styles.contactText}>
          If you have questions about this Privacy Policy or our data practices, please contact us:
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email</span>
            <span className={styles.contactValue}>admin@insureparagon.com</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Phone</span>
            <span className={styles.contactValue}>(469) 466-8081</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Address</span>
            <span className={styles.contactValue}>12100 Ford Rd, Suite B308, Dallas, TX 75234</span>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
