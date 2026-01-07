import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Calendar, Github, TrendingUp, ArrowRight } from 'lucide-react'
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
      title: 'Network Monitoring System',
      description: 'Enterprise-wide network monitoring solution providing real-time insights across distributed RHEL systems with automated alerting and performance metrics tracking.',
      impact: 'Enabled proactive issue detection and reduced system downtime across clustered environments',
      technologies: ['Python', 'RHEL', 'Docker', 'APIs', 'Linux'],
      githubUrl: 'https://github.com/drewdezco/network-monitor',
      featured: true,
      completedDate: 'November 2024'
    },
    {
      id: '2',
      title: 'Databricks Analytics Pipeline',
      description: 'AI-driven automation pipeline for data processing and reporting using machine learning models to standardize analysis workflows.',
      impact: 'Reduced manual reporting labor by 55% for global stakeholders',
      technologies: ['Python', 'Databricks', 'Machine Learning', 'Data Analytics'],
      githubUrl: 'https://github.com/drewdezco/analytics-pipeline',
      featured: true,
      completedDate: 'October 2024'
    },
    {
      id: '3',
      title: 'Docker Development Environment',
      description: 'Containerized RHEL development environment with Git-based version control, automated testing pipelines, and streamlined deployment processes.',
      impact: 'Improved development team productivity through standardized workflows',
      technologies: ['Docker', 'RHEL', 'Git', 'CI/CD', 'Bash'],
      githubUrl: 'https://github.com/drewdezco/docker-dev-env',
      featured: true,
      completedDate: 'August 2024'
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
            {project.completedDate && (
              <div className="flex items-center text-gray-400 text-sm mb-3">
                <Calendar className="w-4 h-4 mr-1" />
                {project.completedDate}
              </div>
            )}
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
        <div className={`flex justify-center mt-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1500ms' }}>
          <Link
            to="/projects"
            className="btn-secondary inline-flex items-center"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
