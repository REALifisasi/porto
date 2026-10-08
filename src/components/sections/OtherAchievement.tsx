import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import { useLanguage } from '../../i18n/LanguageContext'

export default function OtherAchievement() {
  const { t } = useLanguage()
  const otherAchievement = t.otherAchievement
  return (
    <Section tone="muted" labelledBy="other-title">
      <SectionHeading kicker={otherAchievement.kicker} title={otherAchievement.title} />
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
        {otherAchievement.items.map((item, i) => (
          <article
            key={item.title}
            className={`border-l-4 border-foreground pl-6 sm:pl-8 md:pl-10 ${
              i === 0 ? 'md:mr-10' : 'md:ml-10'
            }`}
          >
            <h3 id={i === 0 ? 'other-title' : undefined} className="text-xl font-bold leading-snug">
              {item.title}
            </h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">{item.role}</p>
            <p className="mt-3 leading-relaxed text-foreground/80">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
