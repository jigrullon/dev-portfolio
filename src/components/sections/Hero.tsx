import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-transparent dark:from-primary-900/10 dark:to-transparent -z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 -z-10"></div>
      
      <div className="container-custom">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full mb-6">
              DevOps Engineer
            </span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-primary-600 dark:text-primary-400">Jaime Grullon</span>
              <br />
              <span className="text-secondary-900 dark:text-white whitespace-nowrap">Future Principal Engineer</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I'm a software engineer specializing in building cloud infrastructure. 
              Currently, I'm focused on migrating Harvard University's research computing cluster into AWS.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get in touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View my work
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center space-x-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a 
                href="https://github.com/jigrullon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jaime-grullon-b6ab7444/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              {/* <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a> */}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-12 p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 max-w-md mx-auto"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div>
                  <h3 className="text-secondary-900 dark:text-white font-medium">Currently working on</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm">Beekeeping calendar app</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <button 
          onClick={scrollToNext}
          className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
