import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.en.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={post.id === 1 ? { objectPosition: 'center top' } : {}}
                  />
                </div>
              </Link>
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
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors cursor-pointer">
                    {post.en.title}
                  </h3>
                </Link>
                <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">
                  {post.en.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-secondary-600 dark:text-secondary-400 text-sm">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="btn btn-outline"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;