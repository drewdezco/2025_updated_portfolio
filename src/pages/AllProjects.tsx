import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, Calendar, TrendingUp } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import BackgroundPattern from '../components/BackgroundPattern'

interface Project {
  id: string
  title: string
  description: string
  impact?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl?: string
  gifUrl?: string
  featured: boolean
  completedDate?: string
}

const AllProjects: React.FC = () => {
  // Scroll to top instantly when component mounts (before render)
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  // All projects - you can expand this list with more projects
  const allProjects: Project[] = [
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
    // Add more projects here as needed
  ]

  const ProjectCard: React.FC<{ project: Project; index: number; isVisible: boolean }> = ({ project, index, isVisible }) => {
    const delay = 300 + (index * 150) // Stagger cards with 150ms increments
    return (
      <div 
        className={`bg-gray-900/20 backdrop-blur-sm rounded-lg border border-gray-800/50 hover:bg-gray-800/30 hover:border-gray-600/70 overflow-hidden ${
          isVisible ? 'animate-fade-in-sequential' : 'opacity-0 translate-y-8'
        }`}
        style={isVisible ? { animationDelay: `${delay}ms` } : {}}
      >
        {/* Project GIF/Image */}
        {(project.gifUrl || project.imageUrl) && (
          <div className="w-full h-64 bg-gray-800/30 overflow-hidden">
            {project.gifUrl ? (
              <img 
                src={project.gifUrl} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
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
    <div className="min-h-screen bg-black-950 relative overflow-hidden" ref={elementRef as React.RefObject<HTMLDivElement>}>
      <BackgroundPattern />
      <div className="container-max section-padding py-20 relative z-10">
        {/* Back Button */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link 
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-500 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl font-bold text-white mb-4">All Projects</h1>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '300ms' }}>
            A comprehensive collection of my work, showcasing backend automation, system integration, and production-focused engineering
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Empty State - if you want to add more projects later */}
        {allProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">More projects coming soon...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllProjects

