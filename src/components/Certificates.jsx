import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi'

const certificatesData = [
  {
    id: 1,
    title: "Amazon ML Summer School 2025",
    issuer: "Amazon",
    date: "September 2025",
    description: "Intensive specialization in Machine Learning covering supervised and unsupervised learning, feature engineering, model evaluation, and deployment. Completed hands-on projects using Python and AWS, strengthening practical ML skills and data-driven problem solving.",
    link: "https://drive.google.com/file/d/1Otiazc-a94GPLCMyoPmTL8AvkHOsBBJM/view?usp=sharing"
  },
  {
    id: 2,
    title: "API Beginner Path",
    issuer: "Postman",
    date: "August 2025",
    description: "Foundational specialization in API development and usage, covering RESTful principles, HTTP methods, JSON handling, and integration with frontend and backend applications. Completed hands-on exercises building and consuming APIs to enhance practical programming skills.",
    link: "https://drive.google.com/file/d/1Otiazc-a94GPLCMyoPmTL8AvkHOsBBJM/view?usp=sharing"
  },
  {
    id: 3,
    title: "Cloud Computing",
    issuer: "IIT, Kharagpur",
    date: "April 2024",
    description: "Specialization in Cloud Computing covering IaaS, PaaS, SaaS, virtualization, and deployment on cloud platforms. Gained hands-on experience with AWS services, cloud architecture design, and scalable system implementation.",
    link: "https://drive.google.com/file/d/1Otiazc-a94GPLCMyoPmTL8AvkHOsBBJM/view?usp=sharing"
  },
  {
    id: 4,
    title: "Data Structure And Algorithm with Java",
    issuer: "Apna College",
    date: "Jan 2024",
    description: "Specialization covering DSA with Java, including arrays, linked lists, stacks, queues, trees, graphs, and dynamic programming. Solved problems on LeetCode and GeeksforGeeks, enhancing problem-solving and algorithmic thinking.",
    link: "https://drive.google.com/file/d/1Otiazc-a94GPLCMyoPmTL8AvkHOsBBJM/view?usp=sharing"
  },
  {
    id: 5,
    title: "Full Stack Web Development",
    issuer: "Apna College",
    date: "February 2025",
    description: "Specialization covering HTML, CSS, JavaScript, Node.js, Express, and MongoDB. Built multiple full-stack applications with authentication and database integration.",
    link: "https://mycourse.app/Ehj8D226dLRqjaPUj"
  },
  {
    id: 6,
    title: "Master in C++",
    issuer: "GeeksforGeeks",
    date: "March 2023",
    description: "Mastered C++, covering OOP, STL, DSA, and competitive programming. Built efficient algorithms, optimized code, and solved problems on LeetCode and Codeforces to enhance problem-solving skills.",
    link: "https://drive.google.com/file/d/1Cmwdo2EaoIm2K6vZm3N3Jw8iLdsyuO5z/view?usp=sharing"
  },
  {
    id: 7,
    title: "AWS Certified Solution Architect Associate",
    issuer: "GeeksforGeeks",
    date: "November 2020",
    description: "Certification validating expertise in developing, deploying, and debugging cloud-based applications using AWS.",
    link: "https://www.geeksforgeeks.org/certificate/83fc22ef303eb035b17bf75304bd0e7c?utm_source=socials&utm_medium=cc_link"
  },
  {
    id: 8,
    title: "Bootstrap",
    issuer: "GeeksforGeeks",
    date: "December 2024",
    description: "Completed a Bootstrap course from GeeksforGeeks (GFG), gaining expertise in responsive web design, grid systems, components, and UI/UX styling to enhance frontend development.",
    link: "https://www.geeksforgeeks.org/certificate/48284ff243ca047252213e67e7d92648?utm_source=socials&utm_medium=cc_link"
  },
  {
    id: 9,
    title: "Vulture Hackathon",
    issuer: "GeeksforGeeks",
    date: "December 2024",
    description: "Participated in the Vulture Hackathon, securing a top 50 rank. Developed innovative solutions under competitive constraints, enhancing problem-solving and teamwork skills.",
    link: "https://drive.google.com/file/d/1Q6NYr1-uNAM0Uf2O6W5WianqcnqcSVUd/view?usp=sharing"
  },
  {
    id: 10,
    title: "Machine Learning & Data Science for Beginners in Python",
    issuer: "Udemy",
    date: "April 2024",
    description: "Covered fundamental ML concepts, data preprocessing, visualization, feature engineering, and model building using NumPy, Pandas, Matplotlib, Scikit-Learn, and TensorFlow. Implemented regression, classification, and clustering algorithms to analyze and interpret data. ",
    link: "https://drive.google.com/file/d/1k4Beq2MM6ZVeQIqhbEPIXQaW4XMBUcrH/view?usp=sharing"
  },
  {
    id: 11,
    title: "Qualified for the Internal Round of Smart India Hackthon 2024",
    issuer: "VIT Bhopal",
    date: "February 2025",
    description: "Qualified for the Internal Round of Smart India Hackathon (SIH) 2024, where I worked on an innovative solution involving Web Design. Gained hands-on experience in problem-solving, teamwork, and rapid prototyping.",
    link: "https://drive.google.com/file/d/1CNPyjc9WkAwUjaOmtuu9X3TCFWbxbNIl/view?usp=sharing"
  },
  {
    id: 12,
    title: "Postman API",
    issuer: "Postman",
    date: "October 2024",
    description: "Completed the Postman API course, gaining expertise in API development, testing, automation, and collaboration using Postman’s powerful features.",
    link: "https://drive.google.com/file/d/1AORPZLnEjo4--SfqEcXF4CFK8KiK6FJl/view?usp=sharing"
  },
  {
    id: 13,
    title: "HacktoberFest",
    issuer: "Hacktoberfest",
    date: "October 2024",
    description: "Successfully participated in Hacktoberfest, contributing to open-source projects, improving coding skills, and collaborating with the developer community.",
    link: "https://drive.google.com/file/d/1hpPN6e1h3Kr_FC4-CDip5E2j21CqnOtp/view?usp=sharing"
  },
]

const Certificates = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="certificates" className="bg-light dark:bg-dark py-16 md:py-18">
      <div className="container-section -mt-20">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certificatesData.map((certificate) => (
            <motion.div 
              key={certificate.id}
              className="card group  bg-white dark:bg-dark-dark cursor-pointer"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4 ">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-3">
                  <FiAward size={24} />
                </div>
                <h3 className="text-xl font-bold">{certificate.title}</h3>
              </div>
              
              <div className="flex items-center mb-4">
                <span className="text-gray-600 dark:text-gray-300 font-medium">{certificate.issuer}</span>
                <span className="mx-2">•</span>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <FiCalendar className="mr-1" size={14} />
                  <span className="text-sm">{certificate.date}</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {certificate.description}
              </p>
              
              <a 
                href={certificate.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
              >
                View Certificate
                <FiExternalLink className="ml-1" size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
