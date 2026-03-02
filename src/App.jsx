import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import AppsShowcase from './components/AppsShowcase'
import HowWeHelp from './components/HowWeHelp'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MerchantKit',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-powered Shopify apps that help merchants grow. Our flagship print-on-demand tool automates product creation with AI, with more apps in development.',
    offers: {
      '@type': 'Offer',
      category: 'Software',
    },
    creator: {
      '@type': 'Organization',
      name: 'MerchantKit',
      url: 'https://merchantkit.dev',
    },
  }

  return (
    <>
      <Helmet>
        <title>MerchantKit — AI-Powered Shopify Apps That Drive Results</title>
        <meta name="description" content="We build AI-powered Shopify apps that help merchants grow. Our flagship print-on-demand tool automates product creation — with more apps in development." />
        <meta property="og:title" content="MerchantKit — AI-Powered Shopify Apps That Drive Results" />
        <meta property="og:description" content="We build AI-powered Shopify apps that help merchants grow. Our flagship print-on-demand tool automates product creation with AI." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MerchantKit — AI-Powered Shopify Apps That Drive Results" />
        <meta name="twitter:description" content="We build AI-powered Shopify apps that help merchants grow. Our flagship print-on-demand tool automates product creation with AI." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />
      <main>
        <Hero />
        <SocialProof />
        <AppsShowcase />
        <HowWeHelp />
        <WhyChooseUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
