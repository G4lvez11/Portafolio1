import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-secondary/80 backdrop-blur-sm z-50 border-b border-primary">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">TuNombre</h1>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-secondary hover:text-red-600 transition">Inicio</a>
              <a href="#sobre-mi" className="text-secondary hover:text-red-600 transition">Sobre mí</a>
              <a href="#proyectos" className="text-secondary hover:text-red-600 transition">Proyectos</a>
              <a href="#contacto" className="text-secondary hover:text-red-600 transition">Contacto</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar