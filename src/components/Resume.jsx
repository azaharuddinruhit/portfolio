// RESUME SETUP INSTRUCTIONS:
// 1. Export your resume as a single-page PDF.
// 2. Rename it to resume.pdf.
// 3. Place it in the /public folder of this project.
// 4. The download button will automatically serve it.
// 5. To update your resume, simply replace /public/resume.pdf.

import { motion } from 'motion/react';

const Resume = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Azaharuddin_Ruhit_Resume.pdf';
    link.click();
  };

  return (
    <motion.section 
      id="resume" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-[100px] max-w-[1100px] mx-auto px-6"
    >
      <h2 className="font-mono text-3xl text-text-light dark:text-text-dark mb-10 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[10%] before:h-[80%] before:w-1 before:bg-accent-light dark:before:bg-accent-dark before:rounded-sm">Resume</h2>
      <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-12 text-center max-w-2xl mx-auto shadow-lg flex flex-col items-center">
        <p className="text-muted-light dark:text-muted-dark mb-8 text-lg max-w-md">
          A single-page summary of my experience, skills, and education. Always kept up to date.
        </p>
        
        <button onClick={handleDownload} className="bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark font-bold font-mono py-3 px-8 rounded-full text-base mb-4 transition-all duration-200 hover:brightness-110 hover:-translate-y-1 hover:shadow-lg antialiased">
          ⬇ Download Resume (PDF)
        </button>
        
        <p className="text-muted-light dark:text-muted-dark text-sm">
          PDF · 1 page · Last updated {currentMonth} {currentYear}
        </p>
      </div>
    </motion.section>
  );
};

export default Resume;
