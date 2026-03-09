import './SocialProof.css'

export default function SocialProof() {
  const proofs = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: 'Built for Ecommerce',
      detail: 'Native App Stack',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: 'AI-Powered',
      detail: 'Smart Automation Built In',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: 'Enterprise-Grade',
      detail: 'Reliable & Performant',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: 'Store Ready',
      detail: 'Meets App Store Standards',
    },
  ]

  return (
    <section className="social-proof section-alt">
      <div className="container">
        <div className="social-proof__grid">
          {proofs.map((p, i) => (
            <div key={i} className="social-proof__item">
              <div className="social-proof__icon">{p.icon}</div>
              <div>
                <p className="social-proof__label">{p.label}</p>
                <p className="social-proof__detail">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
