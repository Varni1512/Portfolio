import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiArrowUpRight } from 'react-icons/fi';

const experiences = [
  {
    company: 'Mittal Alliance Industries Private Limited',
    role: 'Web Developer Intern',
    period: 'May 2025 – Jan 2026',
    location: 'Indore, India (Hybrid)',
    current: true,
    achievements: [
      'Built and maintained full-stack web applications using React.js, Next.js, Tailwind CSS, and Firebase.',
      'Architected scalable frontend components and integrated real-time data handling features.',
      'Managed a team of 6+ developers by assigning tasks, reviewing code, and tracking progress.',
      'Worked closely with clients to understand requirements and deliver business-focused solutions.',
    ]
  },
  {
    company: 'BADVERSE',
    role: 'SDE Intern',
    period: 'Feb 2025 – Apr 2025',
    location: 'Silicon Valley, USA (Remote)',
    current: false,
    achievements: [
      'Designed and developed the company website using React.js and Tailwind CSS from scratch.',
      'Optimized website performance by improving rendering efficiency and reducing load times.',
      'Implemented modular component architecture to ensure maintainability and code scalability.',
      'Maintained production code by fixing issues, enhancing features, and ensuring stability.',
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-12 bg-[#050505] dark:bg-[#050505] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header with Gradient */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3"
          >
            <FiBriefcase className="text-gray-400 dark:text-gray-600" />
            <span className="text-[#A855F7]">
              Work Experience
            </span>
          </motion.h2>
          <div className="h-px w-full bg-gray-200 dark:bg-gray-800" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 transition-all"
            >
              {/* Left Column: Dates */}
              <div className="md:col-span-3">
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400 font-mono mb-1">
                    {exp.period}
                  </span>
                  
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="md:col-span-9 relative">
                {/* Visual Connector Line */}
                <div className="hidden md:block absolute -left-8 top-2 bottom-0 w-px bg-gray-200 dark:bg-[#A855F7] transition-colors" />
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex flex-wrap items-center gap-2">
                  {exp.role}
                  <span className="text-gray-400 dark:text-gray-600 font-normal">at</span>
                  
                  {/* Company Name with Gradient */}
                  <span className="font-extrabold text-[#A855F7]">
                    {exp.company}
                  </span>
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4 font-mono">
                  <FiMapPin size={14} />
                  {exp.location}
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {/* Bullet Point with Gradient on Hover */}
                      <span className="mt-1.5 min-w-[6px] h-[6px] bg-gray-300 dark:bg-gray-600 rounded-sm group-hover:bg-[#A855F7] transition-colors" />
                      <span className="group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Resume Link */}
        <div className="mt-16 flex justify-end">
           <a 
             href="/Varnikumar_Resume.pdf" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all group"
           >
             View Full Resume
             <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-gray-900 dark:text-white group-hover:text-blue-400" />
           </a>
        </div>
        
      </div>
    </section>
  );
};

export default WorkExperience;