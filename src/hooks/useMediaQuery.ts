import { useEffect, useState } from 'react'

export function useMediaQuery(q: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(q).matches : false
  )
  useEffect(() => {
    const m = window.matchMedia(q)
    const handler = () => setMatches(m.matches)
    handler()
    m.addEventListener('change', handler)
    return () => m.removeEventListener('change', handler)
  }, [q])
  return matches
}

export function useReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

export function useIsMobile() {
  return useMediaQuery('(max-width: 768px)')
}
