import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import { 
  FiMail, FiPhone, FiMapPin, FiSend, 
  FiLinkedin, FiGithub, FiTwitter, FiInstagram,
  FiCheckCircle, FiAlertCircle, FiMessageSquare
} from 'react-icons/fi'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // EmailJS configuration (Keep your IDs)
  const SERVICE_ID = 'service_x9emdoi' 
  const TEMPLATE_ID = 'template_n1nnzwn' 
  const PUBLIC_KEY = 'nE0DTkGpW9CdX5Ng1'

  // Theme Constants
  const accentColor = "text-[#A855F7]";
  const bgAccentColor = "bg-[#A855F7]";
  const borderFocusColor = "focus:border-[#A855F7]";
  const ringFocusColor = "focus:ring-[#A855F7]";

  const handleChange = (e) => {
    const { name, value } = e.target
    const fieldMap = {
      'user_name': 'name',
      'user_email': 'email',
      'subject': 'subject',
      'message': 'message'
    }
    const fieldKey = fieldMap[name] || name
    setFormData(prev => ({ ...prev, [fieldKey]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        form.current.reset()
        setTimeout(() => setSubmitStatus(null), 5000)
      })
      .catch((error) => {
        console.error('Email failed:', error)
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(null), 5000)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "varni1505@gmail.com",
      link: "mailto:varni1505@gmail.com",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+91 9510728395",
      link: "tel:+919510728395",
      color: "text-green-400",
      bg: "bg-green-400/10"
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Gujarat, India",
      link: null,
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    }
  ]

  const socialLinks = [
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/varnikumarpatel", color: "hover:text-blue-500" },
    { icon: <FiGithub />, href: "https://github.com/Varni1512", color: "hover:text-white" },
    { icon: <FiTwitter />, href: "https://x.com/varni152", color: "hover:text-sky-400" },
    { icon: <FiInstagram />, href: "https://www.instagram.com/varni_1512", color: "hover:text-pink-500" },
  ]

  return (
    <section id="contact" className="py-12 relative bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Info & Context */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 mb-6">
              <span className={`w-2 h-2 rounded-full ${bgAccentColor} animate-pulse`}></span>
              Contact
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's build something <br />
              <span className={accentColor}>extraordinary.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities and how we can work together.
            </p>

            {/* Contact Tiles */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 group ${item.link ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className={`p-3 rounded-lg ${item.bg} ${item.color} text-xl group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 font-medium">{item.title}</h4>
                    <p className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Dock */}
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:scale-110 ${social.color}`}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Form Container (Glass Card) */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
              
              {/* Subtle Gradient Glow inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="flex items-center gap-3 mb-8">
                <FiMessageSquare className={accentColor} size={24} />
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              {/* Status Messages (Toast Style) */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                      submitStatus === 'success' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {submitStatus === 'success' ? <FiCheckCircle size={20} /> : <FiAlertCircle size={20} />}
                    <p className="text-sm font-medium">
                      {submitStatus === 'success' 
                        ? "Message sent! I'll get back to you soon." 
                        : "Something went wrong. Please try again."}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={form} onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 ${ringFocusColor} ${borderFocusColor} transition-all`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 ${ringFocusColor} ${borderFocusColor} transition-all`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 ${ringFocusColor} ${borderFocusColor} transition-all`}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 ${ringFocusColor} ${borderFocusColor} transition-all resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-2
                    ${isSubmitting ? 'bg-gray-600' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-purple-500/25'}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact