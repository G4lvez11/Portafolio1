import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-primary transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="text-center py-8 text-secondary border-t border-primary">
        <p>© 2024 Tu Nombre. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App