import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  color?: string
  tilt?: 'left' | 'right' | 'none'
}

export default function Sticker({ children, color = 'bg-white text-foreground', tilt = 'none' }: Props) {
  const tiltCls = tilt === 'left' ? '-rotate-3 hover:rotate-0' : tilt === 'right' ? 'rotate-3 hover:rotate-0' : ''
  return (
    <span
      className={`inline-flex items-center rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-none transition-all duration-200 hover:scale-105 ${color} ${tiltCls}`}
    >
      {children}
    </span>
  )
}
