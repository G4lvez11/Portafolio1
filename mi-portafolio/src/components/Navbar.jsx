function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">TuNombre</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-300 hover:text-white transition">Inicio</a>
            <a href="#sobre-mi" className="text-gray-300 hover:text-white transition">Sobre mí</a>
            <a href="#proyectos" className="text-gray-300 hover:text-white transition">Proyectos</a>
            <a href="#contacto" className="text-gray-300 hover:text-white transition">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar