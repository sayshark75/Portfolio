import { useEffect, useRef, useState } from 'react'

export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0)
  const [progress, setProgress] = useState(0)
  const lastY = useRef(0)
  const lastT = useRef(0)
  const rafId = useRef<number | null>(null)
  const velRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const now = performance.now()
      const y = window.scrollY
      const dt = Math.max(1, now - lastT.current)
      const dy = y - lastY.current
      const v = dy / dt // px per ms
      velRef.current = v
      lastY.current = y
      lastT.current = now
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? y / docH : 0)
    }
    const tick = () => {
      // Ease velocity toward 0
      velRef.current *= 0.9
      setVelocity(velRef.current)
      rafId.current = requestAnimationFrame(tick)
    }
    lastY.current = window.scrollY
    lastT.current = performance.now()
    window.addEventListener('scroll', onScroll, { passive: true })
    rafId.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return { velocity, progress }
}
