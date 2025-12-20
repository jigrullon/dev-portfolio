import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { getSortedBlogPosts } from '../../data/blogPosts';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const BlogList: React.FC = () => {
  const [activeSection] = useState('blog');
  const blogPosts = getSortedBlogPosts();

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary-50 dark:bg-secondary-900">
      <Header activeSection={activeSection} />
      
      <main className="flex-grow pt-20">
        <div className="container-custom max-w-5xl mx-auto px-4 py-8">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900 dark:text-white">
              Blog
            </h1>
            <div className="h-1 w-20 bg-primary-500 mb-4"></div>
            <p className="text-lg text-secondary-600 dark:text-secondary-400">
              Thoughts, tutorials, and insights on software engineering
            </p>
          </motion.div>

          {/* Blog Posts List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                <Link to={`/blog/${post.slug}`} className="flex flex-col md:flex-row">
                  {/* Content Section (Left) */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center text-secondary-600 dark:text-secondary-400 text-sm">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {post.en.title}
                      </h2>
                      
                      <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-4">
                        {post.en.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-secondary-600 dark:text-secondary-400 text-sm">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-primary-600 dark:text-primary-400 font-medium group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>

                  {/* Image Section (Right) */}
                  <div className="md:w-80 lg:w-96 flex-shrink-0">
                    <div className="h-64 md:h-full w-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.en.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        style={post.id === 1 ? { objectPosition: 'center top' } : {}}
                      />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;

