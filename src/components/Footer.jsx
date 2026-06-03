import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>inarat hussain</span>
      {' · '}IIIT Vadodara &apos;26
    </footer>
  );
}
