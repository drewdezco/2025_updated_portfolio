import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AllProjects from './pages/AllProjects'

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
        </Routes>
      </div>
    </Router>
  )
}

export default App
