import { FiArrowUpRight, FiSend } from 'react-icons/fi'
import { Reveal } from './Reveal'

const email = 'sankalp.tellur2024@nst.rishihood.edu.in'

export function ContactSection() {
  return (
    <section className="contact-section section-padding">
      <Reveal className="contact-panel mx-auto w-full max-w-[1240px] px-6 lg:px-10">
        <div className="contact-inner">
          <span className="contact-orb orb-left" /><span className="contact-orb orb-right" />
          <div className="contact-topline"><span>07 / Keep in touch</span><span>Open to a good conversation</span></div>
          <div className="contact-content">
            <p className="eyebrow eyebrow-light">Have a thought?</p>
            <h2>Let’s make<br /><em>something</em> happen.</h2>
            <a className="contact-email" href={`mailto:${email}`}>{email} <FiArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="contact-bottom"><p>I’m always up for talking about a new idea, a difficult problem, or something you’re building.</p><a href={`mailto:${email}`} className="button button-light">Send a note <FiSend aria-hidden="true" /></a></div>
        </div>
      </Reveal>
    </section>
  )
}

