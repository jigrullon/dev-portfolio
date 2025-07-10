import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cloud, Database, Users, Zap, Shield, Globe, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('aws');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Handle URL hash changes to set active tab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('services')) {
        // Scroll to services section first
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Then set the active tab
        const tabMatch = hash.match(/services\/(\w+)/);
        if (tabMatch) {
          const tab = tabMatch[1];
          if (['web', 'aws', 'migration', 'consulting'].includes(tab)) {
            setActiveTab(tab);
          }
        }
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Update URL hash without triggering scroll
    const currentHash = window.location.hash;
    const newHash = `#services/${tab}`;
    if (currentHash !== newHash) {
      window.history.replaceState(null, '', newHash);
    }
  };

  const webDevelopment = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: <Code className="h-8 w-8" />,
      description: 'Can build responsive, modern web applications using React, TypeScript, and Tailwind.',
      features: [
        'React & Next.js applications',
        'TypeScript for type safety',
        'Responsive design with Tailwind and Vite',
        'Performance optimization'
      ]
    },
    {
      id: 2,
      title: 'Backend Development',
      icon: <Database className="h-8 w-8" />,
      description: 'Developing server-side applications and APIs with modern technologies.',
      features: [
        'REST APIs with Java',
        'Database design & optimization',
        'Authentication & authorization',
        'API documentation & testing'
      ]
    },
    {
      id: 3,
      title: 'Full-Stack Solutions',
      icon: <Globe className="h-8 w-8" />,
      description: 'End-to-end web application development from concept to deployment.',
      features: [
        'Complete application architecture',
        'CI/CD pipeline setup',
        'Performance monitoring',
        'Security best practices'
      ]
    },
    {
      id: 4,
      title: 'Progressive Web Apps',
      icon: <Zap className="h-8 w-8" />,
      description: 'Creating fast, reliable, and engaging progressive web applications.',
      features: [
        'Offline functionality',
        'Push notifications',
        'App-like experience',
        'Cross-platform compatibility'
      ]
    }
  ];

  const awsInfrastructure = [
    {
      id: 1,
      title: 'Infrastructure as Code',
      icon: <Code className="h-8 w-8" />,
      description: 'Automating infrastructure deployment using Terraform and CloudFormation.',
      features: [
        'Terraform configurations',
        'Ansible playbooks',
        'Multi-environment setup',
        'Version control for infrastructure'
      ]
    },
    {
      id: 2,
      title: 'Container Orchestration',
      icon: <Settings className="h-8 w-8" />,
      description: 'Managing containerized applications with Kubernetes and ECS.',
      features: [
        'Kubernetes cluster management',
        'ECS service deployment',
        'Auto-scaling configurations',
        'Service mesh implementation'
      ]
    },
    {
      id: 3,
      title: 'Serverless Architecture',
      icon: <Zap className="h-8 w-8" />,
      description: 'Building scalable applications using AWS Lambda and serverless services.',
      features: [
        'Lambda function development',
        'API Gateway integration',
        'Event-driven architecture',
        'Cost optimization'
      ]
    },
    {
      id: 4,
      title: 'Monitoring & Logging',
      icon: <Shield className="h-8 w-8" />,
      description: 'Implementing comprehensive monitoring and logging solutions.',
      features: [
        'CloudWatch and Grafanadashboards',
        'Log aggregation & analysis',
        'Alert configuration',
        'Performance metrics'
      ]
    }
  ];

  const cloudMigration = [
    {
      id: 1,
      title: 'Assessment & Planning',
      icon: <Users className="h-8 w-8" />,
      description: 'Comprehensive analysis of existing infrastructure and migration strategy development using the Cloud Adoption Framework.',
      features: [
        'Infrastructure assessment',
        'Migration roadmap creation',
        'Cost-benefit analysis',
        'Risk mitigation planning'
      ]
    },
    {
      id: 2,
      title: 'Lift & Shift Migration',
      icon: <Cloud className="h-8 w-8" />,
      description: 'Moving applications to the cloud with minimal code changes.',
      features: [
        'VM migration to EC2',
        'Database migration to RDS',
        'Network configuration to VPC',
        'Performance optimization using CloudWatch and Grafana'
      ]
    },
    {
      id: 3,
      title: 'Refactoring & Optimization',
      icon: <Zap className="h-8 w-8" />,
      description: 'Modernizing applications to leverage cloud-native services.',
      features: [
        'Application refactoring',
        'Cloud-native service adoption',
        'Performance tuning',
        'Cost optimization'
      ]
    },
    {
      id: 4,
      title: 'Post-Migration Support',
      icon: <Shield className="h-8 w-8" />,
      description: 'Ongoing support and optimization after successful migration.',
      features: [
        'Performance monitoring',
        'Security hardening',
        'Backup & disaster recovery',
        'Training & documentation'
      ]
    }
  ];

  const consulting = [
    {
      id: 1,
      title: 'Architecture Review',
      icon: <Settings className="h-8 w-8" />,
      description: 'Comprehensive review of your current architecture and recommendations for improvement.',
      features: [
        'Infrastructure assessment',
        'Security review',
        'Performance analysis',
        'Scalability recommendations'
      ]
    },
    {
      id: 2,
      title: 'DevOps Transformation',
      icon: <Zap className="h-8 w-8" />,
      description: 'Helping organizations adopt DevOps practices and tools.',
      features: [
        'CI/CD pipeline design',
        'Automation strategies',
        'Team training',
        'Process optimization'
      ]
    },
    {
      id: 3,
      title: 'Security Consulting',
      icon: <Shield className="h-8 w-8" />,
      description: 'Security assessment and implementation of best practices.',
      features: [
        'Security audit',
        'Compliance review',
        'Security tool implementation',
        'Incident response planning'
      ]
    },
    {
      id: 4,
      title: 'Performance Optimization',
      icon: <Globe className="h-8 w-8" />,
      description: 'Optimizing application and infrastructure performance.',
      features: [
        'Performance analysis',
        'Bottleneck identification',
        'Optimization strategies',
        'Monitoring setup'
      ]
    }
  ];

  const activeContent = () => {
    switch (activeTab) {
      case 'web':
        return webDevelopment;
      case 'aws':
        return awsInfrastructure;
      case 'migration':
        return cloudMigration;
      case 'consulting':
        return consulting;
      default:
        return awsInfrastructure;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="section bg-white dark:bg-secondary-900">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            Comprehensive solutions for your digital transformation needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="flex space-x-2 p-1 bg-white dark:bg-secondary-800 rounded-lg shadow-sm">
            <button
              onClick={() => handleTabChange('aws')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'aws'
                  ? 'bg-primary-500 text-white'
                  : 'hover:bg-secondary-100 dark:hover:bg-secondary-700'
              }`}
            >
              AWS Infrastructure
            </button>
            <button
              onClick={() => handleTabChange('migration')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'migration'
                  ? 'bg-primary-500 text-white'
                  : 'hover:bg-secondary-100 dark:hover:bg-secondary-700'
              }`}
            >
              Cloud Migration
            </button>
            <button
              onClick={() => handleTabChange('consulting')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'consulting'
                  ? 'bg-primary-500 text-white'
                  : 'hover:bg-secondary-100 dark:hover:bg-secondary-700'
              }`}
            >
              Consulting
            </button>
            <button
              onClick={() => handleTabChange('web')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'web'
                  ? 'bg-primary-500 text-white'
                  : 'hover:bg-secondary-100 dark:hover:bg-secondary-700'
              }`}
            >
              Web Development
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {activeContent().map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 mt-1.5 bg-primary-500 rounded-full mr-2"></span>
                    <span className="text-secondary-600 dark:text-secondary-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 