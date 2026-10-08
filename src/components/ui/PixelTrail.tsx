import { useEffect, useRef, useState } from 'react'

type Spark = {
  id: number
  x: number
  y: number
  size: number
  color: string
  dx: string
  dy: string
  duration: string
}

const PALETTE = ['#3b82f6', '#10b981', '#f59e0b', '#111827']

let nextId = 0

export default function PixelTrail() {
  const [sparks, setSparks] = useState<Spark[]>([])
  const lastSpawn = useRef(0)
  const timers = useRef<number[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e: PointerEvent) => {
      const now = performance.now()
      if (now - lastSpawn.current < 40) return
      lastSpawn.current = now
      const angle = Math.random() * Math.PI * 2
      const dist = 24 + Math.random() * 48
      const spark: Spark = {
        id: nextId++,
        x: e.clientX,
        y: e.clientY,
        size: 5 + Math.floor(Math.random() * 7),
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        dx: `${Math.cos(angle) * dist}px`,
        dy: `${Math.sin(angle) * dist + 24}px`,
        duration: `${450 + Math.random() * 350}ms`,
      }
      setSparks((prev) => (prev.length > 40 ? [...prev.slice(-40), spark] : [...prev, spark]))
      const t = window.setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== spark.id))
      }, 850)
      timers.current.push(t)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      timers.current.forEach((t) => window.clearTimeout(t))
    }
  }, [])

  if (sparks.length === 0) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90]">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="pixel-spark absolute"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            ['--dx' as string]: s.dx,
            ['--dy' as string]: s.dy,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  )
}
