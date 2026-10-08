import type { ReactNode } from 'react'
import Container from '../ui/Container'

type Tone = 'white' | 'blue' | 'amber' | 'muted' | 'emerald' | 'dark'

const toneBg: Record<Tone, string> = {
  white: 'bg-background text-foreground',
  blue: 'bg-primary text-white',
  amber: 'bg-accent text-foreground',
  muted: 'bg-muted text-foreground',
  emerald: 'bg-secondary text-foreground',
  dark: 'bg-foreground text-white',
}

type Props = {
  id?: string
  tone?: Tone
  grid?: boolean
  children: ReactNode
  labelledBy?: string
  padClass?: string
}

export default function Section({ id, tone = 'white', grid = false, children, labelledBy, padClass = 'py-16 sm:py-20 lg:py-24' }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative scroll-mt-20 overflow-hidden ${padClass} ${toneBg[tone]}`}>
      {grid && tone === 'white' ? (
        <div aria-hidden="true" className="grid-paper pointer-events-none absolute inset-0 opacity-60" />
      ) : null}
      {tone === 'blue' || tone === 'dark' ? (
        <>
          <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rotate-12 bg-white/5" />
        </>
      ) : null}
      <Container>
        <div className="relative">{children}</div>
      </Container>
    </section>
  )
}
