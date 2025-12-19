import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: 'Declaring Bankruptcy',
      excerpt: 'Confessions of a Tab Hoarder.',
      image: 'https://static1.squarespace.com/static/5b59fe6a7e3c3ac212f4a9aa/t/5b5a4d932483d6109bb01b2c/1483892244817/1000w/can-i-suggest-that-you-just-declare-bankruptcy--a6d3e.png',
      date: 'Oct 25, 2025',
      readTime: '8 min read',
      category: 'Career',
      tags: ['productivity', 'organization', 'digital minimalism', 'workflow'],
      slug: 'declaring-bankruptcy'
    },
    {
      id: 2,
      title: 'Escaping to Nature Wont Fix Your Work',
      excerpt: 'Lessons From a Remote Worker’s Failed Homestead.',
      image: 'https://as2.ftcdn.net/v2/jpg/06/37/89/51/1000_F_637895176_BXbHeWjRGoauooAoGXh0ELwqbCxLCN0y.jpg',
      date: 'Nov 13, 2025',
      readTime: '10 min read',
      category: 'Career',
      tags: ['remote work', 'work-life balance', 'productivity', 'burnout'],
      slug: 'escaping-to-nature-wont-fix-your-work'
    },
    {
      id: 3,
      title: 'Being a Generalist',
      excerpt: 'Investigating the question of whether being a tech generalist is a blessing or curse.',
      image: 'https://substackcdn.com/image/fetch/$s_!IaeD!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7a36d912-3ba8-40fe-8d6a-cd60825f29b3_690x460.png',
      date: 'Dec 1, 2025',
      readTime: '12 min read',
      category: 'Career',
      tags: ['career development', 'generalist', 'specialization', 'tech career'],
      slug: 'being-a-generalist'
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
    <section id="blog" className="section bg-secondary-50 dark:bg-secondary-900/60">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            Thoughts, tutorials, and insights on software engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={post.id === 1 ? { objectPosition: 'center top' } : {}}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-secondary-600 dark:text-secondary-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-secondary-600 dark:text-secondary-400 text-sm">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <a 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="btn btn-outline"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;