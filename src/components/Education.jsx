import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi'

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science(AIML)",
    institution: "VIT University",
    location: "Bhopal, India",
    period: "2023 - Ongoing",
    cgpa: "8.05",
    description: "Specialized in Artificial Intelligence and Machine Learning. Focused on Software Engineering and User Interface Design. Participated in multiple hackathons and coding competitions.",
    achievements: [
      "Qualified for the Internal Round of Smart India Hackathon 2024",
      "Ranked in the Top 50 of Vulture Hackathon among 1,000+ participants",
      "Technical Team Lead for Ramanujan Mathematica and SAP Club & Gujarati Club"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Baps Swaminarayan Vidhyamandir",
    location: "Gondal, India",
    period: "2019 - 2023",
    percentile: "75.33",
    description: "Completed Higher Secondary Education with a strong foundation in Mathematics. ",
    achievements: [
      "Best Speaker Award",
      "Excellence in Singing",
      "Skilled Tabla Player"
    ]
  },
]

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.3
      }
    }
  }

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  }

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  return (
    <section id="education" className="py-16 md:py-18">
      <div className="container-sectionv -mt-18">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Education
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="mt-12 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              className="timeline-item"
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="timeline-dot"
                variants={dotVariants}
                whileHover={{ scale: 1.2, backgroundColor: "#3b82f6" }}
              ></motion.div>
              <motion.div 
                className="card mb-6"
                variants={cardHoverVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <motion.h3 
                    className="text-xl font-bold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.3 + 0.4, duration: 0.5 }}
                  >
                    {item.degree}
                  </motion.h3>
                  <motion.div 
                    className="flex items-center text-primary mt-2 md:mt-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                  >
                    <motion.div variants={iconVariants}>
                      <FiCalendar className="mr-1" />
                    </motion.div>
                    <span className="text-sm">{item.period}</span>
                  </motion.div>
                </div>
                
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="flex items-center mr-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.3 + 0.6, duration: 0.4 }}
                  >
                    <motion.div variants={iconVariants}>
                      <FiBookOpen className="text-primary mr-2" />
                    </motion.div>
                    <span className="text-gray-600 dark:text-gray-300">{item.institution}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.3 + 0.7, duration: 0.4 }}
                  >
                    <motion.div variants={iconVariants}>
                      <FiMapPin className="text-primary mr-2" />
                    </motion.div>
                    <span className="text-gray-600 dark:text-gray-300">{item.location}</span>
                  </motion.div>
                </div>
                
                {/* <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p> */}
                
                {item.cgpa && (
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.3 + 0.8, duration: 0.4 }}
                  >
                    <strong>CGPA:</strong> {item.cgpa}
                  </motion.p>
                )}
                
                {item.percentile && (
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.3 + 0.8, duration: 0.4 }}
                  >
                    <strong>Percentile:</strong> {item.percentile}
                  </motion.p>
                )}
                
                <div>
                  <motion.h4 
                    className="font-semibold mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.3 + 0.9, duration: 0.4 }}
                  >
                    Key Achievements:
                  </motion.h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 cursor-pointer">
                    {item.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        custom={i}
                        variants={achievementVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        whileHover={{ 
                          x: 5, 
                          color: "#3b82f6",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education