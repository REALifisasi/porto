import { MapPin, GraduationCap, Star, CalendarCheck } from 'lucide-react'
import Section from '../layout/Section'
import Polaroid from '../ui/Polaroid'
import { useLanguage } from '../../i18n/LanguageContext'

const factIcons = [MapPin, GraduationCap, Star, CalendarCheck]

export default function About() {
  const { t } = useLanguage()
  const about = t.about
  return (
    <Section id="about" tone="white" grid labelledBy="about-title">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-pixel text-sm font-semibold uppercase tracking-wider text-foreground/70">{about.kicker}</p>
          <h2 id="about-title" className="mt-2 text-4xl font-extrabold tracking-tightest sm:text-5xl lg:text-6xl">
            {about.name}
          </h2>
          <p className="mt-2 text-base font-semibold uppercase tracking-wider text-primary">{about.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{about.bio}</p>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {about.facts.map((f, i) => {
              const Icon = factIcons[i % factIcons.length]
              const bg = i % 2 === 0 ? 'bg-amber-100' : i % 3 === 0 ? 'bg-blue-50' : 'bg-green-50'
              const tilt = i % 2 === 0 ? '-rotate-1' : 'rotate-1'
              return (
                <div key={f} className={`flex items-center gap-3 rounded-lg p-4 shadow-none transition-all duration-200 hover:scale-[1.02] ${bg} ${tilt}`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground text-white">
                    <Icon size={20} strokeWidth={2.25} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold">{f}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="lg:col-span-5">
          <Polaroid src={about.photo} alt={about.photoAlt} caption={about.photoCaption} ratio="portrait" tilt="right" />
        </div>
      </div>
    </Section>
  )
}
