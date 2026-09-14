import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

export function JourneySection() {
  return (
    <section id="journey" className="journey-section section-padding">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10">
        <Reveal><SectionIntro number="06" eyebrow="The journey so far" title="Still becoming." body="An education in progress, with a lot of learning that doesn’t fit neatly on a transcript." /></Reveal>
        <Reveal className="education-list" delay={120}>
          <article className="education-item current"><div className="education-marker"><span /><b>NOW</b></div><div className="education-copy"><p className="education-period">2024 — Present</p><h3>Rishihood University</h3><p>B.Tech in Computer Science &amp; AI</p><span className="education-tag">Current chapter</span></div></article>
          <article className="education-item"><div className="education-marker"><span /></div><div className="education-copy"><p className="education-period">2022 — 2024</p><h3>Canara Vikaas PU College</h3><p>Class XII · Science (PCMC)</p><span className="education-score">86.1%</span></div></article>
          <article className="education-item"><div className="education-marker"><span /></div><div className="education-copy"><p className="education-period">2017 — 2022</p><h3>Bhuvana Jyothi Residential School</h3><p>Class X · CBSE</p><span className="education-score">89.2%</span></div></article>
        </Reveal>
      </div>
    </section>
  )
}

