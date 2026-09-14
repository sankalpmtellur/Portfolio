import { projects } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

export function ProjectsSection() {
  return (
    <section id="work" className="work-section section-padding">
      <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-10">
        <Reveal><SectionIntro number="03" eyebrow="Selected work" title="A few things I’ve made real." body="AI experiments, full-stack business work, and frontend projects. Follow a thread." /></Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => <Reveal key={project.title} className={index === 0 ? 'project-reveal-featured' : ''} delay={index * 80}><ProjectCard project={project} featured={index === 0} /></Reveal>)}
        </div>
        <Reveal className="work-footer" delay={220}>
          <span className="work-footer-line" />
          <p>Five projects. Many tabs. Still curious.</p>
          <span className="work-footer-line" />
        </Reveal>
      </div>
    </section>
  )
}

