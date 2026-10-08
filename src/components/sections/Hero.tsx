import Section from '../layout/Section'
import Sticker from '../ui/Sticker'
import { useLanguage } from '../../i18n/LanguageContext'

const stickerColors = [
  'bg-white text-foreground',
  'bg-amber-300 text-foreground',
  'bg-emerald-300 text-foreground',
  'bg-foreground text-white',
]

export default function Hero() {
  const { t } = useLanguage()
  const hero = t.hero
  return (
    <Section tone="blue" grid={false}>
      <div id="top" className="flex flex-col items-center gap-6 py-8 text-center sm:py-12">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" aria-label={hero.focusLabel}>
          {hero.stickers.map((s, i) => (
            <Sticker key={s} color={stickerColors[i % stickerColors.length]} tilt={i % 2 === 0 ? 'left' : 'right'}>
              {s}
            </Sticker>
          ))}
        </div>
        <h1 className="font-pixel text-6xl font-bold leading-none tracking-wide text-white sm:text-8xl lg:text-9xl">
          {hero.title}
        </h1>
        <p className="text-xl font-semibold uppercase tracking-wider text-white sm:text-2xl">{hero.subtitle}</p>
      </div>
    </Section>
  )
}
