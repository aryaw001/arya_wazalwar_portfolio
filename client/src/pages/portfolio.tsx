import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

import { motion } from "framer-motion";

const Portfolio = () => {
  useEffect(() => {
    // Add Font Awesome for icons
    const fontAwesome = document.createElement("link");
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    fontAwesome.rel = "stylesheet";
    document.head.appendChild(fontAwesome);

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll(".fade-in").forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      if (document.head.contains(fontAwesome)) {
        document.head.removeChild(fontAwesome);
      }
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 text-slate-900 relative overflow-hidden"
    >
      {/* Enhanced Particle Background */}
      <div className="particle-bg">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-yellow-500 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/5 left-3/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-25"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fade-in"
      >
        <Navigation />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="fade-in"
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="fade-in"
      >
        <AboutSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="fade-in"
      >
        <SkillsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="fade-in"
      >
        <ExperienceSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="fade-in"
      >
        <ProjectsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="fade-in"
      >
        <EducationSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        className="fade-in"
      >
        <ContactSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="fade-in"
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Portfolio;
