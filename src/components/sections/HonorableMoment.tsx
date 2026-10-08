import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Polaroid from '../ui/Polaroid'
import { useLanguage } from '../../i18n/LanguageContext'

export default function HonorableMoment() {
  const { t } = useLanguage()
  const honorableMoments = t.honorableMoments
  return (
    <Section id={honorableMoments.id} tone="dark" labelledBy="moments-title">
      <SectionHeading title={honorableMoments.title} dark align="center" />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {honorableMoments.items.map((m, i) => (
          <Polaroid
            key={`${m.caption}-${i}`}
            src={m.src || undefined}
            alt={m.alt}
            caption={`${m.caption} · ${m.year}`}
            ratio="landscape"
            tilt={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'none'}
            dark
          />
        ))}
      </div>
    </Section>
  )
}
