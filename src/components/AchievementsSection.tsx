import { FiAward, FiExternalLink } from 'react-icons/fi'
import { leetcodeCertificateUrl } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

export function AchievementsSection() {
  return (
    <section id="achievements" className="achievements-section section-padding">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10">
        <Reveal><SectionIntro number="05" eyebrow="A small milestone" title="Consistency compounds." body="A habit of showing up, one problem at a time." /></Reveal>
        <Reveal className="achievement-content" delay={120}>
          <article className="achievement-card">
            <div className="achievement-icon"><FiAward aria-hidden="true" /></div>
            <div><p className="achievement-label">Coding practice</p><h3>150+ LeetCode problems</h3><p>Solved 150+ LeetCode problems and earned the 100 Days Badge for consistent coding and problem-solving.</p></div>
            <a className="achievement-link" href={leetcodeCertificateUrl} target="_blank" rel="noopener noreferrer"><FiExternalLink aria-hidden="true" /> View certificate</a>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
