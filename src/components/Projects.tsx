import React from 'react'
import { ExternalLink, Calendar } from 'lucide-react'

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
  // Featured projects - 4 main projects in card layout
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
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'Modern portfolio website built with React and TypeScript, deployed on Cloudflare Pages',
      longDescription: 'This portfolio website! Built with React, TypeScript, and Tailwind CSS. Features a modern dark theme, responsive design, smooth animations, and optimized performance. Deployed on Cloudflare Pages with custom domain.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Cloudflare Pages'],
      liveUrl: 'https://drewdez.me',
      githubUrl: 'https://github.com/drewdezco/portfolio',
      featured: true,
      status: 'completed',
      completedDate: 'December 2024'
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

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 transition-all duration-500 hover:bg-gray-800/30 hover:border-gray-600/70">
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

  return (
    <section id="projects" className="py-20 hero-gradient">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in backend automation, system integration, and full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
