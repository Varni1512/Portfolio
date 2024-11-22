import { motion } from 'framer-motion';
import { GraduationCap, Code, Coffee, Award } from 'lucide-react';

const highlights = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Education",
    description: "Computer Science AIML at VIT University"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Programming",
    description: "Full-stack Development & Software Engineering"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Experience",
    description: "1+ Years of Project Experience"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Achievements",
    description: "Dean's List & Hackathon Winner"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
            Hello! My name is Varnikumar Patel, and I am a second-year undergraduate with a passion for creativity, innovation, and technology. I thrive on the intersection of design and problem-solving, as well as some web programming and event planning.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            I participate actively in a number of groups and clubs, including the Gujrati Club, Ramanujan Club and several more that focus on server administration, scripting, and kernel development, among other topics. Participating in hackathons such as Vultr and the Smart India Hackathon 2024 was another aspect of this trip.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            As a member of the Gujarati Club core team, I have successfully planned events such as GlamVIT and gaming tournaments, among others. I have a solid history in event administration. However, my background leans more toward technical areas, since I have participated in many  of the hackathons and earned many certificates from different platform like Apna College, GeeksforGeeks(gfg), Leetcode  and etc.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-indigo-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}