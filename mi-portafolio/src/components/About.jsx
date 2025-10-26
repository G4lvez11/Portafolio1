import { motion } from 'framer-motion'

function About() {
  return (
    <section id="sobre-mi" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary"
        >
          Sobre <span className="text-red-600">Mí</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-secondary/50 rounded-2xl p-8 backdrop-blur-sm border border-primary"
        >
          <p className="text-lg text-secondary mb-6 leading-relaxed">
            Soy un desarrollador web apasionado por crear soluciones digitales innovadoras. 
            Me especializo en desarrollo Full Stack con React, Node.js y tecnologías modernas.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            Mi objetivo es construir aplicaciones web que no solo sean visualmente atractivas, 
            sino también funcionales, escalables y fáciles de usar.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About