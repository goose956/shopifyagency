import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l2.09 4.26L15 5.74l-3.5 3.42.82 4.84L8 11.67 3.68 14l.82-4.84L1 5.74l4.91-.48L8 1z" fill="currentColor"/>
            </svg>
            Built for Ecommerce Merchants
          </div>
          <h1 className="hero__title">
            We build AI-powered apps that help online stores grow.
          </h1>
          <p className="hero__subtitle">
            We're building AI-powered tools for ecommerce merchants — starting with a print-on-demand app that automates product creation for platforms like Shopify. Purpose-built for results, not complexity.
          </p>
          <div className="hero__actions">
            <a href="#apps" className="btn btn-primary btn-lg">
              See What We're Building
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary btn-lg">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__mockup">
            <div className="hero__mockup-bar">
              <span className="hero__dot" />
              <span className="hero__dot" />
              <span className="hero__dot" />
            </div>
            <div className="hero__mockup-content">
              <div className="hero__mockup-header">
                <div className="hero__mockup-avatar" />
                <div>
                  <div className="hero__mockup-line hero__mockup-line--short" />
                  <div className="hero__mockup-line hero__mockup-line--xs" />
                </div>
              </div>
              <div className="hero__mockup-stats">
                <div className="hero__stat-card">
                  <span className="hero__stat-label">Products</span>
                  <span className="hero__stat-value">142</span>
                  <div className="hero__stat-bar">
                    <div className="hero__stat-fill" style={{ width: '75%' }} />
                  </div>
                </div>
                <div className="hero__stat-card">
                  <span className="hero__stat-label">AI Images</span>
                  <span className="hero__stat-value">1,280</span>
                  <div className="hero__stat-bar">
                    <div className="hero__stat-fill" style={{ width: '62%' }} />
                  </div>
                </div>
                <div className="hero__stat-card">
                  <span className="hero__stat-label">Time Saved</span>
                  <span className="hero__stat-value">8h/wk</span>
                  <div className="hero__stat-bar">
                    <div className="hero__stat-fill" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>
              <div className="hero__mockup-chart">
                <svg viewBox="0 0 300 80" fill="none" preserveAspectRatio="none">
                  <path d="M0 60 Q30 55 60 45 T120 35 T180 20 T240 15 T300 5" stroke="#16A34A" strokeWidth="2.5" fill="none" />
                  <path d="M0 60 Q30 55 60 45 T120 35 T180 20 T240 15 T300 5 V80 H0Z" fill="url(#chartGrad)" />
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#16A34A" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#16A34A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
