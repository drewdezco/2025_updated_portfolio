import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import BackgroundPattern from '../components/BackgroundPattern'

const Resume: React.FC = () => {
  // Scroll to top instantly when component mounts
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      <BackgroundPattern />
      <div className="container-max section-padding py-20 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-500 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-white">Resume</h1>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4 md:p-8">
          <div className="aspect-[8.5/11] w-full">
            <iframe
              src="/andrew_hernandez_swe_resume.pdf#view=100%"
              className="w-full h-full rounded-lg border border-gray-700/50"
              title="Andrew Hernandez Resume"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume

