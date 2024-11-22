import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Java"]
  },
  {
    category: "Database",
    items: ["MongoDB",  "MySQL"]
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-indigo-600">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-3 shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}