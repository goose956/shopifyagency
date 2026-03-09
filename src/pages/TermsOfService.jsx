import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './TermsOfService.css'

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — CodeStudio</title>
        <meta name="description" content="Terms of Service for CodeStudio and its applications." />
      </Helmet>

      <div className="terms">
        <div className="container">
          <div className="terms__nav">
            <Link to="/" className="terms__back">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16 10H4m0 0l4-4m-4 4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>
          </div>

          <h1 className="terms__title">Terms of Service</h1>
          <p className="terms__updated">Last updated: March 9, 2026</p>

          <div className="terms__content">
            <p className="terms__placeholder">This page is currently being prepared. Please check back soon.</p>
          </div>
        </div>
      </div>
    </>
  )
}
