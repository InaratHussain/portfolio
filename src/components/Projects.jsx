import { projects } from '../data/portfolio';
import { useScrollFade } from '../hooks/useScrollFade';
import SectionHeader from './SectionHeader';
import styles from './Projects.module.css';

function ProjectCard({ proj }) {
  const { ref, visible } = useScrollFade();
  return (
    <div ref={ref} className={`${styles.card} ${styles.fadeUp} ${visible ? styles.visible : ''}`}>
      <div className={`${styles.kind} ${styles[proj.kind]}`}>{proj.kindLabel}</div>
      <div className={styles.title}>{proj.title}</div>
      <div className={styles.desc}>{proj.desc}</div>
      <div className={styles.metrics}>
        {proj.metrics.map(m => (
          <span key={m} className={`${styles.metric} ${proj.metricType === 'ai' ? styles.metricAi : ''}`}>{m}</span>
        ))}
      </div>
      <div className={styles.stack}>
        {proj.stack.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      <a href={proj.github} target="_blank" rel="noreferrer" className={styles.link}>
        → view on github
      </a>
    </div>
  );
}

export default function Projects() {
  const h = useScrollFade();
  return (
    <section id="projects" className={styles.section}>
      <div ref={h.ref} className={`${styles.fadeUp} ${h.visible ? styles.visible : ''}`}>
        <SectionHeader num="03" title="projects/" />
      </div>
      <div className={styles.grid}>
        {projects.map(p => <ProjectCard key={p.id} proj={p} />)}
      </div>
    </section>
  );
}
