import AboutPreview from '#/components/site/AboutPreview'
import Header from '#/components/site/Header'
import Hero from '#/components/site/Hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <Header />
      <Hero />
      <AboutPreview />
    </div>
  )
}
