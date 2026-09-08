import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent as ReactMouseEvent, ReactNode } from 'react'
import { gsap } from 'gsap'
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiCommand,
  FiCpu,
  FiExternalLink,
  FiGithub,
  FiInstagram,
  FiLayers,
  FiLinkedin,
  FiMapPin,
  FiMenu,
  FiPenTool,
  FiSend,
  FiStar,
  FiX,
} from 'react-icons/fi'

type Project = {
  title: string
  label: string
  description: string
  stack: string[]
  image: string
  url: string
  status?: string
  accent: string
  imageWidth: number
  imageHeight: number
}

type Skill = {
  name: string
  category: 'Build' | 'Think' | 'Shape'
}

const projects: Project[] = [
  {
    title: 'Onyu',
    label: 'Startup website',
    description: 'A playful, tactile storefront for a startup rethinking how everyday accessories meet intelligence.',
    stack: ['TypeScript', 'Tailwind', 'GSAP'],
    image: '/assets/onyu.webp',
    url: 'https://onyu-tech.vercel.app/',
    accent: 'coral',
    imageWidth: 3006,
    imageHeight: 1656,
  },
  {
    title: 'Aikyam',
    label: "Women's PG platform",
    description: 'A clear digital home for Aikyam Women’s PG in Bangalore, built around trust and easy discovery.',
    stack: ['Next.js', 'Tailwind', 'React'],
    image: '/assets/aikyam.webp',
    url: 'https://aikyam-pg.vercel.app/',
    accent: 'blue',
    imageWidth: 3006,
    imageHeight: 1660,
  },
  {
    title: 'Shweta Drug Distributors',
    label: 'Wholesale commerce',
    description: 'A full-stack platform for a wholesale medical store network in Karnataka.',
    stack: ['Next.js', 'Express.js', 'MongoDB', 'Prisma'],
    image: '/assets/shwetadrug.webp',
    url: 'https://shwetadrug.vercel.app/',
    accent: 'mint',
    imageWidth: 3004,
    imageHeight: 1658,
  },
  {
    title: 'IRCTC / 3D',
    label: 'In progress · immersive frontend',
    description: 'An experimental 3D interface for a familiar travel experience — still in motion.',
    stack: ['TypeScript', 'Tailwind', 'Three.js'],
    image: '/assets/irctc.webp',
    url: 'https://irctc-frontend-eight.vercel.app/',
    status: 'In progress',
    accent: 'violet',
    imageWidth: 3002,
    imageHeight: 1662,
  },
]

const skills: Skill[] = [
  { name: 'React', category: 'Build' },
  { name: 'Next.js', category: 'Build' },
  { name: 'TypeScript', category: 'Build' },
  { name: 'JavaScript', category: 'Build' },
  { name: 'Python', category: 'Build' },
  { name: 'Express.js', category: 'Build' },
  { name: 'MongoDB', category: 'Build' },
  { name: 'AI experiments', category: 'Think' },
  { name: 'Entrepreneurship', category: 'Think' },
  { name: 'Product thinking', category: 'Think' },
  { name: 'GSAP', category: 'Shape' },
  { name: 'Tailwind CSS', category: 'Shape' },
  { name: 'HTML / CSS', category: 'Shape' },
  { name: 'Figma', category: 'Shape' },
]

const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Selected work', target: 'work' },
  { label: 'Journey', target: 'journey' },
]

const externalLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sankalpmt/', icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/sankalpmtellur', icon: FiGithub },
  { label: 'Instagram', href: 'https://www.instagram.com/sankalp_m_tellur/', icon: FiInstagram },
]

const signalItems = ['FRONTEND', 'AI EXPLORATION', 'PRODUCT THINKING', 'ENTREPRENEURSHIP']
const signalGroupCount = 6

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`reveal ${className}`} style={{ '--delay': `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  )
}

function SectionIntro({ number, eyebrow, title, body }: { number: string; eyebrow: string; title: string; body: string }) {
  return (
    <div className="section-intro">
      <div className="section-index"><span>{number}</span><span className="index-line" /></div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-body">{body}</p>
      </div>
    </div>
  )
}

function SignalRail() {
  const railRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const secondGroupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rail = railRef.current
    const track = trackRef.current
    const secondGroup = secondGroupRef.current
    if (!rail || !track || !secondGroup || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let marquee: gsap.core.Tween | undefined
    let isPaused = false
    const buildMarquee = () => {
      marquee?.kill()
      gsap.set(track, { x: 0 })

      const loopDistance = secondGroup.getBoundingClientRect().left - track.getBoundingClientRect().left
      if (loopDistance <= 0) return

      marquee = gsap.to(track, {
        duration: loopDistance / 64,
        ease: 'none',
        repeat: -1,
        x: -loopDistance,
      })

      if (isPaused) marquee.pause()
    }

    buildMarquee()
    const resizeObserver = new ResizeObserver(buildMarquee)
    resizeObserver.observe(rail)

    const pause = () => {
      isPaused = true
      marquee?.pause()
    }
    const resume = () => {
      isPaused = false
      marquee?.resume()
    }
    rail.addEventListener('mouseenter', pause)
    rail.addEventListener('mouseleave', resume)
    rail.addEventListener('focusin', pause)
    rail.addEventListener('focusout', resume)

    return () => {
      rail.removeEventListener('mouseenter', pause)
      rail.removeEventListener('mouseleave', resume)
      rail.removeEventListener('focusin', pause)
      rail.removeEventListener('focusout', resume)
      resizeObserver.disconnect()
      marquee?.kill()
      gsap.set(track, { clearProps: 'transform' })
    }
  }, [])

  return (
    <div ref={railRef} className="signal-rail" aria-label="Areas of interest">
      <div ref={trackRef} className="signal-track">
        {Array.from({ length: signalGroupCount }, (_, groupIndex) => (
          <div
            key={`signal-group-${groupIndex}`}
            ref={groupIndex === 1 ? secondGroupRef : undefined}
            className="signal-group"
            aria-hidden={groupIndex > 0}
          >
            {signalItems.map((item) => <span key={`${groupIndex}-${item}`}>{item} <b>✳</b></span>)}
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const tilt = (event: ReactMouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    const rotateX = ((y / bounds.height) - 0.5) * -4
    const rotateY = ((x / bounds.width) - 0.5) * 4
    event.currentTarget.style.setProperty('--rotate-x', `${rotateX}deg`)
    event.currentTarget.style.setProperty('--rotate-y', `${rotateY}deg`)
  }

  const resetTilt = (event: ReactMouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--rotate-x', '0deg')
    event.currentTarget.style.setProperty('--rotate-y', '0deg')
  }

  return (
    <article
      className={`project-card ${featured ? 'project-card-featured' : ''}`}
      onMouseMove={tilt}
      onMouseLeave={resetTilt}
      style={{ '--accent': `var(--${project.accent})` } as CSSProperties}
    >
      <div className="project-image-wrap">
        <img src={project.image} alt={`${project.title} — ${project.label} project preview by Sankalp M Tellur`} width={project.imageWidth} height={project.imageHeight} loading="lazy" decoding="async" className="project-image" />
        <div className="project-image-shade" />
        <a href={project.url} target="_blank" rel="noreferrer" className="project-open" aria-label={`Open ${project.title}`}>
          <FiExternalLink aria-hidden="true" />
          <span>View live</span>
        </a>
        {project.status && <span className="project-status"><span className="status-dot" />{project.status}</span>}
      </div>
      <div className="project-copy">
        <div>
          <p className="project-label">{project.label}</p>
          <h3>{project.title}</h3>
        </div>
        <FiArrowUpRight className="project-arrow" aria-hidden="true" />
        <p className="project-description">{project.description}</p>
        <div className="project-stack">
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSkill, setActiveSkill] = useState<'All' | Skill['category']>('All')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [cursor, setCursor] = useState({ x: -100, y: -100 })

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
    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }
    const updateCursor = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY })
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('mousemove', updateCursor, { passive: true })
    updateScroll()
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('mousemove', updateCursor)
    }
  }, [])

  const visibleSkills = useMemo(() => (
    activeSkill === 'All' ? skills : skills.filter((skill) => skill.category === activeSkill)
  ), [activeSkill])

  const handleNav = (target: string) => {
    setMenuOpen(false)
    scrollToId(target)
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="cursor-glow" style={{ left: cursor.x, top: cursor.y }} aria-hidden="true" />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <header className="site-header">
        <div className="header-inner mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 lg:px-10">
          <button className="brand-mark" onClick={() => handleNav('top')} aria-label="Back to top">
            <span className="brand-monogram">SMT</span>
            <span className="brand-caption">PORTFOLIO</span>
          </button>
          <nav id="primary-navigation" className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <button key={item.target} onClick={() => handleNav(item.target)}>
                <span className="nav-number"></span>{item.label}
              </button>
            ))}
            <a className="header-contact" href="mailto:sankalp.tellur2024@nst.rishihood.edu.in">Say hello <FiArrowUpRight aria-hidden="true" /></a>
          </nav>
          <button className="mobile-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero-section">
          <div className="hero-grid mx-auto grid w-full max-w-[1240px] px-6 lg:px-10">
            <Reveal className="hero-copy">
              <div className="hero-kicker"><span className="live-dot" /> Currently learning, building, and connecting dots.</div>
              <h1>Ideas into <span className="headline-accent">useful</span> software<span className="headline-period">.</span></h1>
              <p className="hero-lede">I’m <b>Sankalp</b> — a Computer Science &amp; AI student who likes building things with software, experimenting with AI, and understanding how technology actually works.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => handleNav('work')}>See selected work <FiArrowRight aria-hidden="true" /></button>
                <button className="text-button" onClick={() => handleNav('about')}>A little about me <FiArrowDown aria-hidden="true" /></button>
              </div>
              <div className="hero-footnote"><FiMapPin aria-hidden="true" /> Rishihood University <span /> 3rd year · CS &amp; AI</div>
            </Reveal>

            <Reveal className="hero-visual" delay={160}>
              <div className="portrait-orbit orbit-one" />
              <div className="portrait-orbit orbit-two" />
              <div className="portrait-card">
                <img src="/assets/sankalp.webp" alt="Portrait of Sankalp M Tellur" width="1149" height="1369" loading="eager" fetchPriority="high" decoding="async" />
                <div className="portrait-overlay" />
                <div className="portrait-note"><span>01</span><strong>Curiosity<br />in progress.</strong></div>
                <div className="portrait-scribble">build / learn / repeat</div>
              </div>
              <div className="floating-stamp stamp-top"><FiStar aria-hidden="true" /><span>Software<br />with intent</span></div>
              <div className="floating-stamp stamp-bottom"><FiCommand aria-hidden="true" /><span>Open to<br />new ideas</span></div>
              <span className="visual-cross cross-one">+</span>
              <span className="visual-cross cross-two">+</span>
            </Reveal>
          </div>
          <SignalRail />
          <button className="scroll-cue" onClick={() => handleNav('about')} aria-label="Scroll to about section"><span>Scroll to explore</span><FiArrowDown aria-hidden="true" /></button>
        </section>

        <section id="about" className="about-section section-padding">
          <div className="section-layout mx-auto grid w-full max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10">
            <Reveal><SectionIntro number="01" eyebrow="The short version" title="Part student. Part builder. Fully curious." body="I’m interested in the space where technology, people, and good questions meet." /></Reveal>
            <Reveal className="about-content" delay={120}>
              <p className="about-lede">Most of the time, you’ll find me exploring a new AI idea, building something unnecessarily ambitious, or diving deeper into my interest in building startup.</p>
              <div className="about-rule" />
              <div className="value-grid grid gap-4 md:grid-cols-3">
                <div className="value-card"><span>01</span><FiCpu aria-hidden="true" /><h3>Build to learn</h3><p>Every project is a way to make an idea tangible.</p></div>
                <div className="value-card"><span>02</span><FiLayers aria-hidden="true" /><h3>Think in systems</h3><p>Interfaces are only as good as the thinking behind them.</p></div>
                <div className="value-card"><span>03</span><FiPenTool aria-hidden="true" /><h3>Stay curious</h3><p>I like going one layer deeper than the obvious answer.</p></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="work" className="work-section section-padding">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-10">
            <Reveal><SectionIntro number="02" eyebrow="Selected work" title="A few things I’ve made real." body="A mix of client work, experiments, and one slightly-too-ambitious idea. Hover a card, follow a thread." /></Reveal>
            <div className="projects-grid">
              {projects.map((project, index) => <Reveal key={project.title} delay={index * 80}><ProjectCard project={project} featured={index === 0} /></Reveal>)}
            </div>
            <Reveal className="work-footer" delay={220}>
              <span className="work-footer-line" />
              <p>Four projects. Many tabs. Still curious.</p>
              <span className="work-footer-line" />
            </Reveal>
          </div>
        </section>

        <section className="skills-section section-padding">
          <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
            <Reveal><SectionIntro number="03" eyebrow="The toolkit" title="Tools are just ideas with handles." body="These are the technologies and ways of thinking I reach for when an idea wants to become real." /></Reveal>
            <Reveal className="skills-content" delay={120}>
              <div className="skill-filters" role="tablist" aria-label="Filter skills">
                {(['All', 'Build', 'Think', 'Shape'] as const).map((category) => <button key={category} className={activeSkill === category ? 'active' : ''} onClick={() => setActiveSkill(category)} role="tab" aria-selected={activeSkill === category}>{category}</button>)}
              </div>
              <div className="skill-cloud">
                {visibleSkills.map((skill, index) => <span key={skill.name} className={`skill-pill category-${skill.category.toLowerCase()}`} style={{ '--skill-delay': `${index * 35}ms` } as CSSProperties}><i />{skill.name}</span>)}
              </div>
              <div className="skills-note"><FiCheckCircle aria-hidden="true" /><span>Always adding one more thing to the list.</span></div>
            </Reveal>
          </div>
        </section>

        <section id="journey" className="journey-section section-padding">
          <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10">
            <Reveal><SectionIntro number="04" eyebrow="The journey so far" title="Still becoming." body="An education in progress, with a lot of learning that doesn’t fit neatly on a transcript." /></Reveal>
            <Reveal className="education-list" delay={120}>
              <article className="education-item current"><div className="education-marker"><span /><b>NOW</b></div><div className="education-copy"><p className="education-period">2024 — Present</p><h3>Rishihood University</h3><p>B.Tech in Computer Science &amp; AI</p><span className="education-tag">Current chapter</span></div></article>
              <article className="education-item"><div className="education-marker"><span /></div><div className="education-copy"><p className="education-period">2022 — 2024</p><h3>Canara Vikaas PU College</h3><p>Class XII · Science (PCMC)</p><span className="education-score">86.1%</span></div></article>
              <article className="education-item"><div className="education-marker"><span /></div><div className="education-copy"><p className="education-period">2017 — 2022</p><h3>Bhuvana Jyothi Residential School</h3><p>Class X · CBSE</p><span className="education-score">89.2%</span></div></article>
            </Reveal>
          </div>
        </section>

        <section className="contact-section section-padding">
          <Reveal className="contact-panel mx-auto w-full max-w-[1240px] px-6 lg:px-10">
            <div className="contact-inner">
              <span className="contact-orb orb-left" /><span className="contact-orb orb-right" />
              <div className="contact-topline"><span>05 / Keep in touch</span><span>Open to a good conversation</span></div>
              <div className="contact-content">
                <p className="eyebrow eyebrow-light">Have a thought?</p>
                <h2>Let’s make<br /><em>something</em> happen.</h2>
                <a className="contact-email" href="mailto:sankalp.tellur2024@nst.rishihood.edu.in">sankalp.tellur2024@nst.rishihood.edu.in <FiArrowUpRight aria-hidden="true" /></a>
              </div>
              <div className="contact-bottom"><p>I’m always up for talking about a new idea, a difficult problem, or something you’re building.</p><a href="mailto:sankalp.tellur2024@nst.rishihood.edu.in" className="button button-light">Send a note <FiSend aria-hidden="true" /></a></div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner mx-auto grid w-full max-w-[1240px] gap-8 px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-end lg:px-10">
          <div><span className="footer-monogram">SMT<span>.</span></span><p>Designed, coded, and still figuring it out.</p></div>
          <div className="footer-links">{externalLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><Icon aria-hidden="true" />{label}</a>)}</div>
          <div className="footer-right"><p>© {new Date().getFullYear()} Sankalp M Tellur</p><button onClick={() => scrollToId('top')}>Back to top <FiArrowUpRight aria-hidden="true" /></button></div>
        </div>
      </footer>
    </div>
  )
}

export default App
