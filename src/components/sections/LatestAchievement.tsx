import { Github, Trophy } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Polaroid from '../ui/Polaroid'
import Sticker from '../ui/Sticker'
import { useLanguage } from '../../i18n/LanguageContext'

export default function LatestAchievement() {
  const { t } = useLanguage()
  const latestAchievement = t.latestAchievement
  return (
    <Section id={latestAchievement.id} tone="amber" labelledBy="latest-title">
      <div className="flex flex-col items-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-white">
          <Trophy size={26} strokeWidth={2.25} aria-hidden="true" />
        </span>
        <div className="mt-4">
          <SectionHeading kicker={latestAchievement.kicker} title={latestAchievement.title} align="center" />
        </div>
        <p className="mt-2 text-lg font-semibold">{latestAchievement.subtitle}</p>
        <p className="mt-1 text-sm font-medium uppercase tracking-wider">{latestAchievement.role}</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latestAchievement.images.map((img, i) => (
          <Polaroid
            key={img.caption}
            src={img.src || undefined}
            videoId={img.videoId}
            alt={img.alt}
            caption={img.caption}
            ratio={img.ratio ?? 'landscape'}
            tilt={i === 1 ? 'none' : i === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed">{latestAchievement.paragraph}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {latestAchievement.chips.map((c) => (
          <Sticker key={c} color="bg-foreground text-white" tilt="none">
            {c}
          </Sticker>
        ))}
      </div>
      {latestAchievement.links && latestAchievement.links.length > 0 ? (
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {latestAchievement.links.map((link) => (
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
    </Section>
  )
}
