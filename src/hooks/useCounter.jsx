import { useEffect, useState } from 'react'
import { useScrollReveal } from './useScrollReveal'

export function useCounter(end, duration = 2000) {
  const [ref, isVisible] = useScrollReveal(0.3)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const numericEnd = parseInt(end.replace(/[^0-9]/g, ''), 10)
    if (isNaN(numericEnd)) return

    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericEnd))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return [ref, count, isVisible]
}
