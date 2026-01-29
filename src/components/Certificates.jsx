import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiCalendar, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi'

const certificatesData = [
  {
    id: 1,
    title: "Amazon ML Summer School 2025",
    issuer: "Amazon",
    date: "Sep 2025",
    description: "Intensive specialization in Machine Learning covering supervised/unsupervised learning, feature engineering, and deployment using AWS.",
    link: "https://drive.google.com/file/d/1vEnZaJ5lAI-ufJnd3qMOSNgFm1OFNk08/view?usp=sharing"
  },
  {
    id: 2,
    title: "API Beginner Path",
    issuer: "Postman",
    date: "Aug 2025",
    description: "Foundational specialization in API development, RESTful principles, JSON handling, and frontend/backend integration.",
    link: "https://drive.google.com/file/d/1Qx5tK6ZS4QyXIrtU3D_jCNwrt-jACPkq/view?usp=sharing"
  },
  {
    id: 3,
    title: "Cloud Computing",
    issuer: "IIT, Kharagpur",
    date: "Apr 2024",
    description: "Covered IaaS, PaaS, SaaS, virtualization, and deployment. Gained hands-on experience with AWS services and cloud architecture.",
    link: "https://drive.google.com/file/d/1d6_CjdYkKPBl_XB27Z9a4ZkWkjHsFZoa/view?usp=sharing"
  },
  {
    id: 4,
    title: "Data Structure And Algorithm",
    issuer: "Apna College",
    date: "Jan 2024",
    description: "Comprehensive DSA with Java: arrays, trees, graphs, DP. Enhanced problem-solving skills via LeetCode & GeeksforGeeks.",
    link: "https://drive.google.com/file/d/1Otiazc-a94GPLCMyoPmTL8AvkHOsBBJM/view?usp=sharing"
  },
  {
    id: 5,
    title: "Full Stack Web Development",
    issuer: "Apna College",
    date: "Feb 2025",
    description: "Mastered MERN stack (MongoDB, Express, React, Node.js). Built full-stack apps with authentication and database integration.",
    link: "https://mycourse.app/Ehj8D226dLRqjaPUj"
  },
  {
    id: 6,
    title: "Master in C++",
    issuer: "GeeksforGeeks",
    date: "Mar 2023",
    description: "Deep dive into C++, OOP, STL, and competitive programming. Focused on writing efficient algorithms and code optimization.",
    link: "https://drive.google.com/file/d/1Cmwdo2EaoIm2K6vZm3N3Jw8iLdsyuO5z/view?usp=sharing"
  },
  {
    id: 7,
    title: "AWS Certified Solution Architect",
    issuer: "GeeksforGeeks",
    date: "Nov 2020",
    description: "Certification validating expertise in developing, deploying, and debugging scalable cloud-based applications using AWS.",
    link: "https://www.geeksforgeeks.org/certificate/83fc22ef303eb035b17bf75304bd0e7c?utm_source=socials&utm_medium=cc_link"
  },
  {
    id: 8,
    title: "Bootstrap",
    issuer: "GeeksforGeeks",
    date: "Dec 2024",
    description: "Expertise in responsive web design, grid systems, components, and modern UI/UX styling using Bootstrap framework.",
    link: "https://www.geeksforgeeks.org/certificate/48284ff243ca047252213e67e7d92648?utm_source=socials&utm_medium=cc_link"
  },
  {
    id: 9,
    title: "Vulture Hackathon (Top 50)",
    issuer: "GeeksforGeeks",
    date: "Dec 2024",
    description: "Secured Top 50 rank among 1000+ participants. Developed innovative solutions under tight competitive constraints.",
    link: "https://drive.google.com/file/d/1Q6NYr1-uNAM0Uf2O6W5WianqcnqcSVUd/view?usp=sharing"
  },
  {
    id: 10,
    title: "ML & Data Science (Python)",
    issuer: "Udemy",
    date: "Apr 2024",
    description: "Implemented regression, classification, and clustering algorithms using NumPy, Pandas, Scikit-Learn, and TensorFlow.",
    link: "https://drive.google.com/file/d/1k4Beq2MM6ZVeQIqhbEPIXQaW4XMBUcrH/view?usp=sharing"
  },
  {
    id: 11,
    title: "SIH 2024 Internal Round",
    issuer: "VIT Bhopal",
    date: "Feb 2025",
    description: "Qualified for Smart India Hackathon Internal Round. Worked on innovative web design solutions and rapid prototyping.",
    link: "https://drive.google.com/file/d/1CNPyjc9WkAwUjaOmtuu9X3TCFWbxbNIl/view?usp=sharing"
  },
  {
    id: 12,
    title: "Postman API Expert",
    issuer: "Postman",
    date: "Oct 2024",
    description: "Expertise in API development, testing automation, and collaboration workflows using Postman's ecosystem.",
    link: "https://drive.google.com/file/d/1AORPZLnEjo4--SfqEcXF4CFK8KiK6FJl/view?usp=sharing"
  },
  {
    id: 13,
    title: "HacktoberFest Contributor",
    issuer: "Hacktoberfest",
    date: "Oct 2024",
    description: "Contributed to open-source projects, improving coding skills and collaborating with the global developer community.",
    link: "https://drive.google.com/file/d/1hpPN6e1h3Kr_FC4-CDip5E2j21CqnOtp/view?usp=sharing"
  },
]

const Certificates = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Theme Constants
  const accentColor = "text-[#A855F7]";
  const bgAccentColor = "bg-[#A855F7]";
  const borderAccentColor = "border-[#A855F7]";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="certificates" className="py-12 bg-[#0a0a0a] text-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3"
          >
            <FiAward className={`${accentColor}`} />
            <span className={`${accentColor}`}>Certifications</span>
          </motion.h2>
          <div className="h-px w-full bg-gray-800" />
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certificatesData.map((certificate) => (
            <motion.div 
              key={certificate.id}
              className="group relative flex flex-col h-full bg-[#121212] rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden"
              variants={itemVariants}
            >
              
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${bgAccentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="p-6 flex flex-col flex-grow">
                {/* Header: Icon & Date */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2.5 rounded-lg ${bgAccentColor}/10 ${accentColor}`}>
                    <FiAward size={22} />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">
                    <FiCalendar size={12} />
                    {certificate.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 leading-snug group-hover:text-[#A855F7] transition-colors">
                  {certificate.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 mb-4 text-sm font-medium text-gray-300">
                  <FiCheckCircle size={14} className={accentColor} />
                  {certificate.issuer}
                </div>
                
                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {certificate.description}
                </p>

                {/* Footer: Link (Pushed to bottom) */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <a 
                    href={certificate.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:${accentColor} transition-colors group/link`}
                  >
                    View Credential
                    <FiArrowUpRight className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates