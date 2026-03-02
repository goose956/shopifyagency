import './About.css'

export default function About() {
  return (
    <section className="about section section-alt" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__content">
            <div className="badge">About Us</div>
            <h2 className="section-title" style={{ marginTop: 'var(--space-4)' }}>
              A small team with a sharp focus
            </h2>
            <p className="about__text">
              We're a team of developers and ecommerce specialists who build exclusively for Shopify.
              We saw merchants wasting hours on tasks that should be automated — creating product listings,
              writing copy, managing workflows — and decided to fix it.
            </p>
            <p className="about__text">
              Our first app tackles print on demand, automating the entire product creation process with AI.
              But that's just the start — we have more tools in active development, each designed to solve
              a specific, measurable problem for Shopify stores.
            </p>
            <p className="about__text">
              We're not a general software agency. We build for Shopify merchants, and only Shopify
              merchants. Every line of code is written with your store in mind.
            </p>
          </div>
          <div className="about__visual">
            <div className="about__values">
              <div className="about__value">
                <div className="about__value-number">01</div>
                <div>
                  <h4 className="about__value-title">Shopify Only</h4>
                  <p className="about__value-desc">100% focused on the Shopify ecosystem</p>
                </div>
              </div>
              <div className="about__value">
                <div className="about__value-number">02</div>
                <div>
                  <h4 className="about__value-title">Results First</h4>
                  <p className="about__value-desc">We build features that drive measurable outcomes</p>
                </div>
              </div>
              <div className="about__value">
                <div className="about__value-number">03</div>
                <div>
                  <h4 className="about__value-title">Long-Term Commitment</h4>
                  <p className="about__value-desc">Continuous updates, support, and improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
