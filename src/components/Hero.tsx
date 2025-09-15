import React from 'react'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero: React.FC = () => {
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
      {/* Responsive Background Name Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Desktop pattern - full density (1024px+) */}
          <div className="hidden lg:block">
            {Array.from({ length: 224 }).map((_, i) => {
              const cols = 16;
              const rows = 14;
              const col = i % cols;
              const row = Math.floor(i / cols);
              return (
                <div
                  key={i}
                  className="absolute text-lg font-bold text-gray-700 select-none whitespace-nowrap transform -rotate-12"
                  style={{
                    left: `${(col * (100 / cols)) + (100 / cols / 2) - 5}%`,
                    top: `${(row * (100 / rows)) + (100 / rows / 2) - 5}%`,
                  }}
                >
                  DREW DEZ
                </div>
              );
            })}
          </div>
          
          {/* Tablet pattern - medium density (640px-1023px) */}
          <div className="hidden sm:block lg:hidden">
            {Array.from({ length: 112 }).map((_, i) => {
              const cols = 12;
              const rows = 10;
              const col = i % cols;
              const row = Math.floor(i / cols);
              return (
                <div
                  key={i}
                  className="absolute text-base font-bold text-gray-700 select-none whitespace-nowrap transform -rotate-12"
                  style={{
                    left: `${(col * (100 / cols)) + (100 / cols / 2) - 3}%`,
                    top: `${(row * (100 / rows)) + (100 / rows / 2) - 3}%`,
                  }}
                >
                  DREW DEZ
                </div>
              );
            })}
          </div>
          
          {/* Mobile pattern - improved density (0-639px) */}
          <div className="block sm:hidden">
            {Array.from({ length: 60 }).map((_, i) => {
              const cols = 6;
              const rows = 10;
              const col = i % cols;
              const row = Math.floor(i / cols);
              return (
                <div
                  key={i}
                  className="absolute text-sm font-bold text-gray-700 select-none whitespace-nowrap transform -rotate-12"
                  style={{
                    left: `${(col * (100 / cols)) + (100 / cols / 2) - 2}%`,
                    top: `${(row * (100 / rows)) + (100 / rows / 2) - 2}%`,
                  }}
                >
                  DREW DEZ
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="container-max section-padding py-20 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            {/* Location */}
            <div className="text-center mb-6">
              <span className="text-gray-400 text-sm uppercase tracking-wider">Based in Colorado</span>
            </div>
            
            {/* Main Role Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-center">
              Software Engineer
            </h1>

            {/* Description */}
            <div className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed text-center mx-auto">
              <p className="mb-4">
              Software Engineer with expertise in backend automation, distributed systems, and system integration.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
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

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6">
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
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block z-20">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
      {/* Mobile scroll indicator - top right */}
      <div className="absolute top-20 right-6 animate-bounce md:hidden z-20">
        <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-500 rounded-full mt-1.5 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
