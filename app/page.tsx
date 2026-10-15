import React from 'react'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import Certificate from '@/components/Certificate'

const Home = () => {
  return (
    <main className="mx-auto w-full px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Certificate />
    </main>
  )
}

export default Home