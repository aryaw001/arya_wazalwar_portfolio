import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

const EducationSection = () => {
  const { education, certificates } = portfolioData;

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Education & Certifications</h2>
          <p className="text-lg text-slate-600">Academic background and professional certifications</p>
        </motion.div>
        
        {/* Education */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-secondary mb-8"
          >
            Education
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-xl"
              >
                <div className="text-center">
                  <img
                    src={edu.image}
                    alt={`${edu.institution} logo`}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-slate-200"
                  />
                  <h4 className="font-bold text-secondary mb-2">{edu.degree}</h4>
                  <p className="text-slate-600 mb-2">{edu.field}</p>
                  <p className="text-primary font-semibold mb-2">{edu.grade}</p>
                  <p className="text-sm text-slate-500">{edu.institution}</p>
                  <p className="text-sm text-slate-500">{edu.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-secondary mb-8"
          >
            Professional Certifications
          </motion.h3>

          {/* --- This is the new part --- */}
          {/* Replace the old grid with this animated button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href="DRIVE_LINK" // <-- PASTE YOUR COPIED LINK HERE
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice for external links
              className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              View All Certificates
              {/* Optional: An icon to show it's an external link */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default EducationSection;
