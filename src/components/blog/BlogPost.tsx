import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Share2, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { getBlogPostBySlug, getAdjacentPosts } from '../../data/blogPosts';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'es' | 'zh'>('en');
  const [activeSection] = useState('blog');

  const post = slug ? getBlogPostBySlug(slug) : null;
  const { next, prev } = slug ? getAdjacentPosts(slug) : { next: null, prev: null };

  // Scroll to top when slug or language changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, activeLanguage]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/" className="text-primary-600 dark:text-primary-400 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const currentContent = post[activeLanguage];
  const currentTags = post.tags;
  const currentCategory = post.category;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentContent.title,
        text: currentContent.subtitle,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const ShareButton: React.FC = () => (
    <button
      onClick={handleShare}
      className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
    >
      <Share2 size={18} className="mr-2" />
      Share
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col bg-secondary-50 dark:bg-secondary-900">
      <Header activeSection={activeSection} />
      
      <main className="flex-grow pt-20">
        <div className="container-custom max-w-4xl mx-auto px-4 py-8">
          {/* Back button */}
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              setTimeout(() => {
                const blogSection = document.getElementById('blog');
                if (blogSection) {
                  blogSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="inline-flex items-center text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>

          {/* Language Switcher */}
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2 p-1 bg-white dark:bg-secondary-800 rounded-lg shadow-sm">
              <button
                onClick={() => setActiveLanguage('en')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeLanguage === 'en'
                    ? 'bg-primary-500 text-white'
                    : 'hover:bg-secondary-100 dark:hover:bg-secondary-700'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setActiveLanguage('es')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeLanguage === 'es'
                    ? 'bg-primary-500 text-white'
                    : 'hover:bg-secondary-100 dark:hover:bg-secondary-700'
                }`}
              >
                Español
              </button>
              <button
                onClick={() => setActiveLanguage('zh')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeLanguage === 'zh'
                    ? 'bg-primary-500 text-white'
                    : 'hover:bg-secondary-100 dark:hover:bg-secondary-700'
                }`}
              >
                中文
              </button>
            </div>
          </div>

          {/* Share button (top) */}
          <div className="flex justify-end mb-6">
            <ShareButton />
          </div>

          {/* Hero Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={currentContent.title}
              className="w-full h-[400px] object-cover"
              style={post.id === 1 ? { objectPosition: 'center top' } : {}}
            />
          </div>

          {/* Title and Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              {currentContent.title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary-600 dark:text-secondary-400 mb-6">
              {currentContent.subtitle}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400">
              Jaime Grullon
            </p>
          </motion.div>

          {/* Category and Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 space-y-4"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-secondary-600 dark:text-secondary-400">
                Category:
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">
                {currentCategory}
              </span>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm font-semibold text-secondary-600 dark:text-secondary-400">
                Tags:
              </span>
              {currentTags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 bg-secondary-200 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-6 text-secondary-600 dark:text-secondary-400 text-sm">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="text-secondary-700 dark:text-secondary-300 leading-relaxed whitespace-pre-line text-lg space-y-4">
              {currentContent.content}
            </div>
          </motion.article>

          {/* Share button (bottom) */}
          <div className="flex justify-center mb-12">
            <ShareButton />
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center border-t border-secondary-200 dark:border-secondary-700 pt-8">
            {prev ? (
              <Link
                to={`/blog/${prev.slug}`}
                className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
              >
                <ChevronLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-secondary-500 dark:text-secondary-500">Previous</div>
                  <div className="font-semibold">{prev[activeLanguage].title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            
            {next ? (
              <Link
                to={`/blog/${next.slug}`}
                className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group text-right"
              >
                <div>
                  <div className="text-sm text-secondary-500 dark:text-secondary-500">Next</div>
                  <div className="font-semibold">{next[activeLanguage].title}</div>
                </div>
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;

