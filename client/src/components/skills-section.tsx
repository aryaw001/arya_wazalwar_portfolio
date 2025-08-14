import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

const SkillsSection = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-yellow-50 to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-bl from-red-300/20 to-orange-300/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600">Technologies and tools I work with</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-secondary mb-6 text-center">{category}</h3>
              <div className="space-y-3">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.05 }}
                    className="skill-badge bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100/50 glow-effect"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-700">{skill.name}</span>
                      <i className={`${skill.icon} text-primary`}></i>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 + 0.3 }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
