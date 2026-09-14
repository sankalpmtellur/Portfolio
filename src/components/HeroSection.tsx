import { FiArrowDown, FiArrowRight, FiArrowUpRight, FiCommand, FiMapPin, FiStar } from 'react-icons/fi'
import { Reveal } from './Reveal'
import { SignalRail } from './SignalRail'

export function HeroSection({ onNavigate }: { onNavigate: (target: string) => void }) {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid mx-auto grid w-full max-w-[1240px] px-6 lg:px-10">
        <Reveal className="hero-copy">
          <h1>Full-stack software<br />for <span className="headline-accent">real work</span><span className="headline-period">.</span></h1>
          <p className="hero-lede">I'm <b>Sankalp</b> — a software developer with experience in full-stack development, frontend development, and AI-based projects.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => onNavigate('work')}>See selected work <FiArrowRight aria-hidden="true" /></button>
            <button className="text-button" onClick={() => onNavigate('about')}>A little about me <FiArrowDown aria-hidden="true" /></button>
            <a className="text-button hero-resume" href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Open resume PDF">Resume <FiArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="hero-footnote"><FiMapPin aria-hidden="true" /> Rishihood University <span /> 3rd year · CS &amp; AI</div>
        </Reveal>

        <Reveal className="hero-visual" delay={160}>
          <div className="portrait-orbit orbit-one" aria-hidden="true" />
          <div className="portrait-orbit orbit-two" aria-hidden="true" />
          <div className="portrait-card">
            <img src="/assets/sankalp.webp" srcSet="/assets/sankalp-520.webp 520w, /assets/sankalp.webp 900w" sizes="(max-width: 640px) 230px, (max-width: 900px) 42vw, 355px" alt="Portrait of Sankalp M Tellur" width="900" height="1073" loading="eager" fetchPriority="high" decoding="async" />
            <div className="portrait-overlay" aria-hidden="true" />
            <div className="portrait-note"><span>01</span><strong>Curiosity<br />in progress.</strong></div>
            <div className="portrait-scribble">build / learn / repeat</div>
          </div>
          <div className="floating-stamp stamp-top"><FiStar aria-hidden="true" /><span>Software<br />with intent</span></div>
          <div className="floating-stamp stamp-bottom"><FiCommand aria-hidden="true" /><span>Open to<br />new ideas</span></div>
          <span className="visual-cross cross-one" aria-hidden="true">+</span>
          <span className="visual-cross cross-two" aria-hidden="true">+</span>
        </Reveal>
      </div>
      <SignalRail />
      <button className="scroll-cue" onClick={() => onNavigate('about')} aria-label="Scroll to about section"><span>Scroll to explore</span><FiArrowDown aria-hidden="true" /></button>
    </section>
  )
}
