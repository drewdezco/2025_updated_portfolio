import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AllProjects from './pages/AllProjects'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black-950">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Projects />
              <Experience />
              <Skills />
              <Contact />
            </main>
          } />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
