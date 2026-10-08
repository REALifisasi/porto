import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Polaroid from '../ui/Polaroid'
import { useLanguage } from '../../i18n/LanguageContext'

function WireframeImage({
  src,
  alt,
  fallback,
  className = '',
  onZoom,
}: {
  src: string
  alt: string
  fallback: string
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
      <span className="relative max-w-[80%] text-center text-xs font-semibold uppercase tracking-wider text-foreground/50">
        {fallback}
      </span>
    </div>
  )
}

export default function PersonalProject() {
  const { t } = useLanguage()
  const personalProject = t.personalProject
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null)
  const [expanded, setExpanded] = useState(false)

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
    <Section id={personalProject.id} tone="white" grid labelledBy="project-title" padClass="py-16 md:py-20">
      <div className="flex flex-col items-center text-center">
        <SectionHeading kicker={personalProject.kicker} title={personalProject.title} align="center" />
        <p className="mt-2 text-base font-semibold text-foreground/80">{personalProject.subtitle}</p>
      </div>

      <div className="mt-8 w-full overflow-hidden rounded-none border-2 border-foreground bg-white">
        <div className="aspect-[21/9] w-full">
          <WireframeImage
            src={personalProject.hero.src}
            alt={personalProject.hero.alt}
            fallback={personalProject.imagePlaceholder}
            className="aspect-[21/9]"
            onZoom={personalProject.hero.src ? () => setSelected(personalProject.hero) : undefined}
          />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-center text-sm font-bold uppercase tracking-widest text-foreground/70">
          {personalProject.documentationTitle}
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personalProject.gallery.map((g, i) => (
            <Polaroid
              key={g.caption || g.alt}
              src={g.src || undefined}
              videoId={g.videoId}
              alt={g.alt}
              caption={g.caption || g.alt}
              ratio={g.ratio ?? 'ig'}
              tilt={i === 1 ? 'none' : i === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>

      <p
        className={`mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-foreground/80 md:text-base ${
          expanded ? '' : 'line-clamp-3'
        }`}
      >
        {personalProject.paragraph}
      </p>
      <div className="mt-3 text-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="text-sm font-bold text-foreground underline decoration-2 underline-offset-4 interactive-focus"
        >
          {expanded ? personalProject.showLess : personalProject.readMore}
        </button>
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
