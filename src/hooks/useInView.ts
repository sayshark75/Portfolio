import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>(options: IntersectionObserverInit = { threshold: 0.2 }) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  const [ratio, setRatio] = useState(0)
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          setInView(e.isIntersecting)
          setRatio(e.intersectionRatio)
        })
      },
      options
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, inView, ratio }
}
