import React from 'react'

interface Technology {
  name: string
  description: string
  icon: string // For now we'll use text-based icons, can be replaced with actual icons later
  iconBg: string
}

const Skills: React.FC = () => {
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

  const TechnologyCard: React.FC<{ technology: Technology }> = ({ technology }) => (
    <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-4 border border-gray-800/50 transition-all duration-300 hover:bg-gray-800/30 hover:border-gray-600/70">
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

  return (
    <section id="skills" className="py-20 hero-gradient">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((technology, index) => (
            <TechnologyCard key={index} technology={technology} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
