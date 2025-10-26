import { motion } from 'framer-motion'

function Experience() {
  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "Tech Company",
      period: "2023 - Presente",
      description: "Desarrollo de aplicaciones web con React, Node.js y MongoDB. Implementación de APIs RESTful y gestión de bases de datos.",
      type: "work"
    },
    {
      title: "Desarrollador Frontend",
      company: "Startup XYZ",
      period: "2022 - 2023",
      description: "Creación de interfaces de usuario responsivas con React y Tailwind CSS. Colaboración en equipo usando Git y metodologías ágiles.",
      type: "work"
    },
    {
      title: "Ingeniería en Sistemas",
      company: "Universidad de El Salvador",
      period: "2020 - 2024",
      description: "Licenciatura en Ingeniería de Sistemas Informáticos. Enfoque en desarrollo web, bases de datos y arquitectura de software.",
      type: "education"
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Experiencia & <span className="text-red-600">Educación</span>
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-wine-900/30 hover:border-red-600/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">
                  {exp.type === 'work' ? '💼' : '🎓'}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <span className="text-sm text-red-400 font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-wine-400 font-semibold mb-3">{exp.company}</p>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
              
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-red-600 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience