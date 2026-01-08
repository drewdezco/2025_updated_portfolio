import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import BackgroundPattern from './BackgroundPattern'

interface SkillCategory {
  title: string
  skills: string[]
}

const Skills: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  const skillCategories: SkillCategory[] = [
    {
      title: 'Core Focus',
      skills: ['Automation', 'System Integration', 'Data Pipelines', 'Production Engineering']
    },
    {
      title: 'Primary Languages & Testing',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'Bash', 'Playwright', 'PyTest']
    },
    {
      title: 'Data & Analytics',
      skills: ['Splunk', 'Databricks', 'Pandas', 'NumPy']
    },
    {
      title: 'Infrastructure & DevOps',
      skills: ['Docker', 'Linux (RHEL)', 'GitLab', 'GitLab CI/CD', 'Git']
    },
    {
      title: 'APIs & Integration',
      skills: ['REST APIs', 'Microsoft Graph API', 'Splunk REST API', 'GraphQL']
    },
    {
      title: 'Frontend (Supporting)',
      skills: ['React', 'Tailwind CSS', 'Bootstrap']
    }
  ]

  const SkillCategoryCard: React.FC<{ category: SkillCategory; index: number; isVisible: boolean }> = ({ category, index, isVisible }) => {
    const delay = 600 + (index * 150) // Stagger categories with 150ms increments
    return (
      <div 
        className={`bg-gray-900/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 hover:bg-gray-800/30 hover:border-gray-600/70 transition-all duration-300 ${
          isVisible ? 'animate-fade-in-sequential' : 'opacity-0 translate-y-8'
        }`}
        style={isVisible ? { animationDelay: `${delay}ms` } : {}}
      >
        <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-md text-sm border border-gray-700/50"
            >
              {skill}
            </span>
          ))}
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
            My skills focus on building reliable, production-grade systems through automation, integration, and data-driven workflows
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={index} category={category} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
