import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const onOver = (e) => {
      const el = e.target.closest('a, button, [data-cursor-hover]')
      setIsHovering(!!el)
    }

    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)

    let raf
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15
      pos.current.y += (target.current.y - pos.current.y) * 0.15
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [isVisible])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-[width,height,opacity,background] duration-300 ease-out rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${
        isHovering
          ? 'w-16 h-16 bg-white/30 backdrop-blur-sm'
          : 'w-4 h-4 bg-brand-red'
      }`}
    />
  )
}
