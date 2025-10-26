import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-600 via-wine-700 to-red-900 bg-clip-text text-transparent"
        >
          Tu Nombre
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl text-secondary mb-8"
        >
          Desarrollador Web Full Stack
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-secondary max-w-2xl mx-auto mb-12"
        >
          Creando experiencias web modernas y funcionales con las últimas tecnologías
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex gap-4 justify-center"
        >
          <a 
            href="#proyectos" 
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-wine-700 hover:from-red-700 hover:to-wine-800 rounded-lg transition font-semibold shadow-lg text-white"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contacto" 
            className="px-8 py-3 bg-secondary border-2 border-primary text-primary hover:bg-tertiary rounded-lg transition font-semibold"
          >
            Contactar
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero