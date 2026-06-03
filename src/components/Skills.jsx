import { skillGroups } from '../data/portfolio';
import { useScrollFade } from '../hooks/useScrollFade';
import SectionHeader from './SectionHeader';
import styles from './Skills.module.css';

export default function Skills() {
  const h = useScrollFade();
  const g = useScrollFade();
  return (
    <section id="skills" className={styles.section}>
      <div ref={h.ref} className={`${styles.fadeUp} ${h.visible ? styles.visible : ''}`}>
        <SectionHeader num="04" title="skills.config" />
      </div>
      <div ref={g.ref} className={`${styles.grid} ${styles.fadeUp} ${g.visible ? styles.visible : ''}`}>
        {skillGroups.map(group => (
          <div key={group.label} className={styles.group}>
            <div className={styles.groupTitle}>{group.label}</div>
            <div className={styles.list}>
              {group.skills.map(s => (
                <span key={s.name} className={`${styles.skill} ${s.hot ? styles.hot : ''}`}>
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
