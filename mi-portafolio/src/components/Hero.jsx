function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          AG Web Dev Studio
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 mb-8">
          Desarrollador Web Full Stack
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          Creando experiencias web modernas y funcionales con las últimas tecnologías
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#proyectos" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition font-semibold"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contacto" 
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition font-semibold"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero