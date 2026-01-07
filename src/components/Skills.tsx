import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import BackgroundPattern from './BackgroundPattern'

interface Technology {
  name: string
  description: string
  icon: string // For now we'll use text-based icons, can be replaced with actual icons later
  iconBg: string
}

const Skills: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  // Technology stack based on your professional experience
  const technologies: Technology[] = [
    {
      name: 'Python',
      description: 'Primary language',
      icon: '🐍',
      iconBg: 'from-yellow-500 to-blue-500'
    },
    {
      name: 'Java',
      description: 'Enterprise development',
      icon: '☕',
      iconBg: 'from-orange-500 to-red-500'
    },
    {
      name: 'JavaScript',
      description: 'Frontend & automation',
      icon: 'JS',
      iconBg: 'from-yellow-400 to-yellow-500'
    },
    {
      name: 'TypeScript',
      description: 'Type-safe JavaScript',
      icon: 'TS',
      iconBg: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Docker',
      description: 'Containerization',
      icon: '🐳',
      iconBg: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Linux (RHEL)',
      description: 'System administration',
      icon: '🐧',
      iconBg: 'from-red-600 to-red-700'
    },
    {
      name: 'REST APIs',
      description: 'Service integration',
      icon: 'API',
      iconBg: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Databricks',
      description: 'Data analytics',
      icon: 'DB',
      iconBg: 'from-orange-600 to-red-600'
    },
    {
      name: 'SQL',
      description: 'Database queries',
      icon: 'SQL',
      iconBg: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Bash',
      description: 'Shell scripting',
      icon: '$',
      iconBg: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Pandas',
      description: 'Data manipulation',
      icon: '🐼',
      iconBg: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Azure SDK',
      description: 'Cloud services',
      icon: 'AZ',
      iconBg: 'from-blue-500 to-cyan-500'
    }
  ]

  const TechnologyCard: React.FC<{ technology: Technology; index: number; isVisible: boolean }> = ({ technology, index, isVisible }) => {
    const delay = 600 + (index * 100) // Stagger cards with 100ms increments
    return (
    <div 
      className={`bg-gray-900/20 backdrop-blur-sm rounded-lg p-4 border border-gray-800/50 hover:bg-gray-800/30 hover:border-gray-600/70 ${
        isVisible ? 'animate-fade-in-sequential' : 'opacity-0 translate-y-8'
      }`}
      style={isVisible ? { animationDelay: `${delay}ms` } : {}}
    >
      <div className="flex items-center space-x-3">
        {/* Technology Icon */}
        <div className={`w-10 h-10 bg-gradient-to-r ${technology.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-sm">
            {technology.icon}
          </span>
        </div>
        
        {/* Technology Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-white mb-0.5">{technology.name}</h3>
          <p className="text-gray-400 text-xs">{technology.description}</p>
        </div>
      </div>
    </div>
    )
  }

  return (
    <section id="skills" ref={elementRef as React.RefObject<HTMLElement>} className="py-20 hero-gradient relative overflow-hidden">
      <BackgroundPattern />
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '300ms' }}>
            I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((technology, index) => (
            <TechnologyCard key={index} technology={technology} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
