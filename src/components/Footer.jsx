import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#16A34A"/>
                <path d="M10 22V10h4l4 6 4-6h4v12h-4v-7l-4 5-4-5v7h-4z" fill="white"/>
              </svg>
              <span>CodeStudio</span>
            </a>
            <p className="footer__tagline">
              AI-powered Shopify apps that drive revenue, save time, and help merchants grow.
            </p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Apps</h4>
            <ul className="footer__links">
              <li><a href="#apps">Print on Demand AI</a></li>
              <li><a href="#apps">More Coming Soon</a></li>
              <li><a href="#how-we-help">How We Help</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__links">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__heading">Legal</h4>
            <ul className="footer__links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {currentYear} CodeStudio. All rights reserved.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Twitter/X" className="footer__social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.5L20 4h-2l-5.2 6.3L8 4H4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="footer__social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="footer__social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__disclaimer">
          <p>
            CodeStudio is an independent software company and is not affiliated with, endorsed by, or sponsored by Shopify Inc. 
            "Shopify" is a registered trademark of Shopify Inc. All product names, logos, and brands are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  )
}
