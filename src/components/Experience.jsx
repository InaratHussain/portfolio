import { experience } from '../data/portfolio';
import { useScrollFade } from '../hooks/useScrollFade';
import SectionHeader from './SectionHeader';
import styles from './Experience.module.css';

function ExpCard({ exp }) {
  const { ref, visible } = useScrollFade();
  return (
    <div ref={ref} className={`${styles.card} ${exp.type === 'ai' ? styles.ai : ''} ${styles.fadeUp} ${visible ? styles.visible : ''}`}>
      <div className={styles.header}>
        <div className={styles.title}>{exp.title}</div>
        <div className={styles.date}>{exp.date}</div>
      </div>
      <div className={styles.org}>{exp.org}</div>
      <ul className={styles.bullets}>
        {exp.bullets.map((b, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: b.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        ))}
      </ul>
      {exp.pubLink && (
        <a href={exp.pubLink} target="_blank" rel="noreferrer" className={styles.pubBadge}>
          Published: Springer Nature Switerland 2025
        </a>
      )}
    </div>
  );
}

export default function Experience() {
  const h = useScrollFade();
  return (
    <section id="experience" className={styles.section}>
      <div ref={h.ref} className={`${styles.fadeUp} ${h.visible ? styles.visible : ''}`}>
        <SectionHeader num="02" title="experience.log" />
      </div>
      {experience.map(exp => <ExpCard key={exp.id} exp={exp} />)}
    </section>
  );
}
