import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiCode, FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'
import { leetcodeProfileUrl, navItems, socialLinks } from './data/portfolio'
import { AboutSection } from './components/AboutSection'
import { AchievementsSection } from './components/AchievementsSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { HeroSection } from './components/HeroSection'
import { JourneySection } from './components/JourneySection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollProgressRef = useRef<HTMLDivElement>(null)
  const cursorGlowRef = useRef<HTMLDivElement>(null)
  const cursorPositionRef = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    revealElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let scrollFrame: number | null = null
    let cursorFrame: number | null = null
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const updateScroll = () => {
      if (scrollFrame !== null) return
      scrollFrame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
        if (scrollProgressRef.current) scrollProgressRef.current.style.width = `${progress}%`
        scrollFrame = null
      })
    }
    const updateCursor = (event: MouseEvent) => {
      if (reduceMotion) return
      cursorPositionRef.current = { x: event.clientX, y: event.clientY }
      if (cursorFrame !== null) return
      cursorFrame = window.requestAnimationFrame(() => {
        const { x, y } = cursorPositionRef.current
        cursorGlowRef.current?.style.setProperty('transform', `translate3d(${x - 50}px, ${y - 50}px, 0)`)
        cursorFrame = null
      })
    }
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('mousemove', updateCursor, { passive: true })
    updateScroll()
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('mousemove', updateCursor)
      if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame)
      if (cursorFrame !== null) window.cancelAnimationFrame(cursorFrame)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const handleNav = (target: string) => {
    setMenuOpen(false)
    scrollToId(target)
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div ref={cursorGlowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={scrollProgressRef} className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <div className="header-inner mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 lg:px-10">
          <button type="button" className="brand-mark" onClick={() => handleNav('top')} aria-label="Back to top">
            <span className="brand-monogram">SMT</span>
            <span className="brand-caption">PORTFOLIO</span>
          </button>
          <nav id="primary-navigation" className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <button type="button" key={item.target} onClick={() => handleNav(item.target)}>{item.label}</button>
            ))}
            <a className="header-contact" href="mailto:sankalp.tellur2024@nst.rishihood.edu.in">Say hello <FiArrowUpRight aria-hidden="true" /></a>
          </nav>
          <button type="button" className="mobile-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation">
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <HeroSection onNavigate={handleNav} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <JourneySection />
        <ContactSection />
      </main>

      <footer className="site-footer">
        <div className="footer-inner mx-auto grid w-full max-w-[1240px] gap-8 px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-end lg:px-10">
          <div><span className="footer-monogram">SMT<span>.</span></span><p>Designed, coded, and still figuring it out.</p></div>
          <div className="footer-links">
            {socialLinks.map(({ label, href }) => {
              const Icon = label === 'LinkedIn' ? FiLinkedin : FiGithub
              return <a key={label} href={href} target="_blank" rel="noopener noreferrer"><Icon aria-hidden="true" />{label}</a>
            })}
            <a href={leetcodeProfileUrl} target="_blank" rel="noopener noreferrer"><FiCode aria-hidden="true" />LeetCode</a>
          </div>
          <div className="footer-right"><p>© {new Date().getFullYear()} Sankalp M Tellur</p><button type="button" onClick={() => scrollToId('top')}>Back to top <FiArrowUpRight aria-hidden="true" /></button></div>
        </div>
      </footer>
    </div>
  )
}

export default App
