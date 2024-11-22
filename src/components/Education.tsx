import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "VIT University",
    location: "Bhopal, India",
    period: "2023 - Present",
    gpa: "8/10"
  },
  {
    degree: "Higher Secondary Education",
    school: " Baps Swaminarayan Vidhyamandir",
    location: "Gondal, India",
    period: "2022 - 2023",
    gpa: "78.91"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-200">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="absolute left-0 top-0 w-full bg-indigo-600"
                />
              </div>

              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white" />

              <div className="bg-white rounded-lg shadow-sm p-6 ml-4">
                <div className="flex items-center gap-2 text-indigo-600 mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-semibold">{item.degree}</span>
                </div>

                <h3 className="text-xl font-bold mb-2">{item.school}</h3>

                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                  CGPA / Percentile : {item.gpa}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}