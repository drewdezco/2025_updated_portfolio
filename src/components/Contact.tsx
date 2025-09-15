import React, { useState } from 'react'
import { Send } from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('Sending...')
    
    try {
      const response = await fetch('https://email-worker.drewdezco.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setStatus('Thanks for reaching out! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('There was an error. Please try again later.')
      }
    } catch (error) {
      setStatus('There was an error. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 hero-gradient">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and development.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/30 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/30 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/30 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Hi Drew! I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 mr-2" />
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            
            {status && (
              <div className={`mt-6 p-4 rounded-lg text-center ${
                status.includes('Thanks') 
                  ? 'bg-green-900/30 border border-green-700/50 text-green-300' 
                  : status.includes('error') 
                  ? 'bg-red-900/30 border border-red-700/50 text-red-300'
                  : 'bg-gray-900/30 border border-gray-700/50 text-gray-300'
              }`}>
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact