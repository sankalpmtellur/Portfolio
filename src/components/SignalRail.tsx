import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { signalGroupCount, signalItems } from '../data/portfolio'

export function SignalRail() {
  const railRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const secondGroupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rail = railRef.current
    const track = trackRef.current
    const secondGroup = secondGroupRef.current
    if (!rail || !track || !secondGroup || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let marquee: gsap.core.Tween | undefined
    let isPaused = false
    const buildMarquee = () => {
      marquee?.kill()
      gsap.set(track, { x: 0 })

      const loopDistance = secondGroup.getBoundingClientRect().left - track.getBoundingClientRect().left
      if (loopDistance <= 0) return

      marquee = gsap.to(track, {
        duration: loopDistance / 64,
        ease: 'none',
        repeat: -1,
        x: -loopDistance,
      })

      if (isPaused) marquee.pause()
    }

    buildMarquee()
    const resizeObserver = new ResizeObserver(buildMarquee)
    resizeObserver.observe(rail)

    const pause = () => {
      isPaused = true
      marquee?.pause()
    }
    const resume = () => {
      isPaused = false
      marquee?.resume()
    }
    rail.addEventListener('mouseenter', pause)
    rail.addEventListener('mouseleave', resume)
    rail.addEventListener('focusin', pause)
    rail.addEventListener('focusout', resume)

    return () => {
      rail.removeEventListener('mouseenter', pause)
      rail.removeEventListener('mouseleave', resume)
      rail.removeEventListener('focusin', pause)
      rail.removeEventListener('focusout', resume)
      resizeObserver.disconnect()
      marquee?.kill()
      gsap.set(track, { clearProps: 'transform' })
    }
  }, [])

  return (
    <div ref={railRef} className="signal-rail" aria-label="Areas of interest">
      <div ref={trackRef} className="signal-track">
        {Array.from({ length: signalGroupCount }, (_, groupIndex) => (
          <div
            key={`signal-group-${groupIndex}`}
            ref={groupIndex === 1 ? secondGroupRef : undefined}
            className="signal-group"
            aria-hidden={groupIndex > 0}
          >
            {signalItems.map((item) => <span key={`${groupIndex}-${item}`}>{item} <b>✳</b></span>)}
          </div>
        ))}
      </div>
    </div>
  )
}

