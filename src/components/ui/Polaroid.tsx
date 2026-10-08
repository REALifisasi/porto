import { useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'

type Props = {
  src?: string
  videoId?: string
  alt: string
  caption: string
  ratio?: 'portrait' | 'landscape' | 'square' | 'ig'
  tilt?: 'left' | 'right' | 'none'
  dark?: boolean
}

const ratioCls = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
  ig: 'aspect-[4/5]',
}

export default function Polaroid({ src, videoId, alt, caption, ratio = 'landscape', tilt = 'none', dark = false }: Props) {
  const tiltCls =
    tilt === 'left' ? 'rotate-[-2deg] sm:rotate-[-3deg]' : tilt === 'right' ? 'rotate-[2deg] sm:rotate-[3deg]' : ''
  const [open, setOpen] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
    <figure
      className={`relative bg-white border-4 border-foreground px-3 pt-3 pb-8 rounded-md shadow-none transition-all duration-200 hover:scale-[1.02] ${tiltCls}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-4deg] ${
          dark ? 'bg-amber-300/80' : 'bg-amber-300/70'
        }`}
      />
      {videoId ? (
        playing ? (
          <div className={`w-full overflow-hidden border-2 border-foreground bg-muted ${ratioCls[ratio]}`}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&rel=0`}
              title={alt}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`${alt} — putar video`}
            className="relative block w-full cursor-pointer interactive-focus rounded-sm"
          >
            <img
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt={alt}
              loading="lazy"
              className={`h-auto w-full border-2 border-foreground bg-muted object-cover ${ratioCls[ratio]}`}
            />
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-foreground/40">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground bg-white text-foreground">
                <Play size={28} aria-hidden="true" className="ml-1" />
              </span>
            </span>
          </button>
        )
      ) : src ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`${alt} — perbesar`}
          className="block w-full cursor-zoom-in interactive-focus rounded-sm"
        >
          <img src={src} alt={alt} loading="lazy" className={`h-auto w-full border-2 border-foreground bg-muted object-cover ${ratioCls[ratio]}`} />
        </button>
      ) : (
        <div
          role="img"
          aria-label={alt}
          className={`flex w-full items-center justify-center border-2 border-foreground bg-muted p-6 text-center text-sm font-semibold uppercase tracking-wider text-foreground/60 ${ratioCls[ratio]}`}
        >
          {caption}
        </div>
      )}
      <figcaption className="pt-3 text-center text-sm font-medium text-foreground">{caption}</figcaption>
    </figure>
    {src && open ? (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={alt}
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-foreground/80 p-4 sm:p-8"
      >
        <figure
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-full rounded-md border-4 border-foreground bg-white px-3 pt-3 pb-8 shadow-none"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Tutup"
            className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground bg-white text-foreground interactive-focus"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <img src={src} alt={alt} className="max-h-[80vh] w-auto max-w-full border-2 border-foreground bg-muted object-contain" />
          <figcaption className="pt-3 text-center text-sm font-medium text-foreground">{caption}</figcaption>
        </figure>
      </div>
    ) : null}
    </>
  )
}
