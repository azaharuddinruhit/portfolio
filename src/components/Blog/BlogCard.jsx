import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogCard = ({ blog, index }) => {
  // Read time is now estimated or provided in metadata
  const readTime = blog.readTime || 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-card-light dark:bg-card-dark rounded-2xl border border-border-light dark:border-border-dark overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-light/10 dark:hover:shadow-accent-dark/10 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-light/5 dark:bg-accent-dark/5 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-150"></div>
      
      <div className="p-8 pb-0 flex-grow relative z-10 flex flex-col">
        <div className="flex gap-2 flex-wrap mb-4">
          {blog.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-mono rounded-full bg-tag-bg-light dark:bg-tag-bg-dark text-accent-light dark:text-accent-dark border border-tag-bd-light dark:border-tag-bd-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-text-light dark:text-text-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-300">
          <Link to={`/blog/${blog.id}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {blog.title}
          </Link>
        </h3>
        
        <p className="text-muted-light dark:text-muted-dark leading-relaxed mb-6 flex-grow">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pb-8 pt-4 border-t border-border-light/50 dark:border-border-dark/50">
          <div className="flex items-center gap-4 text-sm text-muted-light dark:text-muted-dark font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-accent-light dark:text-accent-dark" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-accent-light dark:text-accent-dark" />
              {readTime} min read
            </span>
          </div>
          
          <span className="text-accent-light dark:text-accent-dark transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight size={20} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
