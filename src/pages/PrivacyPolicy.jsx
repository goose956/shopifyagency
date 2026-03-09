import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — CodeStudio</title>
        <meta name="description" content="Privacy Policy for CodeStudio and ListingLab. Learn how we collect, use, and protect your data." />
      </Helmet>

      <div className="privacy">
        <div className="container">
          <div className="privacy__nav">
            <Link to="/" className="privacy__back">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16 10H4m0 0l4-4m-4 4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>
          </div>

          <h1 className="privacy__title">Privacy Policy</h1>
          <p className="privacy__updated">Last updated: March 9, 2026</p>

          <div className="privacy__content">
            <section className="privacy__section">
              <h2>1. Introduction</h2>
              <p>
                CodeStudio ("we," "us," or "our") operates the ListingLab application and other ecommerce tools.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                install and use our applications, visit our website, or interact with our services.
              </p>
              <p>
                By installing or using our apps, you agree to the collection and use of information in accordance
                with this policy. If you do not agree, please do not install or use our applications.
              </p>
            </section>

            <section className="privacy__section">
              <h2>2. Information We Collect</h2>

              <h3>2.1 Information Collected Automatically</h3>
              <p>When you install and use our apps, we may automatically collect:</p>
              <ul>
                <li><strong>Store information:</strong> Your store name, domain, email address, and store owner details as provided through the platform's API during installation.</li>
                <li><strong>Product data:</strong> Product titles, descriptions, images, pricing, and inventory information necessary for our apps to function.</li>
                <li><strong>Usage data:</strong> How you interact with our apps, including features used, actions taken, and timestamps.</li>
                <li><strong>Device and browser information:</strong> IP address, browser type, operating system, and referring URLs for security and analytics purposes.</li>
              </ul>

              <h3>2.2 Information You Provide</h3>
              <p>We may collect information that you voluntarily provide, including:</p>
              <ul>
                <li><strong>Contact information:</strong> Name and email address when you reach out to us via our contact form or support channels.</li>
                <li><strong>Support communications:</strong> Any messages, feedback, or files you send us when requesting support.</li>
                <li><strong>Account preferences:</strong> Settings and configurations you choose within our apps.</li>
              </ul>
            </section>

            <section className="privacy__section">
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and maintain our applications and their core functionality.</li>
                <li>Process and fulfil the services you've requested (e.g., generating product listings, automating workflows).</li>
                <li>Communicate with you, including responding to support requests and sending service-related notices.</li>
                <li>Monitor and analyse usage patterns to improve our apps and develop new features.</li>
                <li>Detect, prevent, and address technical issues and security vulnerabilities.</li>
                <li>Comply with legal obligations and enforce our terms of service.</li>
              </ul>
            </section>

            <section className="privacy__section">
              <h2>4. How We Share Your Information</h2>
              <p>We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:</p>
              <ul>
                <li><strong>Service providers:</strong> We may share data with trusted third-party services that help us operate our apps (e.g., hosting providers, AI services for content generation). These providers are contractually obligated to protect your data.</li>
                <li><strong>Legal requirements:</strong> We may disclose information if required by law, regulation, legal process, or governmental request.</li>
                <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.</li>
                <li><strong>With your consent:</strong> We may share information for other purposes with your explicit consent.</li>
              </ul>
            </section>

            <section className="privacy__section">
              <h2>5. Data Retention</h2>
              <p>
                We retain your information only for as long as necessary to provide our services and fulfil the purposes
                described in this policy. When you uninstall one of our apps, we will delete your store data within
                30 days, unless we are required to retain it for legal or compliance purposes.
              </p>
              <p>
                You may request deletion of your data at any time by contacting us at the address provided below.
              </p>
            </section>

            <section className="privacy__section">
              <h2>6. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your information against
                unauthorised access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Encryption of data in transit using TLS/SSL.</li>
                <li>Secure storage with access controls and authentication.</li>
                <li>Regular security reviews and updates.</li>
              </ul>
              <p>
                However, no method of electronic transmission or storage is 100% secure. While we strive to protect
                your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="privacy__section">
              <h2>7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request that we correct any inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request that we delete your personal data.</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
                <li><strong>Objection:</strong> Object to our processing of your data in certain circumstances.</li>
                <li><strong>Restriction:</strong> Request that we restrict processing of your data in certain circumstances.</li>
              </ul>
              <p>To exercise any of these rights, please contact us using the details in Section 11.</p>
            </section>

            <section className="privacy__section">
              <h2>8. Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience. These may include:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> Required for site functionality.</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site.</li>
              </ul>
              <p>You can control cookies through your browser settings. Disabling cookies may affect site functionality.</p>
            </section>

            <section className="privacy__section">
              <h2>9. Third-Party Services</h2>
              <p>
                Our apps may integrate with third-party services (e.g., AI content generation providers, print-on-demand
                fulfilment partners). These services have their own privacy policies, and we encourage you to review them.
                We are not responsible for the privacy practices of third-party services.
              </p>
            </section>

            <section className="privacy__section">
              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                updating the "Last updated" date at the top of this page. Your continued use of our apps after changes
                are posted constitutes your acceptance of the revised policy.
              </p>
            </section>

            <section className="privacy__section">
              <h2>11. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:</p>
              <ul>
                <li><strong>Company:</strong> CodeStudio</li>
                <li><strong>Email:</strong> privacy@codestudio.agency</li>
                <li><strong>Website:</strong> <a href="https://codestudio.agency">codestudio.agency</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
