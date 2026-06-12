import AboutPreview from '#/components/site/AboutPreview'
import { ExperienceSection } from '#/components/site/ExperienceSection'
import { FeaturedProjects } from '#/components/site/FeaturedProjects'
import Header from '#/components/site/Header'
import Hero from '#/components/site/Hero'
import SkillSection from '#/components/site/SkillSection'
import Terminal from '#/components/site/Terminal'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <Header />
      <Hero />
      <AboutPreview />
      <SkillSection />
      <ExperienceSection />
      <FeaturedProjects />
      <Terminal />
    </div>
  )
}
