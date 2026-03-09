import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import AppsShowcase from './components/AppsShowcase'
import HowWeHelp from './components/HowWeHelp'
import WhyChooseUs from './components/WhyChooseUs'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CodeStudio',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-powered ecommerce apps that help merchants grow. Our print-on-demand tool \u2014 currently in development \u2014 automates product creation with AI, with more apps on the roadmap.',
    offers: {
      '@type': 'Offer',
      category: 'Software',
    },
    creator: {
      '@type': 'Organization',
      name: 'CodeStudio',
      url: 'https://codestudio.agency',
    },
  }

  return (
    <>
      <Helmet>
        <title>CodeStudio — AI-Powered Ecommerce Apps That Drive Results</title>
        <meta name="description" content="We build AI-powered ecommerce apps that help merchants grow. ListingLab, our print-on-demand tool, is currently in development — with more apps on the roadmap." />
        <meta property="og:title" content="CodeStudio — AI-Powered Ecommerce Apps That Drive Results" />
        <meta property="og:description" content="We build AI-powered ecommerce apps that help merchants grow. ListingLab, our print-on-demand tool, is in development — automating product creation with AI." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CodeStudio — AI-Powered Ecommerce Apps That Drive Results" />
        <meta name="twitter:description" content="We build AI-powered ecommerce apps that help merchants grow. ListingLab, our print-on-demand tool, is in development — automating product creation with AI." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />
      <main>
        <Hero />
        <SocialProof />
        <AppsShowcase />
        <Portfolio />
        <HowWeHelp />
        <WhyChooseUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
