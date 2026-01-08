import React, { useLayoutEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import BackgroundPattern from '../components/BackgroundPattern'

interface BlogPost {
  id: string
  title: string
  content: string
  date: string
  readTime: string
  category?: string
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  
  // Scroll to top instantly when component mounts
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  // Blog posts data - you can move this to a separate file or API later
  const blogPosts: BlogPost[] = [
    // Add your blog posts here
    // Example:
    // {
    //   id: '1',
    //   title: 'Getting Started with Automation',
    //   content: 'Full blog post content here...',
    //   date: '2025-01-15',
    //   readTime: '5 min read',
    //   category: 'Engineering'
    // },
  ]

  const post = blogPosts.find(p => p.id === id)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  if (!post) {
    return (
      <div className="min-h-screen hero-gradient relative overflow-hidden">
        <BackgroundPattern />
        <div className="container-max section-padding py-20 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-500 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-secondary">
              View All Posts
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      <BackgroundPattern />
      <div className="container-max section-padding py-20 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-500 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article */}
        <article className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-8">
            {post.category && (
              <span className="inline-block px-3 py-1 bg-gray-800/50 text-gray-300 rounded-md text-sm mb-4 border border-gray-700/50">
                {post.category}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-400 space-x-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </header>

          {/* Post Content */}
          <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-gray-800/50">
            <div 
              className="text-gray-300 leading-relaxed space-y-4 text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogPost

