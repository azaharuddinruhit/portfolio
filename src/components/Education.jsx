import { motion } from 'motion/react';
import education from '../data/education.js';

export default function Education() {
  return (
    <motion.section 
      id="education" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-[100px] max-w-[1100px] mx-auto px-6"
    >

      <h2 className="font-mono text-3xl text-text-light dark:text-text-dark mb-10 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[10%] before:h-[80%] before:w-1 before:bg-accent-light dark:before:bg-accent-dark before:rounded-sm">Education</h2>

      <div className="flex flex-col gap-6">
        {education.map((edu, i) => (
          <div key={i}
            className="bg-card-light dark:bg-card-dark
              border border-border-light dark:border-border-dark
              rounded-2xl p-8
              hover:border-accent-light dark:hover:border-accent-dark
              transition-colors duration-300">

            <div className="flex flex-col md:flex-row
              md:items-center md:justify-between gap-2 mb-4">

              <div>
                <span className="font-mono text-xs
                  text-accent-light dark:text-accent-dark
                  uppercase tracking-widest">
                  {edu.short}
                </span>
                <h3 className="font-mono text-lg font-medium
                  text-text-light dark:text-text-dark mt-1">
                  {edu.institution}
                </h3>
              </div>

              <span className="font-mono text-sm
                text-muted-light dark:text-muted-dark
                shrink-0">
                {edu.years}
              </span>

            </div>

            <p className="font-sans text-base font-medium
              text-text-light dark:text-text-dark mb-4">
              {edu.degree}
            </p>

            <ul className="flex flex-col gap-2">
              {edu.highlights.map((point, j) => (
                <li key={j}
                  className="flex gap-3 font-sans text-sm
                    text-muted-light dark:text-muted-dark
                    leading-relaxed">
                  <span className="text-accent-light
                    dark:text-accent-dark mt-0.5 shrink-0">
                    ▸
                  </span>
                  {point}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

    </motion.section>
  );
}
