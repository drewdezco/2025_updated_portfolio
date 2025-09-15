import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > heroHeight / 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      <div className="container-max section-padding">
        <div className="flex items-center h-16">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex w-full justify-center">
             <div className="flex items-center space-x-8 border border-gray-600/50 text-white font-medium rounded-lg hover:border-gray-500/70 hover:bg-gray-800/30 transition-colors duration-500 ease-in-out px-6 py-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-white transition-colors duration-500 text-sm font-medium"
              >
                Me
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-white transition-colors duration-500 text-sm font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-white transition-colors duration-500 text-sm font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors duration-500 text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors duration-500"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
             <div className="px-2 pt-2 pb-3 space-y-1 bg-black-900/95 backdrop-blur-sm border border-gray-600/50 hover:border-gray-500/70 transition-colors duration-500 ease-in-out rounded-lg mt-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="block px-4 py-3 text-gray-300 hover:text-white transition-colors duration-500 w-full text-left font-medium"
              >
                Me
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block px-4 py-3 text-gray-300 hover:text-white transition-colors duration-500 w-full text-left font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block px-4 py-3 text-gray-300 hover:text-white transition-colors duration-500 w-full text-left font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-4 py-3 text-gray-300 hover:text-white transition-colors duration-500 w-full text-left font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
