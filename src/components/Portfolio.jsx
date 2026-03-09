import './Portfolio.css'

const apps = [
  {
    name: 'Print on Demand AI',
    status: 'In Development',
    statusColor: 'blue',
    description:
      'Automates the entire print-on-demand workflow — from AI-generated product images and optimised listing copy to one-click publishing on your online store.',
    tags: ['AI Image Generation', 'Automated Copy', 'Store Integration', 'Bulk Publishing'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#16A34A" />
        <path d="M13 9L7 16l6 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M19 9l6 7-6 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="17.5" y1="8" x2="14.5" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
    progress: 80,
  },
  {
    name: 'Project Aurora',
    status: 'Early Development',
    statusColor: 'amber',
    description:
      'Automated blog content fully optimised for LLMs and AI-powered search engines. Generates topic clusters around your products — 4 or 5 related posts all pointing back to a single product page — driving organic discovery and traffic.',
    tags: ['LLM-Optimised Content', 'Automated Blogging', 'Topic Clusters', 'SEO & AEO'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#7C3AED" />
        <path d="M12 22h9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 7.5a2.121 2.121 0 013 3L11 21l-4 1 1-4L18.5 7.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    progress: 65,
  },
  {
    name: 'Project Beacon',
    status: 'Research Phase',
    statusColor: 'gray',
    description:
      'AI-optimised pre and post-purchase offers that intelligently pair slow-moving products with your bestsellers at strategic discounts. Designed to increase your average order value (AOV) automatically.',
    tags: ['Pre-Purchase Offers', 'Post-Purchase Upsell', 'AOV Optimisation', 'Smart Bundling'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0EA5E9" />
        <path d="M22.59 15.41l-7.17 7.17a2 2 0 01-2.83 0L6 16V8h8l8.59 8.59a2 2 0 010 2.82z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11" cy="13" r="1" fill="white" />
      </svg>
    ),
    progress: 35,
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="badge">Our Portfolio</div>
          <h2 className="section-title" style={{ marginTop: 'var(--space-4)' }}>
            Apps we're building for ecommerce merchants
          </h2>
          <p className="section-subtitle">
            Every tool is purpose-built for online stores — designed to solve real problems and deliver measurable results.
          </p>
        </div>

        <div className="portfolio__grid">
          {apps.map((app, i) => (
            <div key={i} className="portfolio__card">
              <div className="portfolio__card-header">
                <div className="portfolio__icon">{app.icon}</div>
                <div>
                  <h3 className="portfolio__name">{app.name}</h3>
                  <span className={`portfolio__status portfolio__status--${app.statusColor}`}>
                    {app.status}
                  </span>
                </div>
              </div>

              <p className="portfolio__desc">{app.description}</p>

              <div className="portfolio__tags">
                {app.tags.map((tag, j) => (
                  <span key={j} className="portfolio__tag">{tag}</span>
                ))}
              </div>

              <div className="portfolio__progress">
                <div className="portfolio__progress-header">
                  <span className="portfolio__progress-label">Development Progress</span>
                  <span className="portfolio__progress-value">{app.progress}%</span>
                </div>
                <div className="portfolio__progress-bar">
                  <div
                    className="portfolio__progress-fill"
                    style={{ width: `${app.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio__cta">
          <p className="portfolio__cta-text">
            Interested in being an early adopter? Get notified when our apps launch.
          </p>
          <a href="#contact" className="btn btn-primary btn-lg">
            Get on the Waitlist
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
