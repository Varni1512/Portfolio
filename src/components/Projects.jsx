import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: "CompileVerse - AI-Powered Online Code Compiler",
    category: "AI + Web Projects",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1180&q=80",
    description: "A powerful online compiler supporting Java, C++, C, and Python. Features include Monaco Editor, real-time output, AI Code Review system using Gemini API, and complexity analysis.",
    technologies: ["React", "Monaco Editor", "Gemini API", "Node.js", "Express.js", "Tailwind CSS"],
    liveLink: "https://online-compiler-khaki.vercel.app/",
    githubLink: "https://github.com/Varni1512/OC-frontend"
  },
  {
    id: 2,
    title: "MediTalk - AI-powered healthcare platform",
    category: "AI + Web Projects",
    image: "https://www.livehindustan.com/lh-img/smart/img/2025/03/31/500x281/apppppale_1743396173560_1743396183416.jpg",
    description: "AI-powered healthcare platform providing real-time voice consultations, symptom analysis, and automated prescriptions with 24/7 accessibility.",
    technologies: ["React", "Next.js", "Gemini API", "Vapi API", "Assembly AI", "Clerk", "Tailwind CSS"],
    liveLink: "https://swasthyasathi.vercel.app/",
    githubLink: "https://github.com/Varni1512/SwasthyaSathi"
  },
  {
    id: 3,
    title: "Converso -  AI-Powered Voice Learning Platform",
    category: "AI + Web Projects",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtczYfTSP8Dq2IrXouxHUmkBaikeH6FRIGDfkdNSVNHj0EewnmzX8A7paH6kSYwbVhDc&usqp=CAU",
    description: "A study assistant platform integrating handwriting-to-text conversion, AI-generated quizzes, predictive PYQs, and Google Meet/Classroom integration for enhanced learning.",
    technologies: ["Next.js", "Supabase", "Vapi API", "Clerk", "Sentry", "Shadcn UI"],
    liveLink: "https://saas-seven-khaki.vercel.app/",
    githubLink: "https://github.com/Varni1512/Saas-Project"
  },
  {
    id: 4,
    title: "Terminal Portfolio Website",
    category: "Web Development",
    image: "/portfolio.png",
    description: "Built a unique terminal-style portfolio that simulates a command-line interface, allowing users to navigate through commands like help, projects, and contact.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    liveLink: "https://terminal-portfolio1.vercel.app/",
    githubLink: "https://github.com/Varni1512/terminal-portfolio"
  },
  {
    id: 5,
    title: "PlacementPrep - Study App",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    description: "A fully responsive Placement Preparation platform built with React, Node.js, and Firebase. Features include user authentication, Study Notes, Interview Questions, Coding Question, Resume Templates, Roadmaps, Aptitude Quiz, Internship Companines List etc.. ",
    technologies: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    liveLink: "https://placement-prep-varni.vercel.app/",
    githubLink: "https://github.com/Varni1512/PlacementPrep",
  },
  {
    id: 6,
    title: "QuickLingo - Real-Time Text Translator Chrome Extension",
    category: "Chrome Extension",
    image: "https://res-academy.cache.wpscdn.com/images/seo_posts/20240517/26e62618961cccbf5cad4017bc328e7d.png",
    description: "This Chrome extension allows users to translate selected text in real-time into multiple languages, making it easier to access and understand content across the web.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://github.com/Varni1512/LanguageTranslatorExtension",
    githubLink: "https://github.com/Varni1512/LanguageTranslatorExtension",
  },
  {
    id: 7,
    title: "StudyShield - Study Focus Chrome Extension",
    category: "Chrome Extension",
    image: "https://www.yorku.ca/club/womeninwhitecoats/wp-content/uploads/sites/316/2021/09/Capture-36.png",
    description: "A Chrome extension that enhances study effectiveness by structuring study sessions, blocking distractions, and improving focus time.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://github.com/Varni1512/StudyShield",
    githubLink: "https://github.com/Varni1512/StudyShield",
  },
  {
    id: 8,
    title: "Weather Dashboard",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "A weather application that provides real-time weather data and forecasts for any location. Features include current conditions, 7-day forecast, and interactive maps.",
    technologies: ["HTML", "OpenWeather API", "CSS", "JavaScript"],
    liveLink: "https://varni1512.github.io/Weather/",
    githubLink: "https://github.com/Varni1512/Weather",
  },
  {
    id: 9,
    title: "Netflix Clone",
    category: "Cloned Website",
    image: "https://entrevue.fr/wp-content/uploads/2025/01/netflix-decouvrez-les-nouveautes-de-la-semaine-y-compris-la-tant-attendue-suite-dun-immense-succes-750x410-1.jpg",
    description: "This is a Netflix clone built using React.js. The project showcases movie data fetched from the TMDb (The Movie Database) API. For user authentication and security, Firebase Authentication is used. Additionally, React Toastify is implemented for elegant popup notifications.",
    technologies: ["React", "Firebase", "React Toastify", "Node.js", "Express"],
    liveLink: "https://netflix-clone-tau-five-44.vercel.app/",
    githubLink: "https://github.com/Varni1512/Netflix-Clone",
  },
  {
    id: 10,
    title: "Amazon Clone",
    category: "Cloned Website",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCQbmHeGGvNBVvIKONKNfh4ZGWThL_-zd3w&s",
    description: "Amazon Clone, which replicates the core functionalities of one of the world's largest e-commerce platforms. This project focuses on creating a robust and scalable online shopping experience, incorporating essential features to mimic the user experience of a full-fledged e-commerce platform.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://varni1512.github.io/Amazon-clone/",
    githubLink: "https://github.com/Varni1512/Amazon-clone",
  },
  {
    id: 11,
    title: "Cuberto Clone",
    category: "Cloned Website",
    image: "https://storage.googleapis.com/rc-data-search-imgs-e3f2bfb0d31a3004/img-hash-v1-853e7ac1853e7ac1.jpg",
    description: "Cuberto Clone , A sleek and interactive web experience replicating the unique animations and modern UI/UX of Cuberto's website. This project focuses on smooth transitions, engaging micro-interactions, and a responsive design using HTML, CSS, and JavaScript. It aims to capture the essence of Cuberto's cutting-edge web design while ensuring seamless performance and an intuitive user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://cuberto-clone-azure.vercel.app/",
    githubLink: "https://github.com/Varni1512/Cuberto-Using-Html",
  },
  {
    id: 12,
    title: "N Queens Visualizer",
    category: "Algorithm-Based Project",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJplgYlzzJI_Afc9332ecGWoF-M9cO8nLyw&s",
    description: "The N-Queens Visualizer is an interactive tool that demonstrates the backtracking algorithm used to solve the classic N-Queens problem. The problem involves placing N queens on an N x N chessboard such that no two queens attack each other.",
    technologies: ["HTML", "CSS", "JavaScript", "Data Structures and Algorithms"],
    liveLink: "https://varni1512.github.io/N-queens-visualiser/",
    githubLink: "https://github.com/Varni1512/N-queens-visualiser",
  },
  {
    id: 13,
    title: "Tree Visualizer",
    category: "Algorithm-Based Project",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZ0kTvaCWu722CacBEn2nesn9ldDReCIe5g&s",
    description: "The Tree Visualizer is an interactive tool designed to help users understand different tree data structures and their traversal methods. It provides a graphical representation of tree operations, making it easier to learn Binary Trees, Binary Search Trees (BST), AVL Trees, and more.",
    technologies: ["HTML", "CSS", "JavaScript", "Data Structures and Algorithms"],
    liveLink: "https://varni1512.github.io/Tree-Visualizer/",
    githubLink: "https://github.com/Varni1512/Tree-Visualizer",
  },
  {
    id: 14,
    title: "Sudoku Solver",
    category: "Algorithm-Based Project",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkm19-M31Vp7okMc8GXTYlUAwZt7ZTPZB1jw&s",
    description: "The Sudoku Solver is an interactive tool that utilizes backtracking algorithms to solve Sudoku puzzles efficiently. It provides both automated solving and manual input options for users to experiment with Sudoku solutions.",
    technologies: ["HTML", "CSS", "JavaScript", "Data Structures and Algorithms"],
    liveLink: "https://varni1512.github.io/Sudoku-Solver/",
    githubLink: "https://github.com/Varni1512/Sudoku-Solver",
  },
  {
    id: 15,
    title: "OLA Data Analyst Dashboard",
    category: "Data Analytics",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20250112162244587738/overall.png",
    description: "This project focuses on building a data-driven dashboard to analyze OLA ride patterns, revenue trends, and customer insights for informed business decisions.",
    technologies: ["Pandas", "Microsoft Excel", "Power BI"],
    liveLink: "https://app.powerbi.com/links/utnKqb8MDQ?ctid=09bd1956-edda-4e9a-9543-7c7aa2cf4e81&pbi_source=linkShare",
    githubLink: "https://github.com/Varni1512/OLA-Data-Analyst-Dashboard",
  },
  {
    id: 16,
    title: "Sports Basics - IPL Analysis Project",
    category: "Data Analytics",
    image: "/image.png",
    description: "A comprehensive analysis platform for IPL cricket matches, providing insights into player performance, match statistics, and predictive analytics for future games.",
    technologies: ["Pandas", "Numpy", "Matplotlib", "Seaborn", "Power BI"],
    liveLink: "https://app.powerbi.com/links/Ux-d5dHuBj?ctid=09bd1956-edda-4e9a-9543-7c7aa2cf4e81&pbi_source=linkShare",
    githubLink: "https://github.com/Varni1512/IPL"
  }

]

const categories = ["All", "Web Development", "AI + Web Projects", "Data Analytics", "Cloned Website", "Chrome Extension", "Algorithm-Based Project"]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory)

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
    <section id="projects" className="bg-light dark:bg-dark py-16 md:py-18">
      <div className="container-section -mt-20">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-dark-dark text-dark-light dark:text-light-light hover:bg-primary/10'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card group"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary transition-colors duration-300"
                      >
                        <FiExternalLink className="text-white" size={18} />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary transition-colors duration-300"
                      >
                        <FiGithub className="text-white" size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <FiCode className="text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-light-dark dark:bg-light-dark text-dark-light dark:text-dark-light text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
