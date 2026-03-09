import './WhyChooseUs.css'

const reasons = [
  {
    title: 'Ecommerce Specialists',
    description: 'We don\'t build generic software. We build exclusively for ecommerce, so every feature is optimized for online stores.',
  },
  {
    title: 'Performance-Driven',
    description: 'Our apps are lightweight and fast. We obsess over load times because we know every millisecond affects your bottom line.',
  },
  {
    title: 'Clean, Intuitive UX',
    description: 'No cluttered dashboards or confusing settings. Our apps are designed to be understood in minutes, not hours.',
  },
  {
    title: 'Fast, Human Support',
    description: 'When you need help, you get a real person who understands ecommerce and our tools \u2014 not a chatbot runaround.',
  },
  {
    title: 'Data-Backed Results',
    description: 'Every feature we build is driven by merchant data. We ship what works, not what sounds impressive in a pitch deck.',
  },
  {
    title: 'Built for Scale',
    description: 'Whether you process 10 orders or 10,000 orders a day, our tools are engineered to handle growth without breaking.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <div className="section-header">
          <div className="badge">Why Choose Us</div>
          <h2 className="section-title" style={{ marginTop: 'var(--space-4)' }}>
            We do one thing, and we do it well
          </h2>
          <p className="section-subtitle">
            Ecommerce apps built by people who understand your business — not a general software shop.
          </p>
        </div>

        <div className="why-us__grid">
          {reasons.map((r, i) => (
            <div key={i} className="why-us__item">
              <div className="why-us__check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l4 4 8-8" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="why-us__title">{r.title}</h3>
                <p className="why-us__desc">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
