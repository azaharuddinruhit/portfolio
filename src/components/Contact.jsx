import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const FORMSPREE_URL = "https://formspree.io/f/mjgajkyo";

const SocialLink = ({ href, icon, text, isExternal = true }) => (
  <a 
    href={href} 
    {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    className="flex items-center gap-3 group"
  >
    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-accent-light/10 dark:bg-accent-dark/10 border border-accent-light/20 dark:border-accent-dark/20">
      {icon}
    </div>
    <span className="font-mono text-xs text-muted-light dark:text-muted-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-200 break-all">
      {text}
    </span>
  </a>
);

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-[100px] max-w-[1100px] mx-auto px-6"
    >
      <h2 className="font-mono text-3xl text-text-light dark:text-text-dark mb-10 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[10%] before:h-[80%] before:w-1 before:bg-accent-light dark:before:bg-accent-dark before:rounded-sm">
        Contact
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] items-stretch bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden">
        
        {/* LEFT PANE */}
        <div className="flex flex-col justify-between gap-8 p-8 h-full border-b lg:border-b-0 lg:border-r border-border-light dark:border-border-dark">
          <div>
            <h3 className="font-mono text-xl font-medium text-text-light dark:text-text-dark leading-snug">
              Let's work<br />together.
            </h3>
            <p className="font-sans text-sm text-muted-light dark:text-muted-dark leading-relaxed mt-3">
              Open to backend roles,<br />
              system design chats,<br />
              and OSS collaboration.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <SocialLink 
              href="https://github.com/azaharuddinruhit" 
              text="github.com/azaharuddinruhit"
              icon={<Github size={14} className="text-accent-light dark:text-accent-dark" />} 
            />
            <SocialLink 
              href="https://www.linkedin.com/in/azaharuddinruhit/" 
              text="linkedin.com/in/azaharuddinruhit"
              icon={<Linkedin size={14} className="text-accent-light dark:text-accent-dark" />} 
            />
            <SocialLink 
              href="mailto:azaharuddin.ruhit@gmail.com" 
              text="azaharuddin.ruhit@gmail.com"
              isExternal={false}
              icon={<Mail size={14} className="text-accent-light dark:text-accent-dark" />} 
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-accent-light dark:bg-accent-dark animate-pulse" />
            <span className="font-mono text-xs text-muted-light dark:text-muted-dark">
              Dhaka · Open to remote
            </span>
          </div>
        </div>

        {/* RIGHT PANE */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-light dark:text-muted-dark">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="recruiter@company.com"
                className="bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-3 font-mono text-sm text-text-light dark:text-text-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-light dark:text-muted-dark">
                Message
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Azaharuddin, I have a backend role that might interest you..."
                rows={6}
                className="bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-3 font-mono text-sm text-text-light dark:text-text-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors duration-200 resize-none flex-1"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2 bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark font-mono font-bold text-sm px-6 py-3 rounded-lg w-full hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:brightness-100 disabled:hover:translate-y-0 transition-all duration-200"
            >
              <Send size={14} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="font-mono text-xs text-center text-accent-light dark:text-accent-dark">
                ✓ Message sent — I'll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className="font-mono text-xs text-center text-red-400 dark:text-red-400">
                Something went wrong. Please try emailing directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
