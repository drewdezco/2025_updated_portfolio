import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import BackgroundPattern from '../components/BackgroundPattern'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category?: string
}

const Blog: React.FC = () => {
  // Scroll to top instantly when component mounts
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  // Blog posts - you can expand this with actual content later
  const blogPosts: BlogPost[] = [
    // Add your blog posts here
    // Example:
    // {
    //   id: '1',
    //   title: 'Getting Started with Automation',
    //   excerpt: 'Learn how to build reliable automation systems that scale with your infrastructure needs...',
    //   date: '2025-01-15',
    //   readTime: '5 min read',
    //   category: 'Engineering'
    // },
  ]

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
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-500 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Thoughts on software engineering, automation, and building production-grade systems.
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

