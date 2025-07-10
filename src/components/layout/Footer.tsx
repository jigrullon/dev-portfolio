import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-50 dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-800">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Jaime Grullon</h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4">
              Turning complex cloud infrastructure into simple, automated workflows.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/jigrullon" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/jaime-grullon-b6ab7444/" target="_blank" rel="noopener noreferrer" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              {/* <a href="#" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a> */}
              <a href="mailto:jaimeigrullon@gmail.com" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#experience" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Experience</a></li>
              {/*<li><a href="#projects" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a></li>*/}
              {/*<li><a href="#blog" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Blog</a></li>*/}
              <li><a href="#contact" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services/web" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Web Development</a></li>
              <li><a href="#services/aws" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">AWS Infrastructure</a></li>
              <li><a href="#services/migration" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Cloud Migration</a></li>
              <li><a href="#services/consulting" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Consulting</a></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary-200 dark:border-secondary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-600 dark:text-secondary-400 text-sm">
            &copy; {currentYear} Jaime Grullon. All rights reserved.
          </p>
            {/* <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm">
              <li><a href="#" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
