import React, { useState, useEffect, useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import BackgroundPattern from './BackgroundPattern'

// Force new deployment - TypeScript build fix
interface ExperienceItem {
  id: string
  type: 'work' | 'education'
  company: string
  position: string
  location: string
  period: string
  description: string[]
  technologies?: string[]
  link?: string
  icon?: string
  iconBg?: string
}

const Experience: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work')
  const [itemsVisible, setItemsVisible] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const previousTab = useRef<'work' | 'education'>('work')

  // Handle initial visibility
  useEffect(() => {
    if (isVisible && isInitialLoad) {
      // First time section becomes visible - use longer delays
      setTimeout(() => {
        setItemsVisible(true)
      }, 900)
      setIsInitialLoad(false)
    } else if (isVisible && !isInitialLoad) {
      // Section already visible - show items immediately
      setItemsVisible(true)
    }
  }, [isVisible, isInitialLoad])

  // Handle tab changes - show items quickly
  useEffect(() => {
    if (activeTab !== previousTab.current && isVisible) {
      setItemsVisible(false)
      // Small delay for smooth transition, then show items quickly
      setTimeout(() => {
        setItemsVisible(true)
      }, 50)
      previousTab.current = activeTab
    }
  }, [activeTab, isVisible])
  
  // Your actual experience data
  const experiences: ExperienceItem[] = [
    {
      id: '1',
      type: 'work',
      company: 'SAIC',
      position: 'Software Engineer',
      location: 'Remote',
      period: 'Sep 2023 - Present',
      description: [
        'Gathered requirements and translated user needs into a consistent, enterprise-wide network monitoring solution across clustered RHEL environments',
        'Built backend automation and integrations with Python and APIs, enabling consistent data flow and communication across distributed systems',
        'Implemented AI-driven automation pipelines in Databricks using Python, reducing manual reporting labor by 55% and standardizing analysis for global stakeholders'
      ],
      technologies: ['Python', 'APIs', 'RHEL', 'Databricks', 'Docker', 'Linux'],
      icon: 'SAIC',
      iconBg: 'from-blue-600 to-blue-700'
    },
    {
      id: '2',
      type: 'work',
      company: 'SAIC',
      position: 'Software Engineer Intern',
      location: 'Remote',
      period: 'Apr 2023 - Sep 2023',
      description: [
        'Provisioned a development environment by containerizing RHEL servers with Docker and configuring Git-based version control',
        'Developed software features and automation using Python and JavaScript, enhancing dashboards and alerting systems',
        'Validated reliability of new features through controlled testing prior to deployment, ensuring stability and smooth integration'
      ],
      technologies: ['Python', 'JavaScript', 'Docker', 'Git', 'RHEL'],
      icon: 'SAIC',
      iconBg: 'from-blue-600 to-blue-700'
    },
    {
      id: '3',
      type: 'work',
      company: 'U.S. Department of State',
      position: 'Software Engineer Intern',
      location: 'Washington, D.C.',
      period: 'Feb 2023 - Apr 2023',
      description: [
        'Designed and implemented data collection workflows by scraping public-facing embassy and personnel websites with Python',
        'Developed data validation and enrichment processes by integrating machine learning models to cross-check new data against indexed sources, improving accuracy by 20%',
        'Tested and refined system reliability through iterative validation, ensuring accurate classification of high-value personnel for diplomatic operations'
      ],
      technologies: ['Python', 'Machine Learning', 'Web Scraping', 'Data Validation'],
      icon: 'DOS',
      iconBg: 'from-red-600 to-red-700'
    },
    {
      id: '4',
      type: 'education',
      company: 'Northern Virginia Community College',
      position: 'Associate of Science in Computer Science',
      location: 'Annandale, VA',
      period: 'Completed',
      description: [
        'Focused on foundational computer science principles and programming',
        'Built strong foundation in software development and problem-solving'
      ],
      icon: 'NVCC',
      iconBg: 'from-green-600 to-green-700'
    }
  ]

  const currentExperiences = experiences.filter(exp => exp.type === activeTab)

  const TimelineItem: React.FC<{ experience: ExperienceItem; isLast: boolean; index: number; itemVisible: boolean; useFastAnimation: boolean }> = ({ experience, isLast, index, itemVisible, useFastAnimation }) => {
    // Use longer delays for initial load, shorter for tab changes
    const delay = useFastAnimation ? 100 + (index * 100) : 900 + (index * 300)
    return (
    <div 
      className={`relative flex items-start mb-12 ${
        itemVisible ? 'animate-fade-in-sequential' : 'opacity-0 translate-y-8'
      }`}
      style={itemVisible ? { animationDelay: `${delay}ms` } : {}}
    >
      {/* Company Icon */}
      <div className="flex-shrink-0 mr-6">
        <div className={`w-16 h-16 bg-gradient-to-r ${experience.iconBg || 'from-gray-700 to-gray-800'} rounded-full flex items-center justify-center`}>
          <span className="text-white font-bold text-sm">
            {experience.icon || experience.company.charAt(0)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-2">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-gray-400 text-sm">{experience.period}</span>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-1">{experience.company}</h3>
          <h4 className="text-lg text-gray-300 mb-3">{experience.position}</h4>
        </div>

        {/* Description */}
        <ul className="space-y-3 mb-6">
          {experience.description.map((item, index) => (
            <li key={index} className="text-gray-300 flex items-start">
              <span className="text-gray-400 mr-3 mt-0.5 leading-none">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        {experience.technologies && (
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Timeline connector */}
        {!isLast && (
          <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-700"></div>
        )}
      </div>
    </div>
    )
  }

  return (
    <section id="experience" ref={elementRef as React.RefObject<HTMLElement>} className="py-20 hero-gradient relative overflow-hidden">
      <BackgroundPattern />
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '300ms' }}>
            My professional journey and educational background in software engineering
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-4 py-2 font-medium transition-colors duration-200 ${
                activeTab === 'work'
                  ? 'text-white border-b-2 border-gray-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 font-medium transition-colors duration-200 ${
                activeTab === 'education'
                  ? 'text-white border-b-2 border-gray-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline Pane */}
        <div className="relative">
          {currentExperiences.map((experience, index) => (
            <TimelineItem 
              key={experience.id} 
              experience={experience} 
              isLast={index === currentExperiences.length - 1}
              index={index}
              itemVisible={itemsVisible}
              useFastAnimation={!isInitialLoad}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
