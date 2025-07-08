import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, Database, PenTool, Server, Users } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillGroups = [
    {
      title: 'Frontend',
      icon: <Layout className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      skills: ['React', 'Vue.js', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: <Server className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      skills: ['Python', 'Java', 'REST APIs']
    },
    {
      title: 'Database',
      icon: <Database className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      skills: ['PostgreSQL', 'MySQL', 'RDS']
    },
    {
      title: 'Cloud & Infrastructure',
      icon: <Server className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      skills: ['AWS', 'Terraform', 'Kubernetes']
    },
    {
      title: 'Other',
      icon: <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      skills: ['Git', 'Docker', 'CI/CD']
    },
    {
      title: 'Soft Skills',
      icon: <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      skills: ['Incident Response', 'Observability', ]
    }
  ];

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

  return (
    <section id="about" className="section bg-white dark:bg-secondary-900">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            I'm a software developer with a focus on creating pragmatic solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-secondary-800 p-4 rounded-lg shadow-lg">
                <p className="font-bold text-primary-600 dark:text-primary-400 text-xl">10+ Years</p>
                <p className="text-secondary-600 dark:text-secondary-400">of experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4">
              I'm a DevOps Engineer based in Kingsland, GA with a passion for building robust cloud architecture and automating complex workflows. I specialize in AWS, Terraform, and Python.
            </p>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4">
              With over 10 years of experience in software engineering and cloud infrastructure, I've led major cloud migration projects and built scalable systems for organizations like Harvard University and Chick-fil-A. I'm currently focused on migrating Harvard's research computing cluster to AWS while implementing event-driven architectures and infrastructure as code.
            </p>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              When I'm not coding, you can find me biking with my family, experimenting with new cooking recipes, or reading a good book.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's work together
            </a>
          </motion.div>
        </div>

        {/* <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl font-bold mt-16 mb-8 text-center"
        >
          My Skills
        </motion.h3> */}

        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-secondary-50 dark:bg-secondary-800/50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-white dark:bg-secondary-800 p-3 rounded-lg mr-4">
                  {group.icon}
                </div>
                <h4 className="text-xl font-bold">{group.title}</h4>
              </div>
              <ul className="space-y-2">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    <span className="text-secondary-600 dark:text-secondary-400">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;