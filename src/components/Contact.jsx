import { meta } from '../data/portfolio';
import { useScrollFade } from '../hooks/useScrollFade';
import Terminal from './Terminal';
import SectionHeader from './SectionHeader';
import styles from './Contact.module.css';

const contactLinks = [
  { icon: '✉', label: 'EMAIL — fastest response', text: meta.email, href: `mailto:${meta.email}` },
  { icon: 'in', label: 'LINKEDIN', text: 'linkedin.com/in/inarat-hussain', href: meta.linkedin },
  { icon: '⌥', label: 'GITHUB — code & projects', text: 'github.com/inarat-hussain', href: meta.github },
  { icon: '⊞', label: 'LEETCODE', text: 'leetcode.com/inarat', href: meta.leetcode },
  { icon: '⊕', label: 'RESEARCH PAPER', text: 'DKCAE — Springer Nature 2025', href: meta.paper },
];

export default function Contact() {
  const h = useScrollFade();
  const t = useScrollFade();
  const l = useScrollFade();

  return (
    <section id="contact" className={styles.section}>
      <div ref={h.ref} className={`${styles.fadeUp} ${h.visible ? styles.visible : ''}`}>
        <SectionHeader num="05" title="contact.sh" />
      </div>
      <div className={styles.grid}>
        <div ref={t.ref} className={`${styles.fadeUp} ${t.visible ? styles.visible : ''}`}>
          <Terminal title="reach_out.sh">
            <div className={styles.line}><span className={styles.prompt}>$ </span><span className={styles.cmd}>echo &quot;open to opportunities&quot;</span></div>
            <div className={styles.line}><span className={styles.val}>open to opportunities</span></div>
            <div className={styles.line}>&nbsp;</div>
            <div className={styles.line}><span className={styles.comment}># available for</span></div>
            <div className={styles.line}><span className={styles.out}>→ Full-time SDE / AI Engineer roles</span></div>
            <div className={styles.line}><span className={styles.out}>→ Research collaborations</span></div>
            <div className={styles.line}><span className={styles.out}>→ Internship extensions</span></div>
            <div className={styles.line}>&nbsp;</div>
            <div className={styles.line}><span className={styles.prompt}>$ </span><span className={styles.cmd}>cat response_time.txt</span></div>
            <div className={styles.line}><span className={styles.val}>usually within 24 hours</span></div>
          </Terminal>
        </div>

        <div ref={l.ref} className={`${styles.links} ${styles.fadeUp} ${l.visible ? styles.visible : ''}`}>
          {contactLinks.map(c => (
            <a key={c.label} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className={styles.contactLink}>
              <span className={styles.icon}>{c.icon}</span>
              <div>
                <div className={styles.linkText}>{c.text}</div>
                <div className={styles.linkLabel}>{c.label}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
