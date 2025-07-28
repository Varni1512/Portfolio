import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    company: 'Mittal Alliance Industries Private Limited',
    role: 'Web Developer Intern',
    period: 'May 2025 – Present',
    location: 'Indore, India',
    achievements: [
      'Architected and Deployed multiple high-performance web applications, contributing to projects like Quantera AI, Snix, Bruno, Pankh, Dr. Pawan Verma and several others.',
      'Redesigned and Overhauled key UI components with React.js and Tailwind CSS, Improving mobile responsiveness by 40% and optimizing cross-device performance.',
      'Created immersive user experiences by integrating Framer Motion and GSAP animations, Growing user session duration by 25% and boosting interactivity.',
      'Conceptualized, Coded, and Tested reusable, scalable components; Restructured codebases to achieve 40% faster renders and a smoother UX.'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const achievementVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-16 md:py-18 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center gap-3 justify-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FiBriefcase size={32} className="text-blue-600" /> 
          Work Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 top-0 w-0.5 h-full bg-blue-200 dark:bg-blue-800" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative pl-12 pb-8"
                variants={itemVariants}
                transition={{ duration: 0.6 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
                
                {/* Experience card */}
                <div 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                          {exp.company}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {exp.role}
                        </h4>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 lg:text-right">
                        <div className="font-medium">{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <motion.ul 
                    className="space-y-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {exp.achievements.map((achievement, achievementIdx) => (
                      <motion.li
                        key={achievementIdx}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        variants={achievementVariants}
                        transition={{ duration: 0.4, delay: achievementIdx * 0.1 }}
                      >
                        <span className="text-blue-600 mt-2 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;