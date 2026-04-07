import { motion } from 'motion/react';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <motion.section 
      id="experience" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-[100px] max-w-[1100px] mx-auto px-6"
    >
      <h2 className="font-mono text-3xl text-text-light dark:text-text-dark mb-10 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[10%] before:h-[80%] before:w-1 before:bg-accent-light dark:before:bg-accent-dark before:rounded-sm">Experience</h2>
      
      <div className="relative max-w-4xl mx-auto before:content-[''] before:absolute before:left-[15px] md:before:left-1/2 md:before:-ml-[1px] before:top-0 before:bottom-0 before:w-[2px] before:bg-border-light before:dark:bg-border-dark">
        {experienceData.map((exp, index) => (
          <div key={index} className={`relative mb-12 flex flex-col md:flex-row justify-between items-start md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="absolute left-[11px] md:left-1/2 md:-ml-[5px] top-1 md:top-1/2 md:-mt-[5px] w-2.5 h-2.5 rounded-full bg-accent-light dark:bg-accent-dark ring-4 ring-bg-light dark:ring-bg-dark z-10"></div>
            
            <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:text-right'}`}>
              <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:border-accent-light dark:hover:border-accent-dark">
                <h3 className="font-mono text-xl text-accent-light dark:text-accent-dark mb-1">{exp.company}</h3>
                <h4 className="text-lg text-text-light dark:text-text-dark mb-2">{exp.role}</h4>
                <span className="inline-block font-mono text-sm text-muted-light dark:text-muted-dark mb-4">{exp.dates}</span>
                <ul className={`list-none space-y-2 text-muted-light dark:text-muted-dark ${index % 2 === 0 ? '' : 'md:inline-block md:text-left'}`}>
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="relative pl-4 before:content-['▹'] before:absolute before:left-0 before:text-accent-light dark:before:text-accent-dark">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
