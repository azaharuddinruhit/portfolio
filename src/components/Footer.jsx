const Footer = () => {
  return (
    <footer className="text-center py-10 px-6 text-muted-light dark:text-muted-dark text-sm font-mono border-t border-border-light dark:border-border-dark">
      <p className="font-mono text-sm tracking-widest text-muted-light dark:text-muted-dark">
        <span className="text-text-light dark:text-text-dark font-medium">
          Azaharuddin Ruhit
        </span>
        <span className="mx-3 text-accent-light dark:text-accent-dark">
          ·
        </span>
        <span>
          {new Date().getFullYear()}
        </span>
      </p>
    </footer>
  );
};

export default Footer;
