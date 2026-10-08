import { Blocks, Wrench } from 'lucide-react'
import Section from '../layout/Section'
import Sticker from '../ui/Sticker'
import { useLanguage } from '../../i18n/LanguageContext'

function VerticalLabel({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <div className="flex flex-row items-center gap-3 md:flex-col md:items-center">
      <span
        className={`font-pixel text-sm font-bold uppercase tracking-wider md:vertical-label ${
          dark ? 'text-white' : 'text-foreground'
        }`}
      >
        {text}
      </span>
      <span aria-hidden="true" className={`h-1 w-12 rounded-full md:h-24 md:w-1 ${dark ? 'bg-white/30' : 'bg-foreground/20'}`} />
    </div>
  )
}

export function Skills() {
  const { t } = useLanguage()
  const skills = t.skills
  return (
    <Section id={skills.id} tone="white" grid labelledBy="skills-title">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-2">
          <VerticalLabel text={skills.kicker} />
        </div>
        <div className="md:col-span-10">
          <h2 id="skills-title" className="text-3xl font-extrabold tracking-tightest sm:text-4xl">
            {skills.title}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {skills.blocks.map((b, i) => (
              <article
                key={b.title}
                className={`group cursor-pointer rounded-lg p-6 shadow-none transition-all duration-200 hover:scale-[1.02] sm:p-8 ${
                  i === 0 ? 'bg-blue-50' : i === 1 ? 'bg-green-50' : 'bg-amber-50'
                }`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-white transition-all duration-200 group-hover:scale-110">
                  <Blocks size={24} strokeWidth={2.25} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-foreground/80">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export function Tools() {
  const { t } = useLanguage()
  const tools = t.tools
  return (
    <Section id={tools.id} tone="muted" labelledBy="tools-title">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-2">
          <VerticalLabel text={tools.kicker} />
        </div>
        <div className="md:col-span-10">
          <h2 id="tools-title" className="text-3xl font-extrabold tracking-tightest sm:text-4xl">
            {tools.title}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {tools.blocks.map((b) => (
              <article key={b.title} className="rounded-lg bg-white p-6 shadow-none transition-all duration-200 hover:scale-[1.02] sm:p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  <Wrench size={24} strokeWidth={2.25} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold">{b.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {b.items.map((t) => (
                    <Sticker key={t} color="bg-muted text-foreground">
                      {t}
                    </Sticker>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
