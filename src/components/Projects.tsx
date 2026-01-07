import React from 'react'
import { ExternalLink, Calendar } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl?: string
  featured: boolean
  status: 'completed' | 'in-progress' | 'planned'
  completedDate?: string
}

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  // Featured projects - 3 main projects in vertical stack layout
  const projects: Project[] = [
    {
      id: '1',
      title: 'Network Monitoring System',
      description: 'Enterprise-wide network monitoring solution across clustered RHEL environments with automated alerting',
      longDescription: 'Built a comprehensive network monitoring solution for SAIC that provides real-time insights across distributed RHEL systems. Features automated alerting, performance metrics tracking, and integration with existing enterprise infrastructure.',
      technologies: ['Python', 'RHEL', 'Docker', 'APIs', 'Linux'],
      githubUrl: 'https://github.com/drewdezco/network-monitor',
      featured: true,
      status: 'completed',
      completedDate: 'November 2024'
    },
    {
      id: '2',
      title: 'Databricks Analytics Pipeline',
      description: 'AI-driven automation pipeline that reduced manual reporting labor by 55% for global stakeholders',
      longDescription: 'Developed automated data processing and reporting system using Databricks and Python. Implemented machine learning models for data analysis and created standardized reporting workflows that significantly improved efficiency.',
      technologies: ['Python', 'Databricks', 'Machine Learning', 'Data Analytics'],
      githubUrl: 'https://github.com/drewdezco/analytics-pipeline',
      featured: true,
      status: 'completed',
      completedDate: 'October 2024'
    },
    {
      id: '3',
      title: 'Docker Development Environment',
      description: 'Containerized RHEL development environment with Git-based version control and automated deployment',
      longDescription: 'Created a robust development environment using Docker containers for RHEL servers. Implemented Git workflows, automated testing pipelines, and deployment processes that improved development team productivity.',
      technologies: ['Docker', 'RHEL', 'Git', 'CI/CD', 'Bash'],
      githubUrl: 'https://github.com/drewdezco/docker-dev-env',
      featured: true,
      status: 'completed',
      completedDate: 'August 2024'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-600'
      case 'in-progress':
        return 'bg-yellow-600'
      case 'planned':
        return 'bg-blue-600'
      default:
        return 'bg-gray-600'
    }
  }

  const ProjectCard: React.FC<{ project: Project; index: number; isVisible: boolean }> = ({ project, index, isVisible }) => {
    const delay = 600 + (index * 300) // 600ms, 900ms, 1200ms
    return (
    <div 
      className={`bg-gray-900/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 hover:bg-gray-800/30 hover:border-gray-600/70 ${
        isVisible ? 'animate-fade-in-sequential' : 'opacity-0 translate-y-8'
      }`}
      style={isVisible ? { animationDelay: `${delay}ms` } : {}}
    >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <span className={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            
            {project.completedDate && (
              <div className="flex items-center text-gray-400 text-sm mb-3">
                <Calendar className="w-4 h-4 mr-1" />
                {project.completedDate}
              </div>
            )}
          </div>

           <div className="flex space-x-2">
             {project.liveUrl && (
               <a
                 href={project.liveUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors duration-500"
               >
                 <ExternalLink className="w-5 h-5" />
               </a>
             )}
           </div>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
    </div>
    )
  }

  return (
    <section id="projects" ref={elementRef as React.RefObject<HTMLElement>} className="py-20 hero-gradient">
      <div className="container-max section-padding">
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
          <a
            href="https://github.com/drewdezco"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
