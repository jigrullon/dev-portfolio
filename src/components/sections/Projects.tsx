import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Taskify',
      description: 'A task management application with drag-and-drop functionality, user authentication, and data visualization.',
      image: 'https://images.pexels.com/photos/8091469/pexels-photo-8091469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, checkout, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current conditions and forecasts based on user location or search.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Redux', 'OpenWeather API', 'Chart.js'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Blog API',
      description: 'A RESTful API for a blog platform with authentication, authorization, and CRUD operations.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
      category: 'backend',
      githubUrl: 'https://github.com',
      liveUrl: null,
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and experience.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, and message history.',
      image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'Redis'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // return (
  //   <section id="projects" className="section bg-white dark:bg-secondary-900">
  //     <div className="container-custom" ref={ref}>
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  //         transition={{ duration: 0.5 }}
  //         className="max-w-3xl mx-auto text-center mb-12"
  //       >
  //         <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
  //         <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
  //         <p className="text-lg text-secondary-600 dark:text-secondary-400">
  //           Check out some of my recent work
  //         </p>
  //       </motion.div>

  //       <motion.div
  //         initial={{ opacity: 0, y: 10 }}
  //         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
  //         transition={{ duration: 0.5, delay: 0.2 }}
  //         className="flex justify-center mb-12"
  //       >
  //         <div className="flex flex-wrap justify-center gap-2">
  //           <button
  //             onClick={() => setActiveFilter('all')}
  //             className={`px-6 py-2 rounded-full transition-colors ${
  //               activeFilter === 'all'
  //                 ? 'bg-primary-500 text-white'
  //                 : 'bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700'
  //             }`}
  //           >
  //             All
  //           </button>
  //           <button
  //             onClick={() => setActiveFilter('frontend')}
  //             className={`px-6 py-2 rounded-full transition-colors ${
  //               activeFilter === 'frontend'
  //                 ? 'bg-primary-500 text-white'
  //                 : 'bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700'
  //             }`}
  //           >
  //             Frontend
  //           </button>
  //           <button
  //             onClick={() => setActiveFilter('backend')}
  //             className={`px-6 py-2 rounded-full transition-colors ${
  //               activeFilter === 'backend'
  //                 ? 'bg-primary-500 text-white'
  //                 : 'bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700'
  //             }`}
  //           >
  //             Backend
  //           </button>
  //           <button
  //             onClick={() => setActiveFilter('fullstack')}
  //             className={`px-6 py-2 rounded-full transition-colors ${
  //               activeFilter === 'fullstack'
  //                 ? 'bg-primary-500 text-white'
  //                 : 'bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700'
  //             }`}
  //           >
  //             Full Stack
  //           </button>
  //         </div>
  //       </motion.div>

  //       <motion.div
  //         variants={containerVariants}
  //         initial="hidden"
  //         animate={inView ? "visible" : "hidden"}
  //         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  //       >
  //         {filteredProjects.map((project) => (
  //           <motion.div
  //             key={project.id}
  //             variants={itemVariants}
  //             className="card group"
  //           >
  //             <div className="relative overflow-hidden h-60">
  //               <img
  //                 src={project.image}
  //                 alt={project.title}
  //                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  //               />
  //               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
  //                 <div className="flex space-x-3">
  //                   {project.githubUrl && (
  //                     <a
  //                       href={project.githubUrl}
  //                       target="_blank"
  //                       rel="noopener noreferrer"
  //                       className="text-white bg-secondary-800/80 p-2 rounded-full hover:bg-primary-500 transition-colors"
  //                       aria-label={`GitHub repository for ${project.title}`}
  //                     >
  //                       <Github size={20} />
  //                     </a>
  //                   )}
  //                   {project.liveUrl && (
  //                     <a
  //                       href={project.liveUrl}
  //                       target="_blank"
  //                       rel="noopener noreferrer"
  //                       className="text-white bg-secondary-800/80 p-2 rounded-full hover:bg-primary-500 transition-colors"
  //                       aria-label={`Live demo for ${project.title}`}
  //                     >
  //                       <ExternalLink size={20} />
  //                     </a>
  //                   )}
  //                 </div>
  //                 {project.featured && (
  //                   <span className="text-xs font-semibold px-3 py-1 bg-primary-500 text-white rounded-full">
  //                     Featured
  //                   </span>
  //                 )}
  //               </div>
  //             </div>
  //             <div className="p-6">
  //               <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
  //                 {project.title}
  //               </h3>
  //               <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-2">
  //                 {project.description}
  //               </p>
  //               <div className="flex flex-wrap gap-2 mb-5">
  //                 {project.technologies.map((tech, index) => (
  //                   <span
  //                     key={index}
  //                     className="text-xs font-medium px-2 py-1 bg-secondary-100 dark:bg-secondary-800 rounded-md"
  //                   >
  //                     {tech}
  //                   </span>
  //                 ))}
  //               </div>
  //               <a 
  //                 href="#" 
  //                 className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
  //               >
  //                 View Details
  //                 <ArrowRight size={16} className="ml-1" />
  //               </a>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </motion.div>

  //       {filteredProjects.length === 0 && (
  //         <div className="text-center py-8">
  //           <p className="text-secondary-600 dark:text-secondary-400">No projects found with the selected filter.</p>
  //         </div>
  //       )}
        
  //       <div className="text-center mt-12">
  //         <a 
  //           href="https://github.com" 
  //           target="_blank" 
  //           rel="noopener noreferrer" 
  //           className="btn btn-outline"
  //         >
  //           View All Projects on GitHub
  //         </a>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Projects;