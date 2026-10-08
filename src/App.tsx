import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import LatestAchievement from './components/sections/LatestAchievement'
import OtherAchievement from './components/sections/OtherAchievement'
import PersonalProject from './components/sections/PersonalProject'
import OtherPersonalProject from './components/sections/OtherPersonalProject'
import HonorableMoment from './components/sections/HonorableMoment'
import { Skills, Tools } from './components/sections/SkillsTools'
import Contact from './components/sections/Contact'
import LanguageToggle from './components/ui/LanguageToggle'
import PixelTrail from './components/ui/PixelTrail'
import { LanguageProvider } from './i18n/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <LatestAchievement />
        <OtherAchievement />
        <PersonalProject />
        <OtherPersonalProject />
        <HonorableMoment />
        <Skills />
        <Tools />
        <Contact />
      </main>
      <Footer />
      <LanguageToggle floating />
      <PixelTrail />
    </div>
    </LanguageProvider>
  )
}
