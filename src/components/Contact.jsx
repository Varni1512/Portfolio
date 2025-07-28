import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import { 
  FiMail, FiPhone, FiMapPin, FiSend, 
  FiLinkedin, FiGithub, FiTwitter, FiInstagram 
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

  // EmailJS configuration
  const SERVICE_ID = 'service_x9emdoi' 
  const TEMPLATE_ID = 'template_n1nnzwn' 
  const PUBLIC_KEY = 'nE0DTkGpW9CdX5Ng1'

  const handleChange = (e) => {
    const { name, value } = e.target
    // Map EmailJS field names to formData keys
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
    
    // Send email using EmailJS
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Email sent successfully:', result.text)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset form reference as well
        form.current.reset()
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      })
      .catch((error) => {
        console.error('Email send failed:', error.text)
        setSubmitStatus('error')
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="contact" className="py-16 md:py-18">
      <div className="container-section -mt-28">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out to me for any questions, project inquiries, or just to say hello. 
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:varni1505@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                    varni1505@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+919510728395" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                    +91 9510728395
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ankleshwar, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/varnikumarpatel" className="social-icon">
                  <FiLinkedin size={20} />
                </a>
                <a href="https://github.com/Varni1512" className="social-icon">
                  <FiGithub size={20} />
                </a>
                <a href="https://x.com/varni152" className="social-icon">
                  <FiTwitter size={20} />
                </a>
                <a href="https://www.instagram.com/varni_1512?igsh=MWV1YzR3bTF3aXdlOA==" className="social-icon">
                  <FiInstagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
                  Failed to send message. Please try again or contact me directly via email.
                </div>
              )}
              
              <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-dark-dark text-gray-900 dark:text-white"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-dark-dark text-gray-900 dark:text-white"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-dark-dark text-gray-900 dark:text-white"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-dark-dark text-gray-900 dark:text-white resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      <FiSend className="mr-2" />
                      Send Message
                    </span>
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