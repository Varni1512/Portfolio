import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: " Real-Time Weather Prediction Dashboard",
    description: " Real-Time Weather Prediction App designed to provide accurate and up-to-date weather forecasts with advanced predictive analytics. This app uses cuttingedge algorithms and real-time data from multiple meteorological sources togive users detailed weather insights, including temperature, humidity, precipitation, and wind conditions.",
    tech: ["HTML","CSS","JavaScript","API'S"],
    github: "https://github.com/Varni1512/Weather",
    live: "https://varni1512.github.io/Weather-I-/",
  },
  {
    title: "VegDelight",
    description: "VegDelight is your ultimate online destination for mastering the art of cooking. Whether you’re a seasoned chef or just starting out, our platform offers detailed, easy-to-follow guides on how to make any dish from scratch. Explore a vast collection of recipes from global cuisines, complete with step-by-step instructions, ingredient lists, and cooking tips.",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    github: "https://github.com/Varni1512/VegDelight",
    live: "https://vegdelight.netlify.app/",
  },
  {
    title: "Amazon Clone",
    description: " Amazon Clone, which replicates the core functionalities of one of the world's largest e-commerce platforms. This project focuses on creating a robust and scalable online shopping experience, incorporating essential features to mimic the user experience of a full-fledged e-commerce platform.",
    tech: ["HTML","CSS","JavaScript"],
    github: "https://github.com/Varni1512/Amazon-clone",
    live: "https://varni1512.github.io/Amazon-clone/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  
                </div>
              </div> */}
              <div className="p-6">

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}