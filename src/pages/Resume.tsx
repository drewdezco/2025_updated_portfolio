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

        {/* PDF Viewer - Desktop: Fixed aspect ratio, Mobile: Full width and height */}
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800/50 p-2 sm:p-4 md:p-8">
          {/* Desktop: Fixed aspect ratio container */}
          <div className="hidden md:block aspect-[8.5/11] w-full">
            <iframe
              src="/andrew_hernandez_swe_resume.pdf#view=Fit"
              className="w-full h-full rounded-lg border border-gray-700/50"
              title="Andrew Hernandez Resume"
            />
          </div>
          
          {/* Mobile: Full viewport height, scrollable */}
          <div className="md:hidden w-full">
            <div className="w-full rounded-lg border border-gray-700/50 overflow-hidden" style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
              <iframe
                src="/andrew_hernandez_swe_resume.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
                className="w-full h-full"
                title="Andrew Hernandez Resume"
                allowFullScreen
              />
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">
              Use pinch-to-zoom or the PDF controls to navigate
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume

