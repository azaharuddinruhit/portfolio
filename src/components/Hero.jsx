import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Grid, Download } from 'lucide-react';
import { projectsData } from '../data/projects';

const TITLES = [
  "Backend Engineer",
  "API Architect",
  "Distributed Systems Builder",
  "Java Developer"
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullTitle = TITLES[currentTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentFullTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
      } else {
        setCurrentText(currentFullTitle.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}resume.pdf`;
    link.download = 'Azaharuddin_Ruhit_Resume.pdf';
    link.click();
  };

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-[80px] overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="dot-grid"
            x="0" y="0"
            width="28" height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="1.5" cy="1.5" r="1.5"
              className="text-accent-light dark:text-accent-dark"
              fill="currentColor"
              style={{ opacity: 0.12 }}
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>
      
      <div className="relative max-w-[1100px] w-full px-6 flex flex-col items-start z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
            className="flex flex-col items-start min-w-0 overflow-hidden w-full"
          >
            <motion.span variants={fadeInUpVariant} className="font-mono text-accent-light dark:text-accent-dark text-lg mb-4">👋 Hey there, I'm</motion.span>
            <motion.h1 variants={fadeInUpVariant} className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-light dark:text-text-dark mb-4">Azaharuddin Ruhit</motion.h1>
            <motion.h2 variants={fadeInUpVariant} className="text-xl md:text-2xl lg:text-3xl font-bold text-muted-light dark:text-muted-dark mb-6 h-[1.2em] min-h-[2.5rem] md:min-h-[3rem] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="font-sans">{currentText}</span>
              <span className="text-accent-light dark:text-accent-dark cursor-blink">|</span>
            </motion.h2>
            <motion.p variants={fadeInUpVariant} className="max-w-xl text-lg text-muted-light dark:text-muted-dark mb-10">
              I build the systems that power what users never see.
            </motion.p>
            
            <motion.div variants={fadeInUpVariant} className="flex gap-3 flex-wrap items-center">
              <a href="#projects" className="inline-flex items-center gap-2 bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark font-mono font-bold text-sm px-6 py-3 rounded-lg hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200">
                <Grid size={16} />
                View Projects
              </a>
              <button onClick={handleDownloadResume} className="inline-flex items-center gap-2 bg-transparent text-accent-light dark:text-accent-dark font-mono text-sm px-6 py-3 rounded-lg border border-accent-light dark:border-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 hover:-translate-y-0.5 transition-all duration-200">
                <Download size={16} />
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          <div className="hidden lg:flex flex-col items-center justify-center relative gap-8">
            <div className="flex gap-4 justify-center flex-wrap hidden lg:flex">
              <div className="float-1 flex flex-col items-center justify-center w-36 sm:w-40 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl px-4 py-4 shadow-sm hover:border-accent-light dark:hover:border-accent-dark transition-colors duration-300">
                <span className="font-mono text-2xl font-medium text-accent-light dark:text-accent-dark">
                  5+
                </span>
                <span className="font-mono text-[10px] tracking-widest text-muted-light dark:text-muted-dark uppercase mt-1 text-center">
                  Yrs Experience
                </span>
              </div>

              <div className="float-2 flex flex-col items-center justify-center w-36 sm:w-40 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl px-4 py-4 shadow-sm hover:border-accent-light dark:hover:border-accent-dark transition-colors duration-300">
                <span className="font-mono text-2xl font-medium text-accent-light dark:text-accent-dark">
                  2M+
                </span>
                <span className="font-mono text-[10px] tracking-widest text-muted-light dark:text-muted-dark uppercase mt-1 text-center">
                  Daily API Reqs
                </span>
              </div>

              <div className="float-3 flex flex-col items-center justify-center w-36 sm:w-40 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl px-4 py-4 shadow-sm hover:border-accent-light dark:hover:border-accent-dark transition-colors duration-300">
                <span className="font-mono text-2xl font-medium text-accent-light dark:text-accent-dark">
                  {projectsData.length}+
                </span>
                <span className="font-mono text-[10px] tracking-widest text-muted-light dark:text-muted-dark uppercase mt-1 text-center">
                  Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
