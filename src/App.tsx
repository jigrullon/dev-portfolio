import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import ScrollToTop from './components/ui/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;
        if (window.scrollY >= sectionTop - 300) {
          const sectionId = section.getAttribute('id') || '';
          // Handle services tab URLs
          if (sectionId === 'services') {
            const hash = window.location.hash;
            if (hash.includes('services/')) {
              current = 'services';
            } else {
              current = sectionId;
            }
          } else {
            current = sectionId;
          }
        }
      });
      
      if (current !== activeSection && current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header activeSection={activeSection} />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Experience />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;