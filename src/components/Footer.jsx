import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>inarat hussain</span>
      {' · '}All rights reserved
    </footer>
  );
}
