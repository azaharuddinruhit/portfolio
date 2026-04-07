import { motion } from 'motion/react';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <motion.section 
      id="skills" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-[100px] max-w-[1100px] mx-auto px-6"
    >
      <h2 className="font-mono text-3xl text-text-light dark:text-text-dark mb-10 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[10%] before:h-[80%] before:w-1 before:bg-accent-light dark:before:bg-accent-dark before:rounded-sm">Skills</h2>
      
      <div className="flex flex-col gap-8">
        {skillsData.map((category, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-start">
            <h3 className="font-mono text-lg text-text-light dark:text-text-dark md:w-48 shrink-0">{category.category}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="font-mono text-sm bg-tag-bg-light dark:bg-tag-bg-dark border border-tag-bd-light dark:border-tag-bd-dark text-text-light dark:text-text-dark px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-1 hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark hover:shadow-glow">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
