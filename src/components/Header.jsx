import { useState, useEffect } from 'react'
import './Header.css'

import Logo from './Logo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { label: 'Apps', href: '#apps' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'How We Help', href: '#how-we-help' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="header__logo" aria-label="Home">
          <Logo size={32} />
          <span className="header__brand">CodeStudio</span>
        </a>

        <nav className={`header__nav${mobileOpen ? ' header__nav--open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="header__link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary header__cta" onClick={handleNavClick}>
            Get In Touch
          </a>
        </nav>

        <button
          className={`header__hamburger${mobileOpen ? ' header__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
