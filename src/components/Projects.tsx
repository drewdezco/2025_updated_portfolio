import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, TrendingUp, ArrowRight } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import BackgroundPattern from './BackgroundPattern'

interface Project {
  id: string
  title: string
  description: string
  impact?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl?: string
  featured: boolean
  completedDate?: string
}

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  // Featured projects - 3 main projects in vertical stack layout
  const projects: Project[] = [
    {
      id: '1',
      title: 'Cyber Security Integration',
      description: 'Engineered automated integration and deployment pipeline for a cyber security tool in a clustered Splunk environment. Replaced manual processes with Python-based automation, REST API integrations, and infrastructure orchestration.',
      impact: 'Reduced operational costs by $35K/month through automation and eliminated manual workflow dependencies',
      technologies: ['Python', 'Splunk', 'Automation', 'Infrastructure', 'REST APIs'],
      featured: true
    },
    {
      id: '2',
      title: 'Data Quality Toolkit',
      description: 'Architected and developed a full-stack data quality validation system. Built modular Python backend API with React/TypeScript frontend, enabling column-level and dataset-level validation workflows through a web interface.',
      impact: 'Delivered reusable validation framework reducing data quality review time and improving dataset reliability',
      technologies: ['Python', 'React', 'Vite', 'REST APIs', 'TypeScript'],
      featured: true
    },
    {
      id: '3',
      title: 'Playwright – System Validation Testing',
      description: 'Designed and implemented comprehensive Playwright test automation framework covering UI, API, and end-to-end workflows. Validated authentication flows, backend services, and frontend state management across multiple integration points.',
      impact: 'Established automated test coverage ensuring system reliability and reducing regression risk',
      technologies: ['Playwright', 'Python', 'Test Automation', 'CI/CD', 'API Testing'],
      featured: true
    }
  ]

  const ProjectCard: React.FC<{ project: Project; index: number; isVisible: boolean }> = ({ project, index, isVisible }) => {
    const delay = 600 + (index * 300) // 600ms, 900ms, 1200ms
    return (
    <div 
      className={`bg-gray-900/20 backdrop-blur-sm rounded-lg border border-gray-800/50 hover:bg-gray-800/30 hover:border-gray-600/70 overflow-hidden ${
        isVisible ? 'animate-fade-in-sequential' : 'opacity-0 translate-y-8'
      }`}
      style={isVisible ? { animationDelay: `${delay}ms` } : {}}
    >
        {/* Project Image */}
        {project.imageUrl && (
          <div className="w-full h-48 bg-gray-800/30 overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
          </div>

          {/* Action Links */}
          <div className="flex space-x-2 ml-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-500"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-500"
                aria-label="View live site"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed text-base">
          {project.description}
        </p>

        {/* Impact */}
        {project.impact && (
          <div className="mb-4 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-200 leading-relaxed">
                <span className="font-medium text-white">Impact: </span>
                {project.impact}
              </p>
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
        </div>
    </div>
    )
  }

  return (
    <section id="projects" ref={elementRef as React.RefObject<HTMLElement>} className="py-20 hero-gradient relative overflow-hidden">
      <BackgroundPattern />
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '300ms' }}>
          Backend automation, system integration, and production-focused engineering with a focus on reliability
          </p>
        </div>

        {/* Projects Grid - Vertical stack on all screen sizes */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1500ms' }}>
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 border-2 border-gray-500/70 hover:border-gray-400 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-gray-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black-950"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
