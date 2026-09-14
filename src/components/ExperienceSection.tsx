import { FiCalendar, FiMapPin } from 'react-icons/fi'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

export function ExperienceSection() {
  return (
    <section id="experience" className="experience-section section-padding">
      <div className="section-layout mx-auto grid w-full max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10">
        <Reveal><SectionIntro number="02" eyebrow="Experience" title="Learning by shipping with a team." body="A three-month internship where product work, UI decisions, and backend workflows met." /></Reveal>
        <Reveal className="experience-content" delay={120}>
          <article className="experience-card">
            <div className="experience-heading">
              <div>
                <p className="experience-period">April 2025 — July 2025</p>
                <h3>Software Engineer Intern</h3>
                <p className="experience-company">AgroEdge</p>
              </div>
              <span className="experience-mode"><FiMapPin aria-hidden="true" /> Remote</span>
            </div>
            <div className="experience-rule" />
            <p className="experience-description">During my three-month internship at AgroEdge, I worked on the main website and operations platform using TypeScript, Tailwind CSS, Supabase, Calendly, and Figma. I implemented multi-language support for 20+ Indian and international languages, improved frontend UI, and independently built a mentorship module for Admin, Mentor, and Farmer roles with scheduling, authentication, data management, and role-based access. I designed the module’s UI/UX in Figma and worked closely with my manager and team to improve the features.</p>
            <div className="experience-highlights" aria-label="AgroEdge internship highlights">
              <span><FiCalendar aria-hidden="true" /> 20+ languages</span>
              <span>Mentorship module</span>
              <span>Calendly + Supabase</span>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
