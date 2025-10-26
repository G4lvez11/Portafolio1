import { motion } from 'framer-motion'

function Skills() {
  const skills = [
    { name: "React", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "Node.js", level: "80%" },
    { name: "Tailwind CSS", level: "90%" },
    { name: "Git", level: "75%" },
    { name: "MongoDB", level: "70%" }
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
          Habilidades <span className="text-wine-600">Técnicas</span>
        </motion.h2>
        <div className="grid gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 dark:bg-gray-800/50 light:bg-white/80 
                rounded-lg p-6 backdrop-blur-sm 
                border border-wine-900/30 dark:border-wine-900/30 light:border-gray-200"
            >
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">{ skill.name}</span>
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-700 dark:bg-gray-700 light:bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-red-600 to-wine-700 h-3 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills