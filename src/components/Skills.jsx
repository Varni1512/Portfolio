import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiCode, FiLayout, FiDatabase, FiServer, FiCpu,
  FiTool, FiGitBranch, FiUploadCloud, FiMonitor
} from 'react-icons/fi'

// Skills Data - Grouped logicaly
const skillsData = [
  {
    category: "Languages",
    icon: <FiCode />,
    color: "text-blue-500",
    glow: "group-hover:shadow-blue-500/50",
    border: "group-hover:border-blue-500/50",
    skills: ["Java", "Python","C++", "JavaScript", "TypeScript"]
  },
  {
    category: "Frontend",
    icon: <FiLayout />,
    color: "text-purple-500",
    glow: "group-hover:shadow-purple-500/50",
    border: "group-hover:border-purple-500/50",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML","CSS", "BootStrap"]
  },
  {
    category: "Backend",
    icon: <FiServer />,
    color: "text-emerald-500",
    glow: "group-hover:shadow-emerald-500/50",
    border: "group-hover:border-emerald-500/50",
    skills: ["Node.js", "Express", "REST APIs", ".NET"]
  },
  {
    category: "Database",
    icon: <FiDatabase />,
    color: "text-amber-500",
    glow: "group-hover:shadow-amber-500/50",
    border: "group-hover:border-amber-500/50",
    skills: ["MongoDB", "MySQL", "Firebase"]
  },
  {
    category: "DevOps & Cloud",
    icon: <FiUploadCloud />,
    color: "text-cyan-500",
    glow: "group-hover:shadow-cyan-500/50",
    border: "group-hover:border-cyan-500/50",
    skills: ["Git/GitHub", "Docker", "AWS", "Vercel", "Netlify"]
  },
  {
    category: "Design & Tools",
    icon: <FiTool />,
    color: "text-pink-500",
    glow: "group-hover:shadow-pink-500/50",
    border: "group-hover:border-pink-500/50",
    skills: ["Figma", "VS Code", "Postman"]
  }
]

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false, // Re-animate when scrolling back up (optional)
  })

  return (
    <section id="skills" className="py-12 relative bg-[#0a0a0a] overflow-hidden text-white">
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0a] to-[#0a0a0a]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-[#A855F7]">Tech Ecosystem</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-[#A855F7] rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {skillsData.map((item, index) => (
            <motion.div
              key={index}
              className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 ${item.border} hover:shadow-2xl ${item.glow}`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
              }}
            >
              {/* Floating Icon with distinct color */}
              <div className="mb-6 inline-block">
                <motion.div 
                  className={`p-4 rounded-2xl bg-white/5 text-4xl ${item.color} ring-1 ring-white/10`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {item.icon}
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-100 group-hover:text-white transition-colors">
                {item.category}
              </h3>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 text-sm font-medium rounded-lg bg-white/5 border border-white/5 text-gray-300 group-hover:text-white group-hover:border-white/20 transition-all duration-300 hover:bg-white/10 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Subtle background gradient element inside card */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-t ${item.color.replace('text-', 'from-')}/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills