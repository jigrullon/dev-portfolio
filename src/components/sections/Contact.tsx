import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'jaimeigrullon@gmail.com',
      action: 'mailto:jaimeigrullon@gmail.com',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      details: 'Kingsland, GA',
      action: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="section bg-white dark:bg-secondary-900">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg flex items-start space-x-4 hover:shadow-md transition-shadow"
              >
                <div className="bg-white dark:bg-secondary-700 p-3 rounded-full text-primary-600 dark:text-primary-400">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-2">{item.details}</p>
                  <a 
                    href={item.action} 
                    className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    target={item.title === 'Location' ? '_blank' : undefined}
                    rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                  >
                    {
                      item.title === 'Email' ? 'Send an email' : 
                      item.title === 'Location' ? 'View on map' : 
                      ''
                    }
                  </a>
                </div>
              </div>
            ))}
            
            <div className="bg-primary-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Availability</h3>
              <p className="mb-2">I'm currently available for freelance work.</p>
              <p className="mb-2">If you're interested in working together, please get in touch!</p>
              <p>Response time: <span className="font-semibold">within 24 hours</span></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-md p-6 md:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 
                      bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Doe"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 
                      bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your@email.com"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 
                    bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Project Inquiry"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 
                    bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your message..."
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                ></textarea>
              </div>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Your message has been sent successfully. I'll get back to you soon!</span>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}
              
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                      <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
