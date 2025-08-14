import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Trophy, Award, Users, Target } from "lucide-react";

const AboutSection = () => {
  const { personal, achievements } = portfolioData;

  const achievementIcons = [Trophy, Award, Users, Target];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Result-oriented and analytical pre-final year student with a strong focus on Product Data Science
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">My Journey</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {personal.about}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">Current Focus</h4>
                <p className="text-sm text-slate-600">Product Data Science & AI/ML Innovation</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">Education</h4>
                <p className="text-sm text-slate-600">B.Tech E&TC (CGPA: 7.91/10)</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-secondary mb-6">Key Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievementIcons[index] || Trophy;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-slate-600">{achievement}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
