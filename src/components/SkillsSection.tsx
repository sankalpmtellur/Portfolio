import { useState } from 'react'
import type { CSSProperties } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { skillFilters, skills, type SkillCategory } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<'All' | SkillCategory>('All')
  const visibleSkills = activeSkill === 'All' ? skills : skills.filter((skill) => skill.category === activeSkill)

  return (
    <section className="skills-section section-padding">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <Reveal><SectionIntro number="04" eyebrow="The toolkit" title="Tools are just ideas with handles." body="The languages, frameworks, and tools I reach for when an idea wants to become real." /></Reveal>
        <Reveal className="skills-content" delay={120}>
          <div className="skill-filters" role="group" aria-label="Filter skills">
            {skillFilters.map((category) => <button type="button" key={category} className={activeSkill === category ? 'active' : ''} onClick={() => setActiveSkill(category)} aria-pressed={activeSkill === category}>{category}</button>)}
          </div>
          <div className="skill-cloud" aria-live="polite">
            {visibleSkills.map((skill, index) => <span key={skill.name} className={`skill-pill category-${skill.category.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '')}`} style={{ '--skill-delay': `${index * 35}ms` } as CSSProperties}><i />{skill.name}</span>)}
          </div>
          <div className="skills-note"><FiCheckCircle aria-hidden="true" /><span>AI-based work is represented by the Purchase Assistant project.</span></div>
        </Reveal>
      </div>
    </section>
  )
}
