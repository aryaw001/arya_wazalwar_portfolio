import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-07-22 at 14.44.07_46ce7c69_1753175698213.jpg";

import { useState, useRef, useEffect } from "react";
import Typewriter from "./Typewriter";

const HeroSection = () => {
  const { personal } = portfolioData;
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const handleContactClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    window.open("/api/resume/download", "_blank");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-100/30 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-300 rounded-full floating-element opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-amber-400 rounded-full floating-element opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-400 rounded-full floating-element opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20 perspective-1000"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4"
            >
              <Sparkles className="w-8 h-8 text-primary mb-2" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 relative z-30">
              Hi, I'm{" "}
              <span className="text-gray-900 font-bold">
                <Typewriter text={personal.name} />
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-slate-600 mb-8 leading-relaxed"
            >
              {personal.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                onClick={handleContactClick}
                className="bg-primary text-white px-8 py-3 font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 glow-effect pulse-glow"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={handleResumeDownload}
                className="border-2 border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 glow-effect"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex space-x-6"
            >
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-slate-600 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transition: "transform 0.1s ease-out" }}
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:flex justify-center relative"
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl morphing-blob opacity-20 blur-3xl transform scale-110"></div>

            {/* Profile image container */}
            <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 glow-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20 z-10"></div>
              <img
                src={profileImage}
                alt={personal.name}
                className="w-full h-full object-cover object-center"
              />

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border-4 border-gradient-to-r from-orange-400 via-red-500 to-orange-400 animate-pulse"></div>
            </div>

            {/* Floating decoration elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full floating-element opacity-80 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full floating-element opacity-70 animate-float" style={{ animationDelay: '3s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
