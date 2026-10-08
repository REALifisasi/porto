import type { ReactNode } from 'react'

export default function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-medium shadow-none">
      {children}
    </span>
  )
}
