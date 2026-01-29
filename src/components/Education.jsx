import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science (AIML)",
    institution: "VIT University",
    location: "Bhopal, India",
    period: "2023 - Ongoing",
    cgpa: "7.83",
    // description removed to keep it clean, focused on achievements
    achievements: [
      "Specialized in AI & ML with focus on Software Engineering.",
      "Qualified for the Internal Round of Smart India Hackathon 2024.",
      "Selected for Amazon ML Summer School — Top 5% among 50,000+ applicants.",
      "Technical Team Lead for Ramanujan Mathematica & SAP Club."
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Baps Swaminarayan Vidhyamandir",
    location: "Gondal, India",
    period: "2019 - 2023",
    percentile: "75.33%",
    achievements: [
      "Completed with a strong foundation in Mathematics.",
      "Received Best Speaker Award.",
      "Recognized for Excellence in Singing & Tabla."
    ]
  },
]

const Education = () => {
  const accentColor = "text-[#A855F7]";
  const bgAccentColor = "bg-[#A855F7]";
  const borderAccentColor = "border-[#A855F7]";

  return (
    <section id="education" className="py-12 bg-[#050505] text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3"
          >
            <FiBookOpen className={`${accentColor}`} />
            <span className={`${accentColor}`}>Education</span>
          </motion.h2>
          <div className="h-px w-full bg-gray-800" />
        </div>

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 relative"
            >
              
              {/* Left Column: Period & Location (The Context) */}
              <div className="md:col-span-3 flex flex-col items-start">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-gray-400 mb-1">
                  <FiCalendar className={accentColor} size={14} />
                  {item.period}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <FiMapPin size={12} />
                  {item.location}
                </div>
              </div>

              {/* Right Column: Main Content */}
              <div className="md:col-span-9 relative md:pl-8 border-l-0 md:border-l border-gray-800">
                
                {/* Timeline Dot (Desktop only) */}
                <div className={`hidden md:block absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-[#050505] border-2 ${borderAccentColor} z-10`} />

                {/* Degree & Institution */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {item.degree}
                    </h3>
                    <h4 className="text-lg text-gray-400 font-medium mt-1">
                      {item.institution}
                    </h4>
                  </div>

                  {/* Grade Badge (The Verified Stat) */}
                  <div className="flex-shrink-0">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-bold border ${bgAccentColor}/10 ${accentColor} ${borderAccentColor}/20`}>
                      <FiAward size={14} />
                      {item.cgpa ? `CGPA: ${item.cgpa}` : `Percentile: ${item.percentile}`}
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-3 mt-4">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      {/* Square Bullet for Technical feel */}
                      <span className={`mt-2 min-w-[6px] h-[6px] ${bgAccentColor} rounded-sm opacity-60 group-hover:opacity-100 transition-opacity`} />
                      <span className="group-hover:text-white transition-colors duration-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education