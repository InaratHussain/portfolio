import { useScrollFade } from '../hooks/useScrollFade';
import Terminal from './Terminal';
import SectionHeader from './SectionHeader';
import styles from './About.module.css';

export default function About() {
  const h = useScrollFade();
  const g = useScrollFade();

  return (
    <section id="about" className={styles.section}>
      <div ref={h.ref} className={`${styles.fadeUp} ${h.visible ? styles.visible : ''}`}>
        <SectionHeader num="01" title="about.json" />
      </div>
      <div ref={g.ref} className={`${styles.grid} ${styles.fadeUp} ${g.visible ? styles.visible : ''}`}>
        <Terminal title="profile.json">
          <div className={styles.line}><span className={styles.comment}>{'// who i am'}</span></div>
          <div className={styles.line}><span className={styles.key}>&quot;name&quot;</span><span className={styles.cmd}>: </span><span className={styles.str}>&quot;Inarat Hussain&quot;</span><span className={styles.cmd}>,</span></div>
          <div className={styles.line}><span className={styles.key}>&quot;degree&quot;</span><span className={styles.cmd}>: </span><span className={styles.str}>&quot;B.Tech CSE, IIIT Vadodara&quot;</span><span className={styles.cmd}>,</span></div>
          <div className={styles.line}><span className={styles.key}>&quot;graduation&quot;</span><span className={styles.cmd}>: </span><span className={styles.str}>&quot;May 2026&quot;</span><span className={styles.cmd}>,</span></div>
          <div className={styles.line}><span className={styles.key}>&quot;cpi&quot;</span><span className={styles.cmd}>: </span><span className={styles.val}>8.42</span><span className={styles.cmd}>,</span></div>
          <div className={styles.line}><span className={styles.key}>&quot;location&quot;</span><span className={styles.cmd}>: </span><span className={styles.str}>&quot;India&quot;</span><span className={styles.cmd}>,</span></div>
          <div className={styles.line}><span className={styles.key}>&quot;open_to&quot;</span><span className={styles.cmd}>: [</span></div>
          <div className={styles.line}><span className={styles.out}><span className={styles.str}>&quot;SDE&quot;</span><span className={styles.cmd}>,</span></span></div>
          <div className={styles.line}><span className={styles.out}><span className={styles.str}>&quot;AI/ML Engineer&quot;</span></span></div>
          <div className={styles.line}><span className={styles.cmd}>],</span></div>
        </Terminal>

        <Terminal title="interests.sh">
          <div className={styles.line}><span className={styles.prompt}>$ </span><span className={styles.cmd}>cat interests.txt</span></div>
          <div className={styles.line}>&nbsp;</div>
          <div className={styles.line}><span className={styles.comment}># what i build</span></div>
          <div className={styles.line}><span className={styles.out}>→ Real-time data platforms</span></div>
          <div className={styles.line}><span className={styles.out}>→ Privacy-preserving AI systems</span></div>
          <div className={styles.line}><span className={styles.out}>→ LLM pipelines &amp; agents</span></div>
          <div className={styles.line}><span className={styles.out}>→ Full-stack MERN apps</span></div>
          <div className={styles.line}>&nbsp;</div>
          <div className={styles.line}><span className={styles.prompt}>$ </span><span className={styles.cmd}>echo $STATUS</span></div>
          <div className={styles.line}><span className={styles.val}>actively seeking full-time roles (2026)</span></div>
        </Terminal>
      </div>
    </section>
  );
}
