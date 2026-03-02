import './Portfolio.css'

const apps = [
  {
    name: 'Print on Demand AI',
    status: 'In Development',
    statusColor: 'blue',
    description:
      'Automates the entire print-on-demand workflow — from AI-generated product images and optimised listing copy to one-click publishing on your Shopify store.',
    tags: ['AI Image Generation', 'Automated Copy', 'Shopify Integration', 'Bulk Publishing'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#16A34A" />
        <path d="M10 22V10h4l4 6 4-6h4v12h-4v-7l-4 5-4-5v7h-4z" fill="white" />
      </svg>
    ),
    progress: 80,
  },
  {
    name: 'Project Aurora',
    status: 'Early Development',
    statusColor: 'amber',
    description:
      'AI-driven analytics and conversion optimisation for Shopify stores. Understand your customers better and turn insights into revenue.',
    tags: ['Analytics', 'Conversion AI', 'Customer Insights', 'Revenue Optimisation'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#7C3AED" />
        <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="2" fill="none" />
        <path d="M16 10v-4M16 26v-4M10 16H6M26 16h-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    progress: 65,
  },
  {
    name: 'Project Beacon',
    status: 'Research Phase',
    statusColor: 'gray',
    description:
      'Intelligent customer engagement and retention tools powered by AI. Personalised communications that drive repeat purchases.',
    tags: ['Customer Retention', 'AI Messaging', 'Personalisation', 'Engagement'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0EA5E9" />
        <path d="M16 8v8l4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="7" stroke="white" strokeWidth="2" fill="none" />
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
            Apps we're building for Shopify merchants
          </h2>
          <p className="section-subtitle">
            Every tool is purpose-built for the Shopify ecosystem — designed to solve real problems and deliver measurable results.
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
