import { motion } from 'framer-motion'

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Manager App",
      description: "Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, categorías y recordatorios.",
      tech: ["React", "Firebase", "Tailwind"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Sitio web de portafolio personal con diseño moderno, animaciones y totalmente responsive.",
      tech: ["React", "Tailwind CSS", "Vite"],
      link: "#"
    }
  ]

  return (
    <section id="proyectos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Mis <span className="text-red-600">Proyectos</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-wine-900/30 hover:border-red-600 transition-all"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="inline-block px-6 py-2 bg-gradient-to-r from-red-600 to-wine-700 hover:from-red-700 hover:to-wine-800 rounded-lg transition font-semibold"
              >
                Ver Proyecto
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects