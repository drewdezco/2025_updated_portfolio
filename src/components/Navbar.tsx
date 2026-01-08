import React, { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isProjectsPage = location.pathname === '/projects'
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > heroHeight / 3)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (isProjectsPage) {
      // If on projects page, navigate to home first, then scroll
      navigate('/', { state: { scrollTo: sectionId } })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  // Handle scroll after navigation from projects page
  useEffect(() => {
    if (location.state?.scrollTo && location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        // Clear the state to prevent re-scrolling on re-renders
        window.history.replaceState({}, document.title)
      }, 100)
    }
  }, [location])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        mobileMenuButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !mobileMenuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])


  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container-max section-padding">
        <div className="flex items-center h-16">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex w-full justify-center">
            <div className={`flex items-center space-x-8 border border-gray-600/50 text-white font-medium rounded-lg hover:border-gray-500/70 transition-all duration-500 ease-in-out px-6 py-2 ${
              isScrolled 
                ? 'bg-black-950/80 backdrop-blur-md' 
                : 'bg-transparent hover:bg-gray-800/30'
            }`}>
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-white transition-colors duration-500 text-sm font-medium"
              >
                Me
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white transition-colors duration-500 text-sm font-medium"
              >
                Projects
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
              ref={mobileMenuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-gray-400 hover:text-white transition-all duration-500 border border-gray-600/50 rounded-lg p-2 ${
                isScrolled 
                  ? 'bg-black-950/80 backdrop-blur-md hover:border-gray-500/70' 
                  : 'bg-transparent hover:bg-gray-800/30'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden" ref={mobileMenuRef}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black-900/95 backdrop-blur-sm border border-gray-600/50 hover:border-gray-500/70 transition-colors duration-500 ease-in-out rounded-lg mt-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="block px-4 py-3 text-gray-300 hover:text-white transition-colors duration-500 w-full text-left font-medium"
              >
                Me
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block px-4 py-3 text-gray-300 hover:text-white transition-colors duration-500 w-full text-left font-medium"
              >
                Projects
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
