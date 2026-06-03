import { useState, useEffect } from 'react';
import { meta } from '../data/portfolio';
import styles from './Navbar.module.css';

const links = ['about', 'experience', 'projects', 'skills', 'certifications', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.logoMuted}>~/</span>inarat-hussain
      </div>
      <div className={styles.links}>
        {links.map(l => (
          <button key={l} className={styles.link} onClick={() => scrollTo(l)}>
            {l}
          </button>
        ))}
      </div>
      <a href={`mailto:${meta.email}`} className={styles.cta}>Let's connect</a>
    </nav>
  );
}
