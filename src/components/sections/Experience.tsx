import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState('work');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workExperience = [
    {
      id: 9,
      role: 'Senior Research Computing Systems Software Engineer',
      company: 'Harvard University',
      location: 'Cambridge, MA (Remote)',
      period: 'Sep 2024 - Present',
      logo: '/images/harvard-logo.png',
      description: 'Leading migration from multiple on-premises data centers to a hybrid approach on AWS.',
      achievements: [
        'Created entire AWS environment implementing infrastructure as code using Terraform',
        'Instituted event driven architecture in AWS automating many day-to-day manual tasks',
        'Reduced Puppet agent runtimes by 40% by architecting them in AWS',
        'Migrated OpenOnDemand platform to AWS improving performance for end users, availability and resilience for OOD developers'
      ]
    },
    {
      id: 8,
      role: 'Operational Excellence Manager',
      company: 'Experient Group (Chick-fil-A)',
      location: 'Atlanta GA',
      period: 'Nov 2023 - Sep 2024',
      logos: {
        primary: '/images/experient-logo.png',
        secondary: '/images/cfa-logo.png'
      },
      description: 'Partnered with engineering to proactively predict scaling and monitoring needs. Worked in an agile environment with biweekly sprints.',
      achievements: [
        'Led a high-impact Operational Excellence team of 5 engineers, reducing P1 incident MTTR by 40% and cutting false-positive alerts by over 30%',
        'Designed and implemented proactive monitoring strategy across critical APIs, driving a 30% drop in alert fatigue and improving SLO compliance',
        'Owned the multi-region Ping Directory sync pipeline, ensuring high-availability identity data replication across AWS and RDS',
        'Mentored and coached 4 engineers through weekly 1:1s, leading to 2 internal promotions and measurable growth in team engagement'
      ]
    },
    {
      id: 7,
      role: 'DevOps Manager',
      company: 'Experient Group (Chick-fil-A)',
      location: 'Atlanta, GA',
      period: 'Oct 2021 - Nov 2023',
      logos: {
        primary: '/images/experient-logo.png',
        secondary: '/images/cfa-logo.png'
      },
      description: 'Played a key role in the January 2023 security incident response, collaborating across engineering and security teams to contain exposure, implement postmortem improvements, and harden vulnerable components.',
      achievements: [
        'Led a team of 4 DevOps engineers to scale infrastructure and implement robust Infrastructure as Code across all CDNA environments',
        'Built and maintained GitHub Actions CI/CD pipelines for Dev, QA, and Prod environments supporting the User Profile API',
        'Monitored critical infrastructure using Datadog and Grafana, reducing time-to-detection for database, EKS, and LDAP-related issues by 50%',
        'Fortified Kubernetes infrastructure during CodeMoo, scaling login-related workloads 8x under extreme load'
      ]
    },
    {
      id: 6,
      role: 'Senior DevOps Engineer',
      company: 'Experient Group (Chick-fil-A)',
      location: 'Atlanta, GA',
      period: 'March 2018 - Oct 2021',
      logos: {
        primary: '/images/experient-logo.png',
        secondary: '/images/cfa-logo.png'
      },
      description: 'Led end-to-end ownership of cloud infrastructure supporting Chick-fil-As digital ordering platform, including AWS RDS, DynamoDB, Elastic Beanstalk, and CI/CD systems. Built and maintained over 100 data pipelines and automated infrastructure deployments, ensuring high availability, scalability, and operational excellence across production environments.',
      achievements: [
        'Owned and maintained the Postgres RDS database housing critical customer, transaction, survey, and email data',
        'Migrated production Postgres RDS instances to Aurora Postgres with zero downtime and improved throughput',
        'Developed and maintained CloudFormation templates to automate infrastructure provisioning and autoscaling for APIs, routers, and web apps',
        'Provided operational support for Elastic Beanstalk-based applications, resolving production incidents and improving root cause visibility'
      ]
    },
    {
      id: 5,
      role: 'Web Content Capability Manager',
      company: 'Experient Group (Coca-Cola)',
      location: 'Atlanta, GA',
      period: 'Jan 2017 - Dec 2017',
      logos: {
        primary: '/images/experient-logo.png',
        secondary: '/images/coca-cola-logo.png'
      },
      description: 'Built and maintained internal marketing websites for Coca-Cola using AEM and WordPress.',
      achievements: [
        'Managed financial budget for all web content capabilities for Global Marketing department',
        'Created strategy for streamlining and consolidation of offerings for all the teams',
        'Governed permissions architecture for AEM platform'
      ]
    },
    {
      id: 4,
      role: 'Web Developer',
      company: 'Experient Group (Chick-fil-A)',
      location: 'Atlanta, GA',
      period: 'Aug 2015 - Dec 2016',
      logos: {
        primary: '/images/experient-logo.png',
        secondary: '/images/cfa-logo.png'
      },
      description: 'Started as a temp and grew into a full-time role. Worked on various client websites using HTML, CSS, JavaScript, and C#.',
      achievements: [
        'Designed web page mockups using Balsamiq',
        'Used Visual Studio 2015 to create and modify web content for national restaurant franchise',
        'Responsible for deploying changes from Development to QA and to Production',
        'Used PostgreSQL to manage large database of restaurant openings'
      ]
    },
    {
      id: 3,
      role: 'Junior Java Developer',
      company: 'Accenture',
      location: 'Atlanta, GA',
      period: 'Jan 2015 - Aug 2015',
      logo: '/images/accenture-logo.png',
      description: 'Designed and developed Java-based enterprise applications from end to end, supporting scalable architecture, clean code practices, and secure deployments across the full SDLC.',
      achievements: [
        'Assisted in designing and implementing Java-based application components and user interfaces, aligning closely with business requirements and usability standards',
        'Developed and tested backend architecture components, ensuring performance and reliability goals were consistently met',
        'Supported production rollouts and provided hands-on debugging and maintenance for enterprise Java applications',
      ]
    },
    {
      id: 2,
      role: 'Risk and Assurance Auditor II',
      company: 'Jabil',
      location: 'St. Petersburg, FL',
      period: 'Dec 2013 - Aug 2014',
      logo: '/images/jabil-logo.png',
      description: 'Conducted enterprise-wide IT audits and risk assessments, ensuring regulatory compliance and operational integrity across Jabil global infrastructure footprint.',
      achievements: [
        'Executed end-to-end reviews of IT General Controls (ITGC) and application controls, ensuring alignment with SOX and PCI requirements using the COBIT framework',
        'Produced high-quality workpapers and control testing results that accelerated external audit timelines and reduced back-and-forth with stakeholders',
        'Utilized internal tools and external data sources to surface emerging risks and inform remediation efforts across infrastructure and application environments',
        'Trained junior associates on IT audit methodologies, COBIT-based frameworks, and control evaluation best practices'
      ]
    },
    {
      id: 1,
      role: 'Consultant',
      company: 'Sunera',
      location: 'Tampa, FL',
      period: 'May 2012 - Nov 2013',
      logo: '/images/sunera-logo.png',
      description: 'Conducted PCI compliance audits and IT risk assessments across complex infrastructure, identifying control gaps and strengthening enterprise readiness for regulatory reviews.',
      achievements: [
        'Performed PCI compliance testing across 15+ enterprise systems including Windows, z/OS, AS400, Oracle, DB2, Checkpoint, and Cisco devices',
        'Identified and documented IT control gaps across security, backup, disaster recovery, and change management processes',
        'Assisted IT risk assessments aligned with industry frameworks, evaluating LAN infrastructure, physical security, and data center operations'
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Management Information Systems',
      institution: 'University of South Florida',
      location: 'Tampa, FL',
      period: '2008 - 2012',
      image: '/images/usf-logo.png'
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified SysOps Administrator Associate',
      issuer: 'Amazon Web Services',
      date: 'Apr 2024',
      description: 'Validates the technical expertise of individuals in deploying, managing, and operating systems',
      credentialId: '49a4dde14a1c4fccae4c715882c9a715',
      logo: '/images/aws-logo.png'
    },
    {
      id: 2,
      title: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      date: 'Sep 2023',
      description: 'Showcases skills and knowledge in developing, optimizing, packaging, and deploying applications',
      credentialId: 'TSVTVH720M4Q1DCG',
      logo: '/images/aws-logo.png'
    },
    {
      id: 3,
      title: 'AWS Certified Solutions Architect Associate',
      issuer: 'Amazon Web Services',
      date: 'Mar 2018',
      description: 'Validates expertise in designing distributed systems on AWS',
      credentialId: '0FVXPEWKL2Q4Q69F',
      logo: '/images/aws-logo.png'
    }
  ];

  const activeContent = () => {
    switch (activeTab) {
      case 'work':
        return workExperience;
      case 'education':
        return education;
      case 'certifications':
        return certifications;
      default:
        return workExperience;
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
    <section id="experience" className="section bg-secondary-50 dark:bg-secondary-900/60">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            My professional journey and educational background
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
              onClick={() => setActiveTab('work')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'work'
                  ? 'bg-primary-500 text-white'
                  : 'hover:bg-secondary-100 dark:hover:bg-secondary-700'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'education'
                  ? 'bg-primary-500 text-white'
                  : 'hover:bg-secondary-100 dark:hover:bg-secondary-700'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'certifications'
                  ? 'bg-primary-500 text-white'
                  : 'hover:bg-secondary-100 dark:hover:bg-secondary-700'
              }`}
            >
              Certifications
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-secondary-200 dark:bg-secondary-700"></div>
          
          {/* Timeline content */}
          {activeContent().map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative mb-12 ${
                activeTab === 'education' && education.length === 1
                  ? 'lg:w-full lg:max-w-2xl lg:mx-auto'
                  : index % 2 === 0 
                    ? 'lg:pr-12 lg:ml-auto lg:pl-6' 
                    : 'lg:pl-12 lg:mr-auto lg:pr-6'
              } pl-12 lg:w-1/2`}
            >
              {/* Timeline dot */}
              {activeTab !== 'education' || education.length > 1 ? (
                <div className="absolute left-0 lg:left-auto lg:right-0 top-4 w-8 h-8 rounded-full bg-primary-500 border-4 border-white dark:border-secondary-900 flex items-center justify-center transform lg:translate-x-1/2 z-10">
                  <span className="text-white font-bold text-sm">{item.id}</span>
                </div>
              ) : null}
              
              <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {'role' in item ? (
                    <>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-secondary-900 dark:text-white">{item.role}</h3>
                          <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">{item.company}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          {'logos' in item ? (
                            <>
                              <img 
                                src={item.logos.primary} 
                                alt={`${item.company.split(' ')[0]} logo`}
                                className="h-12 w-auto object-contain"
                              />
                              <img 
                                src={item.logos.secondary} 
                                alt={`${item.company.split('(')[1]?.replace(')', '')} logo`}
                                className="h-12 w-auto object-contain"
                              />
                            </>
                          ) : 'logo' in item && (
                            <img 
                              src={item.logo} 
                              alt={`${item.company} logo`}
                              className={`w-auto object-contain ${
                                item.company === 'Accenture'
                                  ? 'h-10'
                                  : item.company === 'Experient Group (Coca-Cola)'
                                  ? 'h-8'
                                  : 'h-16'
                              }`}
                            />
                          )}
                        </div>
                      </div>
                    </>
                  ) : 'degree' in item ? (
                    <>
                      <div className="flex items-center gap-4">
                        {'image' in item && (
                          <img 
                            src={item.image} 
                            alt={`${item.institution} logo`}
                            className="h-12 w-auto object-contain"
                          />
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-secondary-900 dark:text-white">{item.degree}</h3>
                          <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">{item.institution}</h4>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-secondary-900 dark:text-white">{item.title}</h3>
                          <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">{item.issuer}</h4>
                        </div>
                        {'logo' in item && (
                          <img 
                            src={item.logo} 
                            alt={`${item.issuer} logo`}
                            className="h-12 w-auto object-contain"
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>
                
                <div className="flex items-center mb-3 text-sm text-secondary-600 dark:text-secondary-400">
                  <Calendar size={16} className="mr-2" />
                  <span>{('period' in item) ? item.period : item.date}</span>
                  
                  {'location' in item && (
                    <div className="flex items-center ml-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                  {item.description}
                </p>
                
                {'credentialId' in item && (
                  <p className="text-sm text-secondary-500 dark:text-secondary-500">
                    Credential ID: {item.credentialId}
                  </p>
                )}
                
                {'achievements' in item && (
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 mt-1.5 bg-primary-500 rounded-full mr-2"></span>
                        <span className="text-secondary-600 dark:text-secondary-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-8">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
