import { FiCpu, FiLayers, FiPenTool } from 'react-icons/fi'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

export function AboutSection() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="section-layout mx-auto grid w-full max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10">
        <Reveal><SectionIntro number="01" eyebrow="The short version" title="Part student. Part builder. Fully curious." body="I’m interested in the space where technology, people, and good questions meet." /></Reveal>
        <Reveal className="about-content" delay={120}>
          <p className="about-lede">Most of the time, you’ll find me exploring a new AI idea, building something unnecessarily ambitious, or diving deeper into my interest in building startups.</p>
          <div className="about-rule" />
          <div className="value-grid grid gap-4 md:grid-cols-3">
            <div className="value-card"><span>01</span><FiCpu aria-hidden="true" /><h3>Build to learn</h3><p>Every project is a way to make an idea tangible.</p></div>
            <div className="value-card"><span>02</span><FiLayers aria-hidden="true" /><h3>Think in systems</h3><p>Interfaces are only as good as the thinking behind them.</p></div>
            <div className="value-card"><span>03</span><FiPenTool aria-hidden="true" /><h3>Stay curious</h3><p>I like going one layer deeper than the obvious answer.</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

