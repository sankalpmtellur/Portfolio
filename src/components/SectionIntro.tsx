export function SectionIntro({ number, eyebrow, title, body }: { number: string; eyebrow: string; title: string; body: string }) {
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

