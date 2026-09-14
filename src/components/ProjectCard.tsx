import type { CSSProperties, MouseEvent as ReactMouseEvent } from 'react'
import { FiExternalLink, FiGithub, FiImage } from 'react-icons/fi'
import type { Project } from '../data/portfolio'

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const tilt = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
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
        {project.image && project.imageSmall ? (
          <img src={project.image} srcSet={`${project.imageSmall} 800w, ${project.image} 1600w`} sizes={featured ? '(max-width: 900px) calc(100vw - 3rem), calc(100vw - 5rem)' : '(max-width: 900px) calc(100vw - 3rem), 580px'} alt={`${project.title} — ${project.label} project preview by Sankalp M Tellur`} width={project.imageWidth} height={project.imageHeight} loading="lazy" decoding="async" className="project-image" />
        ) : (
          <div className="project-image-placeholder" role="img" aria-label={`${project.title} project preview is not available yet`}>
            <FiImage aria-hidden="true" />
            <span>Project preview<br />coming soon</span>
          </div>
        )}
        <div className="project-image-shade" />
        {project.status && <span className="project-status"><span className="status-dot" />{project.status}</span>}
      </div>
      <div className="project-copy">
        <div>
          <p className="project-label">{project.label}</p>
          <h3>{project.title}</h3>
        </div>
        <FiExternalLink className="project-arrow" aria-hidden="true" />
        <p className="project-description">{project.description}</p>
        <div className="project-stack">
          {project.stack.length > 0 ? project.stack.map((item) => <span key={item}>{item}</span>) : <span className="project-stack-placeholder">{project.stackNote ?? 'Technology stack to be added'}</span>}
        </div>
        <div className="project-actions" aria-label={`${project.title} links`}>
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link"><FiGithub aria-hidden="true" /> GitHub</a>
          ) : (
            <span className="project-link-placeholder"><FiGithub aria-hidden="true" /> GitHub link to add</span>
          )}
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link project-link-live"><FiExternalLink aria-hidden="true" /> Live demo</a>
          ) : (
            <span className="project-link-placeholder"><FiExternalLink aria-hidden="true" /> Live demo to add</span>
          )}
        </div>
      </div>
    </article>
  )
}

