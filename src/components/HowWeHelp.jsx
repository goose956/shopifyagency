import './HowWeHelp.css'

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 6h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Generate With AI',
    description: 'Create product images, descriptions, and listings using AI — no designers or copywriters needed. Our apps put the creative work on autopilot.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Save Hours Every Week',
    description: 'Automate the repetitive tasks that eat into your day — product creation, copy writing, listing management — so you can focus on growth.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94L6.73 20.2a2.12 2.12 0 01-3-3l6.73-6.73A6 6 0 0114.7 6.3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Publish Straight to Shopify',
    description: 'No CSV uploads. No manual data entry. Our apps create products directly in your Shopify store, ready to sell.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Scale Without Limits',
    description: 'Launch products faster and grow your catalogue without the usual bottlenecks. Built for merchants who want to move quickly.',
  },
]

export default function HowWeHelp() {
  return (
    <section className="how-we-help section section-alt" id="how-we-help">
      <div className="container">
        <div className="section-header">
          <div className="badge">How We Help</div>
          <h2 className="section-title" style={{ marginTop: 'var(--space-4)' }}>
            How our apps help you sell more
          </h2>
          <p className="section-subtitle">
            Every tool we build is designed around the same four goals.
          </p>
        </div>

        <div className="how-we-help__grid">
          {pillars.map((pillar, i) => (
            <div key={i} className="how-we-help__card">
              <div className="how-we-help__icon">{pillar.icon}</div>
              <h3 className="how-we-help__title">{pillar.title}</h3>
              <p className="how-we-help__desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
