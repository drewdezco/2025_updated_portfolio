import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, ExternalLink } from 'lucide-react'
import BackgroundPattern from '../components/BackgroundPattern'

const Resume: React.FC = () => {
  // Scroll to top instantly when component mounts
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/andrew_hernandez_swe_resume.pdf'
    link.download = 'andrew_hernandez_swe_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewInNewTab = () => {
    window.open('/andrew_hernandez_swe_resume.pdf', '_blank')
  }

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

        {/* Action Buttons - Prominent on mobile */}
        <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={handleDownload}
            className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
            aria-label="Download Resume"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </button>
          <button
            onClick={handleViewInNewTab}
            className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
            aria-label="View Resume in New Tab"
          >
            <ExternalLink className="w-5 h-5" />
            <span>View in New Tab</span>
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4 md:p-8">
          <div className="aspect-[8.5/11] w-full min-h-[400px] md:min-h-0">
            <iframe
              src="/andrew_hernandez_swe_resume.pdf#view=FitH"
              className="w-full h-full rounded-lg border border-gray-700/50"
              title="Andrew Hernandez Resume"
              allow="fullscreen"
            />
          </div>
        </div>

        {/* Mobile-friendly note */}
        <div className="mt-4 text-sm text-gray-400 text-center md:hidden">
          <p>Tip: Use the buttons above to download or view in a new tab for the best experience on mobile.</p>
        </div>
      </div>
    </div>
  )
}

export default Resume

