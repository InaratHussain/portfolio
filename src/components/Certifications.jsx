import { certifications } from '../data/portfolio';
import { useScrollFade } from '../hooks/useScrollFade';
import SectionHeader from './SectionHeader';
import styles from './Certifications.module.css';

function CertCard({ cert, index }) {
  const { ref, visible } = useScrollFade();
  return (
    <div
      ref={ref}
      className={`${styles.card} ${styles.fadeUp} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.cardTop}>
        <div className={`${styles.issuerBadge} ${styles[cert.issuerType]}`}>
          {cert.issuer}
        </div>
        <div className={styles.year}>{cert.year}</div>
      </div>

      <div className={styles.title}>{cert.title}</div>

      <div className={styles.skills}>
        {cert.skills.map(s => (
          <span key={s} className={styles.skillTag}>{s}</span>
        ))}
      </div>

      <a href={cert.credentialLink} target="_blank" rel="noreferrer" className={styles.credLink}>
        → view credential
      </a>
    </div>
  );
}

export default function Certifications() {
  const h = useScrollFade();
  return (
    <section id="certifications" className={styles.section}>
      <div ref={h.ref} className={`${styles.fadeUp} ${h.visible ? styles.visible : ''}`}>
        <SectionHeader num="05" title="certifications.json" />
      </div>
      <div className={styles.grid}>
        {certifications.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>
    </section>
  );
}