import { motion } from 'motion/react';

const About = () => {
  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-[100px] max-w-[1100px] mx-auto px-6"
    >
      <h2 className="font-mono text-3xl text-text-light dark:text-text-dark mb-10 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[10%] before:h-[80%] before:w-1 before:bg-accent-light dark:before:bg-accent-dark before:rounded-sm">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden shadow-lg">
          <div className="bg-border-light dark:bg-border-dark px-4 py-3 flex gap-2 border-b border-border-light dark:border-border-dark">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="p-6 font-mono text-sm text-muted-light dark:text-muted-dark overflow-x-auto custom-scrollbar">
            <p><span className="text-accent-light dark:text-accent-dark">$</span> whoami</p>
            <p className="text-text-light dark:text-text-dark">{'>'} Azaharuddin Ruhit — Backend Engineer</p>
            <br />
            <p><span className="text-accent-light dark:text-accent-dark">$</span> cat facts.json</p>
            <pre className="text-text-light dark:text-text-dark mt-2">
{`{
  "location": "Dhaka, Bangladesh",
  "open_to": ["Remote", "Hybrid", "On-site"],
  "interests": ["System Design", "OSS", "Chess"],
  "currently": "Building scalable APIs"
}`}
            </pre>
          </div>
        </div>
        
        <div className="text-muted-light dark:text-muted-dark space-y-4 text-lg flex flex-col items-start">
          <p>
            I'm a backend engineer based in Dhaka, Bangladesh, specializing in designing
            and scaling Java-based microservices and REST APIs. I care deeply about system
            reliability, clean architecture, and writing code that future-me won't hate.
          </p>
          <p>
            When I'm not debugging production incidents, I'm probably reading about
            distributed systems or tinkering with side projects.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
