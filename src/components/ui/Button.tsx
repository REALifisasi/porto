import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline-light' | 'outline-dark'

const base =
  'inline-flex h-14 items-center justify-center gap-2 rounded-md px-6 text-base font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 interactive-focus shadow-none'

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-blue-600',
  secondary: 'bg-muted text-foreground hover:bg-gray-200',
  'outline-light': 'border-4 border-white bg-transparent text-white hover:bg-white hover:text-foreground',
  'outline-dark': 'border-4 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-white',
}

type Props = {
  variant?: Variant
  children: ReactNode
  href?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'href'>

export default function Button({ variant = 'primary', children, href, ...rest }: Props) {
  const cls = `${base} ${variants[variant]}`
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}
