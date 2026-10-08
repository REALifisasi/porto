import { Mail, Download, MapPin } from 'lucide-react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const contact = t.contact
  const cvUrl = t.site.cvUrl
  const email = 'rafinurfattah2005@gmail.com'
  const whatsappDisplay = '0887-4358-68472'
  const whatsappUrl = 'https://wa.me/62887435868472'
  return (
    <Section tone="amber" labelledBy="contact-title">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <p className="font-pixel text-sm font-semibold uppercase tracking-wider text-foreground/70">{contact.kickerLabel}</p>
        <h2 id="contact-title" className="text-4xl font-extrabold tracking-tightest sm:text-5xl">
          {contact.kicker}
        </h2>
        <p className="text-lg font-medium">{contact.subtitle}</p>
        <div className="mt-2 flex flex-col items-center gap-2 text-base font-semibold">
          <a href={`mailto:${email}`} className="rounded-md underline-offset-4 hover:underline interactive-focus">
            {email}
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-md underline-offset-4 hover:underline interactive-focus">
            {contact.whatsappLabel}: {whatsappDisplay}
          </a>
          <p className="inline-flex items-center gap-2 font-medium">
            <MapPin size={18} aria-hidden="true" />
            {contact.location}
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button variant="primary" href={`mailto:${email}`}>
            <Mail size={20} aria-hidden="true" />
            {contact.emailCta}
          </Button>
          <Button variant="outline-dark" href={cvUrl}>
            <Download size={20} aria-hidden="true" />
            {contact.downloadCV}
          </Button>
        </div>
      </div>
    </Section>
  )
}
