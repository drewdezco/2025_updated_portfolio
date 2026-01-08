import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, TrendingUp } from 'lucide-react'
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

  // All projects
  const allProjects: Project[] = [
    {
      id: '1',
      title: 'Cyber Security Integration',
      description: 'Engineered automated integration and deployment pipeline for a cyber security tool in a clustered Splunk environment. Replaced manual processes with Python-based automation, REST API integrations, and infrastructure orchestration.',
      impact: 'Reduced operational costs by $35K/month through automation and eliminated manual workflow dependencies',
      technologies: ['Python', 'Splunk', 'Automation', 'Infrastructure', 'REST APIs'],
      imageUrl: '/project_1.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Data Quality Toolkit',
      description: 'Architected and developed a full-stack data quality validation system. Built modular Python backend API with React/TypeScript frontend, enabling column-level and dataset-level validation workflows through a web interface.',
      impact: 'Delivered reusable validation framework reducing data quality review time and improving dataset reliability',
      technologies: ['Python', 'React', 'Vite', 'REST APIs', 'TypeScript'],
      imageUrl: '/project_2.jpg',
      featured: true
    },
    {
      id: '3',
      title: 'Playwright – System Validation Testing',
      description: 'Designed and implemented comprehensive Playwright test automation framework covering UI, API, and end-to-end workflows. Validated authentication flows, backend services, and frontend state management across multiple integration points.',
      impact: 'Established automated test coverage ensuring system reliability and reducing regression risk',
      technologies: ['Playwright', 'Python', 'Test Automation', 'CI/CD', 'API Testing'],
      imageUrl: '/project_3.jpg',
      featured: true
    },
    {
      id: '4',
      title: 'Data Quality AI Analysis',
      description: 'Built data pipeline with AI-driven analysis capabilities to evaluate datasets and identify cyber security risks. Automated manual review processes through machine learning integration and batch processing workflows.',
      technologies: ['Python', 'AI/ML', 'Data Pipelines', 'Automation', 'Data Analysis'],
      imageUrl: '/project_4.jpg',
      featured: false
    },
    {
      id: '5',
      title: 'Data Pipeline Creation (SharePoint ↔ Splunk)',
      description: 'Architected bidirectional data pipeline between SharePoint and Splunk using REST APIs. Implemented automated ingestion, synchronization, and data governance workflows with error handling and monitoring.',
      technologies: ['Python', 'Splunk', 'Microsoft Graph API', 'REST APIs', 'Data Pipelines'],
      imageUrl: '/project_4.jpg',
      featured: false
    },
    {
      id: '6',
      title: 'Splunk Custom Command Development',
      description: 'Extended Splunk search functionality by developing custom SPL commands in Python. Enabled analysts to deploy new workflows and transformations without modifying underlying data sources or infrastructure.',
      technologies: ['Python', 'Splunk', 'SPL', 'Custom Development', 'Automation'],
      imageUrl: '/project_4.jpg',
      featured: false
    },
    {
      id: '7',
      title: 'Splunk Dashboard Development',
      description: 'Engineered interactive Splunk dashboards with advanced user interactions and real-time data visualization. Integrated backend services via REST API for dynamic data retrieval and user-specific filtering.',
      technologies: ['Splunk', 'JavaScript', 'REST APIs', 'Data Visualization', 'Dashboard Design'],
      imageUrl: '/project_4.jpg',
      featured: false
    },
    {
      id: '8',
      title: 'Splunk JavaScript Automation',
      description: 'Implemented custom JavaScript automation within Splunk dashboards to enhance interactivity and user workflows. Developed reusable components for enterprise reporting views with state management.',
      technologies: ['JavaScript', 'Splunk', 'Automation', 'Dashboard Development', 'UX Enhancement'],
      imageUrl: '/project_4.jpg',
      featured: false
    },
    {
      id: '9',
      title: 'Portfolio Website',
      description: 'Built responsive portfolio website using React, TypeScript, and Tailwind CSS. Implemented smooth animations, intersection observer patterns, and optimized performance. Deployed via Cloudflare Pages with Git-based CI/CD.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Cloudflare'],
      githubUrl: 'https://github.com/drewdezco/portfolio',
      liveUrl: 'https://drewdez.me',
      imageUrl: '/project_9.jpg',
      featured: false
    }
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
        <div className={`transition-all duration-1000 ease-out mb-12 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 text-base font-semibold bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 border-2 border-gray-500/70 hover:border-gray-400 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-gray-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black-950"
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

        {/* Back to Home Button - Bottom */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: `${300 + (allProjects.length * 150)}ms` }}>
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 text-base font-semibold bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 border-2 border-gray-500/70 hover:border-gray-400 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-gray-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black-950"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AllProjects

