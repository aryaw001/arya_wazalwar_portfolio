import { portfolioData } from "@/lib/portfolio-data";
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">{personal.name}</h3>
          <p className="text-slate-300 mb-6">{personal.title}</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href={`mailto:${personal.email}`}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="border-t border-slate-600 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 {personal.name}. All rights reserved. Built with passion for data science and innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
