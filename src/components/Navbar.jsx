import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'About', type: 'hash', path: '#about' },
    { name: 'Skills', type: 'hash', path: '#skills' },
    { name: 'Experience', type: 'hash', path: '#experience' },
    { name: 'Education', type: 'hash', path: '#education' },
    { name: 'Projects', type: 'hash', path: '#projects' },
    { name: 'Blog', type: 'route', path: '/blog' },
    { name: 'Resume', type: 'hash', path: '#resume' },
    { name: 'Contact', type: 'hash', path: '#contact' },
  ];

  useEffect(() => {
    if (!isHome) return;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.filter(l => l.type === 'hash').map(link => document.getElementById(link.name.toLowerCase()));
      let current = '';
      
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks, isHome]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-bg-light/90 dark:bg-bg-dark/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-0 group hover:opacity-80 transition-opacity duration-200 whitespace-nowrap min-w-0 shrink-0">
          <span className="font-mono text-sm text-muted-light dark:text-muted-dark">
            azaharuddin.ruhit
          </span>
          <span className="font-mono text-sm text-accent-light dark:text-accent-dark">
            @dev
          </span>
          <span className="font-mono text-sm text-muted-light dark:text-muted-dark">
            :
          </span>
          <span className="font-mono text-sm text-accent-light dark:text-accent-dark">
            ~
          </span>
          <span className="font-mono text-sm text-muted-light dark:text-muted-dark">
            $
          </span>
        </Link>

        <div className={`absolute lg:static top-full left-0 right-0 bg-bg-light dark:bg-bg-dark lg:bg-transparent lg:dark:bg-transparent overflow-hidden transition-all duration-300 ease-in-out lg:max-h-none lg:opacity-100 lg:pointer-events-auto ${mobileMenuOpen ? 'max-h-[600px] opacity-100 shadow-lg lg:shadow-none' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-0">
            {navLinks.map((link) => {
              const isActive = link.type === 'hash' 
                ? activeSection === link.name.toLowerCase() 
                : location.pathname.startsWith(link.path);
                
              const linkClasses = `font-mono text-sm uppercase tracking-wider transition-colors duration-200 hover:text-accent-light dark:hover:text-accent-dark ${isActive ? 'text-accent-light dark:text-accent-dark' : 'text-text-light dark:text-text-dark'}`;

              return link.type === 'hash' ? (
                <a
                  key={link.name}
                  href={isHome ? link.path : `${import.meta.env.BASE_URL}${link.path}`}
                  className={linkClasses}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={linkClasses}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <button 
              className={`p-2 rounded-full transition-all duration-300 hover:bg-tag-bg-light dark:hover:bg-tag-bg-dark text-text-light dark:text-text-dark ${!isDarkMode ? 'rotate-[360deg]' : ''}`} 
              onClick={() => {
                toggleTheme();
                setMobileMenuOpen(false);
              }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        <button 
          className="lg:hidden p-2 text-text-light dark:text-text-dark shrink-0" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
