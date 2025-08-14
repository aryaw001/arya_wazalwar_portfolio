import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Code, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Experience</h2>
          <p className="text-lg text-slate-600">Professional experience and internships</p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-8 hidden md:flex">
                    <Code className="w-8 h-8" />
                  </div>
                  <div className="flex-1 bg-slate-50 p-8 rounded-xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-secondary">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-slate-600 font-medium">{exp.duration}</span>
                    </div>
                    <div className="space-y-3 text-slate-600 mb-6">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <p key={achievementIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                          {achievement}
                        </p>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
