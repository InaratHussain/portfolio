import { meta, roles, stats } from '../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.prompt}>
          <span className={styles.pulse} />
          system online | SDE &amp; AI Engineer
        </div>

        <h1 className={styles.name}>
          Inarat<br /><span className={styles.accent}>Hussain.</span>
        </h1>

        <p className={styles.tagline}>
          I build <span className={styles.hlBlue}>scalable systems</span> that ship and{' '}
          <span className={styles.hlPurple}>AI pipelines</span> that work in production.
          Let's connect if you are building something fun!
        </p>

        <div className={styles.roles}>
          {roles.map(r => (
            <span key={r} className={`${styles.badge} ${['SDE','AI Engineer'].includes(r) ? styles.active : ''}`}>
              {r}
            </span>
          ))}
        </div>

        <div className={styles.ctas}>
          <a href={`mailto:${meta.email}`} className={styles.btnPrimary}>Let's connect</a>
          <a href={meta.resume} className={styles.btnGhost}>↓ resume</a>
        </div>

        <div className={styles.stats}>
          {stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
