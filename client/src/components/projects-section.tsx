import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const { projects } = portfolioData;

  const mockProjectGraphics = {
    0: (
      <div className="absolute inset-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
        <div className="p-4 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex space-x-2">
              <div className="h-2 bg-white/30 rounded flex-1"></div>
              <div className="h-2 bg-white/50 rounded w-12"></div>
            </div>
            <div className="flex space-x-2">
              <div className="h-2 bg-white/40 rounded w-16"></div>
              <div className="h-2 bg-white/30 rounded flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    ),
    1: (
      <div className="absolute inset-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
        <div className="p-4 h-full">
          <div className="flex justify-between items-center mb-4">
            <div className="w-6 h-6 bg-white/30 rounded-full"></div>
            <div className="text-white text-xs font-medium">ENVIROAI</div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-white/20 rounded h-8"></div>
            <div className="bg-white/30 rounded h-8"></div>
            <div className="bg-white/25 rounded h-8"></div>
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-white/40 rounded w-full"></div>
            <div className="h-1 bg-white/30 rounded w-3/4"></div>
            <div className="h-1 bg-white/35 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    ),
    2: (
      <div className="absolute inset-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white text-xs font-medium">SHL AI Assistant</div>
            <div className="w-4 h-4 bg-white/30 rounded-full"></div>
          </div>
          <div className="flex-1 space-y-3">
            <div className="bg-white/20 rounded-lg p-2 ml-8">
              <div className="h-1 bg-white/40 rounded w-16"></div>
            </div>
            <div className="bg-white/30 rounded-lg p-2 mr-8">
              <div className="h-1 bg-white/60 rounded w-20"></div>
            </div>
          </div>
          <div className="bg-white/20 rounded-full h-6 flex items-center px-3">
            <div className="h-1 bg-white/40 rounded flex-1"></div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600">Showcasing my work in data science and web development</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 3,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
              }}
              className="project-card bg-white rounded-2xl shadow-xl overflow-hidden relative group glow-effect"
            >
              <img
                src={project.image}
                alt={`${project.title} cover image`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium transform hover:scale-105 transition-all duration-200 ${
                        project.category === "Data Science"
                          ? "bg-orange-100 text-orange-800 hover:bg-orange-200"
                          : project.category === "Environmental Tech"
                          ? "bg-amber-100 text-amber-800 hover:bg-amber-200"
                          : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-blue-700 font-medium p-0"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Project
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-600 hover:text-slate-800 font-medium p-0"
                    onClick={() => window.open("https://github.com/aryaw001/", '_blank')}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
