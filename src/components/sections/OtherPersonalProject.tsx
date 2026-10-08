import { useEffect, useState } from 'react'
import { Github, X } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import { useLanguage } from '../../i18n/LanguageContext'

function WireframeBox({
  src,
  alt,
  className = '',
  onZoom,
}: {
  src: string
  alt: string
  className?: string
  onZoom?: () => void
}) {
  if (src) {
    return (
      <button
        type="button"
        onClick={onZoom}
        aria-label={`${alt} — perbesar`}
        className="block h-full w-full cursor-zoom-in interactive-focus"
      >
        <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />
      </button>
    )
  }
  return (
    <div role="img" aria-label={alt} className={`relative flex items-center justify-center bg-white ${className}`}>
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-foreground/40" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-foreground/40" />
      </svg>
    </div>
  )
}

export default function OtherPersonalProject() {
  const { t } = useLanguage()
  const section = t.otherPersonalProject
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [selected])

  return (
    <Section id={section.id} tone="muted" labelledBy="other-project-title" padClass="py-16 md:py-20">
      <SectionHeading kicker={section.kicker} title={section.title} align="left" />
      <div className="mt-10 flex flex-col gap-10">
        {section.items.map((item, i) => {
          const reversed = i % 2 === 1
          return (
            <div key={item.alt} className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
              <div className={`md:col-span-4 ${reversed ? 'md:order-2' : 'md:order-1'}`}>
                <div className="overflow-hidden border-2 border-foreground bg-white">
                  <div className="aspect-square w-full">
                    <WireframeBox
                      src={item.src}
                      alt={item.alt}
                      className="aspect-square"
                      onZoom={item.src ? () => setSelected({ src: item.src, alt: item.alt }) : undefined}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`md:col-span-8 md:pt-2 ${reversed ? 'md:order-1' : 'md:order-2'}`}
              >
                <p className="text-sm leading-relaxed text-foreground/80 md:text-base">{item.text}</p>
                {item.links && item.links.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-foreground bg-white px-3 py-2 text-sm font-bold text-foreground shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 interactive-focus"
                      >
                        <Github size={16} aria-hidden="true" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
      {selected ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-foreground/80 p-4 sm:p-8"
        >
          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-full rounded-md border-4 border-foreground bg-white px-3 pt-3 pb-8"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Tutup"
              className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground bg-white text-foreground interactive-focus"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-h-[80vh] w-auto max-w-full border-2 border-foreground bg-muted object-contain"
            />
            <figcaption className="pt-3 text-center text-sm font-medium text-foreground">{selected.alt}</figcaption>
          </figure>
        </div>
      ) : null}
    </Section>
  )
}
