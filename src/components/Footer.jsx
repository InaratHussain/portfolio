import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>inarat hussain</span>
      {' · '}built with React + Vite{' · '}IIIT Vadodara &apos;26
    </footer>
  );
}
