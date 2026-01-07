import React, { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/andrew_hernandez_swe_resume.pdf'
    link.download = 'Andrew_Hernandez_Resume.pdf'
    link.click()
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center hero-gradient relative overflow-hidden">
      {/* Background Pattern Layer */}
      <div 
        className="absolute inset-0 pointer-events-none animate-drift"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='100' y='100' text-anchor='middle' dominant-baseline='middle' fill='%23374151' fill-opacity='0.12' font-family='system-ui, -apple-system, sans-serif' font-weight='700' font-size='26' transform='rotate(-12 100 100)'%3EDREW DEZ%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '160px 80px',
          backgroundRepeat: 'repeat',
          backgroundPosition: '0 0'
        }}
      />
      
      <div className="container-max section-padding py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Main Role Heading - First to fade in */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-center transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Software Engineer
          </h1>
          
          {/* Location - Second to fade in */}
          <div className={`text-center mb-8 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '300ms' }}>
            <span className="text-gray-400 text-sm uppercase tracking-wider">Based in Colorado</span>
          </div>

          {/* Description - Third to fade in */}
          <div className={`text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed text-center mx-auto transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '600ms' }}>
            <p className="mb-4">
            Expertise in automation, distributed systems, and integration.
            </p>
          </div>

          {/* CTA Buttons - Fourth to fade in */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-12 justify-center transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '900ms' }}>
            <button
              onClick={scrollToProjects}
              className="btn-secondary"
            >
              View My Work
            </button>
            <button
              onClick={downloadResume}
              className="btn-secondary"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </button>
          </div>

          {/* Social Links - Last to fade in */}
          <div className={`flex items-center justify-center space-x-6 mb-8 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1200ms' }}>
              <a
                href="https://www.linkedin.com/in/drewdezco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-500 hover:scale-110 transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/drewdezco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-500 hover:scale-110 transform"
              >
                <Github className="w-6 h-6" />
              </a>
              <button
                onClick={scrollToContact}
                className="text-gray-400 hover:text-white transition-colors duration-500 hover:scale-110 transform"
              >
                <Mail className="w-6 h-6" />
              </button>
            </div>

          {/* Mobile scroll indicator - centered below social links */}
          <div className={`flex justify-center md:hidden transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '1500ms' }}>
            <div className="animate-bounce">
              <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-gray-500 rounded-full mt-1.5 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block z-20 transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} style={{ transitionDelay: '1500ms' }}>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
