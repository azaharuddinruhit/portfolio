import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Loader, FileText } from 'lucide-react';
import { blogs } from '../../data/blogs';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, dracula, prism, oneLight, duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPost = ({ isDarkMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Determine code theme based on app theme
  const syntaxTheme = isDarkMode ? dracula : prism;

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const foundBlog = blogs.find(b => b.id === id);

    if (foundBlog) {
      fetch(`/blogs/${id}.md`)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch markdown');
          return res.text();
        })
        .then(text => {
          setBlog({ ...foundBlog, content: text });
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          navigate('/blog', { replace: true });
        });
    } else {
      navigate('/blog', { replace: true });
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin text-accent-light dark:text-accent-dark" size={48} />
      </div>
    );
  }

  if (!blog) return null;

  return (
    <article className="pt-32 pb-20 px-6 max-w-[800px] mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-light dark:text-muted-dark hover:text-accent-light dark:hover:text-accent-dark mb-12 transition-colors font-mono text-sm"
        >
          <ArrowLeft size={16} />
          Back to Blogs
        </Link>
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-16"
      >
        <div className="flex gap-2 flex-wrap mb-6">
          {blog.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono rounded-full bg-tag-bg-light dark:bg-tag-bg-dark text-accent-light dark:text-accent-dark border border-tag-bd-light dark:border-tag-bd-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-light dark:text-text-dark mb-6 leading-tight break-words">
          {blog.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-muted-light dark:text-muted-dark font-mono bg-tag-bg-light/50 dark:bg-tag-bg-dark/50 inline-flex px-3 py-1.5 rounded-md border border-border-light dark:border-border-dark">
          <Calendar size={14} className="text-accent-light dark:text-accent-dark" />
          <time dateTime={blog.date}>{blog.date}</time>
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose md:prose-lg dark:prose-invert prose-headings:text-text-light dark:prose-headings:text-text-dark prose-p:text-muted-light dark:prose-p:text-muted-dark prose-a:text-accent-light dark:prose-a:text-accent-dark hover:prose-a:text-accent-light/80 max-w-none prose-pre:bg-card-light dark:prose-pre:bg-card-dark prose-pre:border prose-pre:border-border-light dark:prose-pre:border-border-dark prose-pre:text-text-light dark:prose-pre:text-text-dark prose-pre:max-w-[calc(100vw-3rem)] sm:prose-pre:max-w-full prose-img:rounded-xl break-words"
      >
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  style={syntaxTheme}
                  language={match[1]}
                  PreTag="div"
                  codeTagProps={{
                    style: {
                      fontFamily: '"DM Mono", monospace',
                    }
                  }}
                  customStyle={{
                    background: 'transparent',
                    margin: 0,
                    padding: 0,
                    fontFamily: '"DM Mono", monospace',
                  }}
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            }
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-20 pt-8 border-t border-border-light dark:border-border-dark flex flex-wrap gap-4 justify-between items-center"
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors font-bold"
        >
          <ArrowLeft size={20} className="text-accent-light dark:text-accent-dark" />
          Read More Posts
        </Link>
        <div className="p-3 bg-tag-bg-light dark:bg-tag-bg-dark rounded-xl border border-tag-bd-light dark:border-tag-bd-dark text-accent-light dark:text-accent-dark">
          <FileText size={24} />
        </div>
      </motion.div>
    </article>
  );
};

export default BlogPost;
