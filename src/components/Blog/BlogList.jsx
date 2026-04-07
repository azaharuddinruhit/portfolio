import { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogs } from '../../data/blogs';
import BlogCard from './BlogCard';

const POSTS_PER_PAGE = 6;

const BlogList = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract all unique tags from blogs
  const allTags = useMemo(() => {
    const tags = new Set();
    blogs.forEach(blog => {
      blog.tags.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags)];
  }, []);

  const filteredBlogs = useMemo(() => {
    if (activeTag === 'All') return blogs;
    return blogs.filter(blog => blog.tags.includes(activeTag));
  }, [activeTag]);

  // Reset to page 1 when tag changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTag]);

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  
  const currentBlogs = useMemo(() => {
    return filteredBlogs.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  return (
    <section className="pt-32 pb-20 px-6 max-w-[1100px] mx-auto min-h-screen">
      <div className="mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="p-3 bg-tag-bg-light dark:bg-tag-bg-dark rounded-xl border border-tag-bd-light dark:border-tag-bd-dark text-accent-light dark:text-accent-dark">
            <FileText size={24} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark">
            Blog
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-light dark:text-muted-dark max-w-2xl"
        >
          Thoughts, learnings, and insights about web development, design, and my journey as a developer.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12 flex flex-col sm:flex-row gap-4 justify-between items-center"
      >
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start w-full">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-mono transition-all duration-300 border ${
                activeTag === tag
                  ? 'bg-accent-light dark:bg-accent-dark text-white border-transparent shadow-lg shadow-accent-light/20 dark:shadow-accent-dark/20'
                  : 'bg-tag-bg-light dark:bg-tag-bg-dark text-text-light dark:text-text-dark border-tag-bd-light dark:border-tag-bd-dark hover:border-accent-light dark:hover:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light/50 dark:focus:ring-accent-dark/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      {filteredBlogs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>

          {totalPages > 1 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-16 flex justify-center items-center gap-2 sm:gap-4 font-mono"
            >
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="p-2 rounded-full border border-transparent hover:border-border-light dark:hover:border-border-dark text-text-light dark:text-text-dark hover:bg-tag-bg-light dark:hover:bg-tag-bg-dark disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-1 max-w-[200px] sm:max-w-none">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-xs sm:text-sm transition-all focus:outline-none ${
                        currentPage === i + 1 
                        ? 'bg-accent-light dark:bg-accent-dark text-white' 
                        : 'text-text-light dark:text-text-dark hover:bg-tag-bg-light dark:hover:bg-tag-bg-dark border border-transparent hover:border-border-light dark:hover:border-border-dark'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="p-2 rounded-full border border-transparent hover:border-border-light dark:hover:border-border-dark text-text-light dark:text-text-dark hover:bg-tag-bg-light dark:hover:bg-tag-bg-dark disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          )}
        </>
      ) : (
        <div className="py-20 text-center">
          <div className="inline-flex items-center justify-center p-6 bg-tag-bg-light dark:bg-tag-bg-dark rounded-full mb-6 text-muted-light dark:text-muted-dark">
            <Search size={48} />
          </div>
          <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">No blogs found</h3>
          <p className="text-muted-light dark:text-muted-dark">
            Check back later for posts tagged with "{activeTag}".
          </p>
        </div>
      )}
    </section>
  );
};

export default BlogList;
