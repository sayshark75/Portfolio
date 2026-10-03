import { useEffect, useRef } from 'react'

export function useCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const pos = useRef({ x: -100, y: -100, rx: -100, ry: -100 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const dot = document.createElement('div')
    dot.className = 'custom-cursor'
    const ring = document.createElement('div')
    ring.className = 'custom-cursor-ring'
    document.body.appendChild(dot)
    document.body.appendChild(ring)
    dotRef.current = dot
    ringRef.current = ring

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
    }
    const onEnterInteractive = () => {
      dot.style.width = '6px'
      dot.style.height = '6px'
      ring.style.width = '54px'
      ring.style.height = '54px'
      ring.style.borderColor = 'rgba(0,229,160,0.9)'
    }
    const onLeaveInteractive = () => {
      dot.style.width = '12px'
      dot.style.height = '12px'
      ring.style.width = '36px'
      ring.style.height = '36px'
      ring.style.borderColor = 'rgba(0,229,160,0.6)'
    }
    const tick = () => {
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.18
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.18
      ring.style.transform = `translate(${pos.current.rx}px, ${pos.current.ry}px) translate(-50%, -50%)`
      requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    const interactive = 'a, button, [role="button"], [data-cursor="hover"]'
    document.querySelectorAll(interactive).forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })
    const mo = new MutationObserver(() => {
      document.querySelectorAll(interactive).forEach((el) => {
        if (!(el as HTMLElement).dataset.cursorBound) {
          ;(el as HTMLElement).dataset.cursorBound = '1'
          el.addEventListener('mouseenter', onEnterInteractive)
          el.addEventListener('mouseleave', onLeaveInteractive)
        }
      })
    })
    mo.observe(document.body, { subtree: true, childList: true })
    requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      mo.disconnect()
      dot.remove()
      ring.remove()
    }
  }, [])
}
