import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiCode, FiLayers } from 'react-icons/fi'

const projects = [
  {
    id: 0,
    title: "Macbook 3D website",
    category: "Web Dev",
    image: "/mac.png",
    description: "Apple-style 3D website built with React, Three.js, GSAP, and TailwindCSS! Showcase products in immersive 3D scenes, scroll-animated models, and pinned sections. Featuring responsive design, smooth timeline animations, and visually striking image transitions—perfect for developers creating interactive, modern web experiences.",
    technologies: ["React", "Three.js", "GSAP", "TailwindCSS"],
    liveLink: "https://macbook-sigma.vercel.app/",
    githubLink: "https://github.com/Varni1512/Macbook"
  },
  {
    id: 1,
    title: "KisanHub - MERN Based Smart Agriculture Marketplace",
    category: "AI + Web",
    image: "/kisan.png",
    description: "An all-in-one digital platform for farmers, buyers, and medicine shopkeepers. Features include role-based dashboards, direct crop selling, medicine marketplace, order management, real-time chat, and secure authentication to reduce middlemen dependency and improve farmer profitability.",
    technologies: ["React", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    liveLink: "https://kisanhub.vercel.app/",
    githubLink: "https://github.com/Varni1512/KisanHub"
  },
  {
    id: 2,
    title: "CompileVerse - AI-Powered Online Code Compiler",
    category: "AI + Web",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1180&q=80",
    description: "A powerful online compiler supporting Java, C++, C, and Python. Features include Monaco Editor, real-time output, AI Code Review system using Gemini API, and complexity analysis.",
    technologies: ["React", "Monaco Editor", "Gemini API", "Node.js", "Express.js", "Tailwind CSS"],
    liveLink: "https://online-compiler-khaki.vercel.app/",
    githubLink: "https://github.com/Varni1512/OC-frontend"
  },
  {
    id: 3,
    title: "MediTalk - AI-powered healthcare platform",
    category: "AI + Web",
    image: "https://www.livehindustan.com/lh-img/smart/img/2025/03/31/500x281/apppppale_1743396173560_1743396183416.jpg",
    description: "AI-powered healthcare platform providing real-time voice consultations, symptom analysis, and automated prescriptions with 24/7 accessibility.",
    technologies: ["React", "Next.js", "Gemini API", "Vapi API", "Assembly AI", "Clerk", "Tailwind CSS"],
    liveLink: "https://swasthyasathi.vercel.app/",
    githubLink: "https://github.com/Varni1512/SwasthyaSathi"
  },
  {
    id: 4,
    title: "Converso -  AI-Powered Voice Learning Platform",
    category: "AI + Web",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtczYfTSP8Dq2IrXouxHUmkBaikeH6FRIGDfkdNSVNHj0EewnmzX8A7paH6kSYwbVhDc&usqp=CAU",
    description: "A study assistant platform integrating handwriting-to-text conversion, AI-generated quizzes, predictive PYQs, and Google Meet/Classroom integration for enhanced learning.",
    technologies: ["Next.js", "Supabase", "Vapi API", "Clerk", "Sentry", "Shadcn UI"],
    liveLink: "https://saas-seven-khaki.vercel.app/",
    githubLink: "https://github.com/Varni1512/Saas-Project"
  },
  {
    id: 5,
    title: "PlacementPrep - Study App",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    description: "A fully responsive Placement Preparation platform built with React, Node.js, and Firebase. Features include user authentication, Study Notes, Interview Questions, Coding Question, Resume Templates, Roadmaps, Aptitude Quiz, Internship Companines List etc.. ",
    technologies: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    liveLink: "https://placement-prep-varni.vercel.app/",
    githubLink: "https://github.com/Varni1512/PlacementPrep",
  },
  {
    id: 6,
    title: "QuickLingo - Real-Time Text Translator Chrome Extension",
    category: "Extension",
    image: "https://res-academy.cache.wpscdn.com/images/seo_posts/20240517/26e62618961cccbf5cad4017bc328e7d.png",
    description: "This Chrome extension allows users to translate selected text in real-time into multiple languages, making it easier to access and understand content across the web.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://github.com/Varni1512/LanguageTranslatorExtension",
    githubLink: "https://github.com/Varni1512/LanguageTranslatorExtension",
  },
  {
    id: 7,
    title: "StudyShield - Study Focus Chrome Extension",
    category: "Extension",
    image: "https://www.yorku.ca/club/womeninwhitecoats/wp-content/uploads/sites/316/2021/09/Capture-36.png",
    description: "A Chrome extension that enhances study effectiveness by structuring study sessions, blocking distractions, and improving focus time.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://github.com/Varni1512/StudyShield",
    githubLink: "https://github.com/Varni1512/StudyShield",
  },
  {
    id: 8,
    title: "Weather Dashboard",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "A weather application that provides real-time weather data and forecasts for any location. Features include current conditions, 7-day forecast, and interactive maps.",
    technologies: ["HTML", "OpenWeather API", "CSS", "JavaScript"],
    liveLink: "https://varni1512.github.io/Weather/",
    githubLink: "https://github.com/Varni1512/Weather",
  },
  {
    id: 9,
    title: "Netflix Clone",
    category: "Clones",
    image: "https://entrevue.fr/wp-content/uploads/2025/01/netflix-decouvrez-les-nouveautes-de-la-semaine-y-compris-la-tant-attendue-suite-dun-immense-succes-750x410-1.jpg",
    description: "This is a Netflix clone built using React.js. The project showcases movie data fetched from the TMDb (The Movie Database) API. For user authentication and security, Firebase Authentication is used. Additionally, React Toastify is implemented for elegant popup notifications.",
    technologies: ["React", "Firebase", "React Toastify", "Node.js", "Express"],
    liveLink: "https://netflix-clone-tau-five-44.vercel.app/",
    githubLink: "https://github.com/Varni1512/Netflix-Clone",
  },
  {
    id: 10,
    title: "Amazon Clone",
    category: "Clones",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCQbmHeGGvNBVvIKONKNfh4ZGWThL_-zd3w&s",
    description: "Amazon Clone, which replicates the core functionalities of one of the world's largest e-commerce platforms. This project focuses on creating a robust and scalable online shopping experience, incorporating essential features to mimic the user experience of a full-fledged e-commerce platform.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://varni1512.github.io/Amazon-clone/",
    githubLink: "https://github.com/Varni1512/Amazon-clone",
  },
  {
    id: 11,
    title: "Cuberto Clone",
    category: "Clones",
    image: "https://storage.googleapis.com/rc-data-search-imgs-e3f2bfb0d31a3004/img-hash-v1-853e7ac1853e7ac1.jpg",
    description: "Cuberto Clone , A sleek and interactive web experience replicating the unique animations and modern UI/UX of Cuberto's website. This project focuses on smooth transitions, engaging micro-interactions, and a responsive design using HTML, CSS, and JavaScript. It aims to capture the essence of Cuberto's cutting-edge web design while ensuring seamless performance and an intuitive user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://cuberto-clone-azure.vercel.app/",
    githubLink: "https://github.com/Varni1512/Cuberto-Using-Html",
  },
  {
    id: 12,
    title: "N Queens Visualizer",
    category: "Algorithms",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJplgYlzzJI_Afc9332ecGWoF-M9cO8nLyw&s",
    description: "The N-Queens Visualizer is an interactive tool that demonstrates the backtracking algorithm used to solve the classic N-Queens problem. The problem involves placing N queens on an N x N chessboard such that no two queens attack each other.",
    technologies: ["HTML", "CSS", "JavaScript", "Data Structures and Algorithms"],
    liveLink: "https://varni1512.github.io/N-queens-visualiser/",
    githubLink: "https://github.com/Varni1512/N-queens-visualiser",
  },
  {
    id: 13,
    title: "Tree Visualizer",
    category: "Algorithms",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZ0kTvaCWu722CacBEn2nesn9ldDReCIe5g&s",
    description: "The Tree Visualizer is an interactive tool designed to help users understand different tree data structures and their traversal methods. It provides a graphical representation of tree operations, making it easier to learn Binary Trees, Binary Search Trees (BST), AVL Trees, and more.",
    technologies: ["HTML", "CSS", "JavaScript", "Data Structures and Algorithms"],
    liveLink: "https://varni1512.github.io/Tree-Visualizer/",
    githubLink: "https://github.com/Varni1512/Tree-Visualizer",
  },
  {
    id: 14,
    title: "Sudoku Solver",
    category: "Algorithms",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkm19-M31Vp7okMc8GXTYlUAwZt7ZTPZB1jw&s",
    description: "The Sudoku Solver is an interactive tool that utilizes backtracking algorithms to solve Sudoku puzzles efficiently. It provides both automated solving and manual input options for users to experiment with Sudoku solutions.",
    technologies: ["HTML", "CSS", "JavaScript", "Data Structures and Algorithms"],
    liveLink: "https://varni1512.github.io/Sudoku-Solver/",
    githubLink: "https://github.com/Varni1512/Sudoku-Solver",
  },

]

// Simplified Categories for cleaner UI
const categories = ["All", "AI + Web", "Web Dev", "Clones", "Extension", "Algorithms"]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory)

  // Use the same purple color for accents
  const accentColor = "text-[#A855F7]";
  const bgAccentColor = "bg-[#A855F7]";

  return (
    <section id="projects" className="py-12 relative bg-[#0a0a0a] text-white overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-[#A855F7]">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A curated selection of my work spanning AI, full-stack development, and data analytics.
          </motion.p>
        </div>

        {/* Category Filter - Sliding Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 border border-white/5 rounded-full backdrop-blur-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${activeCategory === category ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 ${bgAccentColor} rounded-full`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-[#121212] border border-white/5 overflow-hidden hover:border-white/10 transition-colors"
              >
                {/* Project Image & Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    // Add error handling for images
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400?text=Project+Image"; // Fallback image
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white rounded-full text-black hover:${bgAccentColor} hover:text-black transition-all transform hover:scale-110 shadow-lg`}
                      title="View Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white rounded-full text-black hover:${bgAccentColor} hover:text-black transition-all transform hover:scale-110 shadow-lg`}
                      title="View GitHub Repo"
                    >
                      <FiGithub size={20} />
                    </a>
                  </div>

                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-black/70 text-white backdrop-blur-md rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#A855F7] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* "View More on GitHub" Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Varni1512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium text-white group"
          >
            <FiGithub className="group-hover:text-[#A855F7] transition-colors" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects