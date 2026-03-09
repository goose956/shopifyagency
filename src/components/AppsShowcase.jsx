import './AppsShowcase.css'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a5 5 0 015 5c0 2-1 3.5-3 5l-2 1.5V16H12v-2.5L14 12c1.5-1.2 2.5-2.3 2.5-4A4.5 4.5 0 0012 3.5 4.5 4.5 0 007.5 8c0 1.7 1 2.8 2.5 4l2 1.5V16h-2v-2.5L8 12C6 10.5 5 9 5 7a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 18h6M10 21h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI Image Generation',
    description: 'Generate unique, high-quality product images using AI — no photographer or designer needed.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'AI Product Copy',
    description: 'Automatically generate compelling titles, descriptions, and SEO-optimized product copy in seconds.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Direct Store Sync',
    description: 'Products are created and published directly into your store \u2014 no CSV uploads or manual entry.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'One-Click Automation',
    description: 'From idea to product listing in minutes. Set your preferences once and let the app handle the rest.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Print-Ready Designs',
    description: 'Every AI-generated image is created at print-on-demand resolution and meets fulfilment partner specs.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Scale Fast',
    description: 'Create dozens of unique products without the usual design bottleneck. Scale your catalogue effortlessly.',
  },
]

export default function AppsShowcase() {
  return (
    <section className="apps section" id="apps">
      <div className="container">
        <div className="section-header">
          <div className="badge">Our Apps</div>
          <h2 className="section-title" style={{ marginTop: 'var(--space-4)' }}>
            Tools built to grow your store
          </h2>
          <p className="section-subtitle">
            Our first app is in development now — with two more on the way.
          </p>
        </div>

        <div className="apps__featured">
          <div className="apps__featured-visual">
            <div className="apps__screenshot-wrapper">
              <img
                src="/pod-screenshot.png"
                alt="POD Design Generator - AI-powered print on demand product creation for ecommerce stores"
                className="apps__screenshot"
              />
            </div>
          </div>

          <div className="apps__featured-info">
            <div className="apps__featured-grid">
              {features.map((f, i) => (
                <div key={i} className="apps__feature-card">
                  <div className="apps__feature-icon">{f.icon}</div>
                  <h3 className="apps__feature-title">{f.title}</h3>
                  <p className="apps__feature-desc">{f.description}</p>
                </div>
              ))}
            </div>
            <div className="apps__featured-cta">
              <a href="#portfolio" className="btn btn-primary btn-lg">
                View Our Portfolio
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary btn-lg">
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Coming Soon Apps */}
        <div className="apps__coming-soon">
          <h3 className="apps__coming-soon-title">In Development</h3>
          <div className="apps__coming-soon-grid">
            <div className="apps__secret-card">
              <div className="apps__secret-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Coming Soon
              </div>
              <div className="apps__secret-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="apps__secret-name">Project Aurora</h4>
              <p className="apps__secret-desc">
                Automated blog content optimised for LLMs and AI search. Generates
                topic clusters around your products to drive organic discovery.
              </p>
              <div className="apps__secret-status">
                <div className="apps__secret-bar">
                  <div className="apps__secret-fill" style={{ width: '65%' }} />
                </div>
                <span className="apps__secret-pct">In active development</span>
              </div>
            </div>

            <div className="apps__secret-card">
              <div className="apps__secret-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Coming Soon
              </div>
              <div className="apps__secret-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="7" y1="7" x2="7.01" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="apps__secret-name">Project Beacon</h4>
              <p className="apps__secret-desc">
                AI-optimised pre and post-purchase offers that pair slow-moving
                stock with bestsellers to increase your average order value.
              </p>
              <div className="apps__secret-status">
                <div className="apps__secret-bar">
                  <div className="apps__secret-fill" style={{ width: '35%' }} />
                </div>
                <span className="apps__secret-pct">Early development</span>
              </div>
            </div>
          </div>
          <p className="apps__coming-soon-note">
            Want early access? <a href="#contact">Get on the waitlist</a>
          </p>
        </div>
      </div>
    </section>
  )
}
