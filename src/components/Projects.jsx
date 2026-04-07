import { motion } from 'motion/react';
import { Github } from 'lucide-react';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-[100px] max-w-[1100px] mx-auto px-6"
    >
      <h2 className="font-mono text-3xl text-text-light dark:text-text-dark mb-10 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[10%] before:h-[80%] before:w-1 before:bg-accent-light dark:before:bg-accent-dark before:rounded-sm">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div key={index} className="relative bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-7 flex flex-col transition-all duration-300 hover:border-accent-light dark:hover:border-accent-dark hover:shadow-glow hover:-translate-y-1">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="absolute top-7 right-7 text-muted-light dark:text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200" aria-label="View Source on GitHub">
              <Github size={20} />
            </a>
            <h3 className="font-mono text-xl text-accent-light dark:text-accent-dark mb-4 pr-8">{project.name}</h3>
            <p className="text-muted-light dark:text-muted-dark text-sm mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="font-mono text-xs bg-tag-bg-light dark:bg-tag-bg-dark border border-tag-bd-light dark:border-tag-bd-dark text-text-light dark:text-text-dark px-2 py-1 rounded-md">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
