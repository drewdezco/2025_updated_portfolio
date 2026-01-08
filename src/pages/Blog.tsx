import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import BackgroundPattern from '../components/BackgroundPattern'
import { blogPosts } from '../data/blogPosts'

const Blog: React.FC = () => {
  // Scroll to top instantly when component mounts
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      <BackgroundPattern />
      <div className="container-max section-padding py-20 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-base font-semibold bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 border-2 border-gray-500/70 hover:border-gray-400 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-gray-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black-950 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
            <p className="text-gray-400 text-lg max-w-2xl">
             Thoughts on software engineering, automation, and building reliable, production-grade systems.
            </p>
          </div>
        </div>

        {/* Blog Posts */}
        <div ref={elementRef as React.RefObject<HTMLDivElement>}>
          {blogPosts.length === 0 ? (
            <div className={`text-center py-20 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '300ms' }}>
              <p className="text-gray-400 text-lg mb-4">No posts yet.</p>
              <p className="text-gray-500">Check back soon for new content!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className={`block bg-gray-900/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 hover:bg-gray-800/30 hover:border-gray-600/70 transition-all duration-300 group ${
                    isVisible ? 'animate-fade-in-sequential' : 'opacity-0 translate-y-8'
                  }`}
                  style={isVisible ? { animationDelay: `${300 + (index * 150)}ms` } : {}}
                >
                  {post.category && (
                    <span className="inline-block px-3 py-1 bg-gray-800/50 text-gray-300 rounded-md text-xs mb-3 border border-gray-700/50">
                      {post.category}
                    </span>
                  )}
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Blog

