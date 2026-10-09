import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { experience, skills } from './content';
import './styles.scss';
const nav = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['contact', 'Contact'],
];
function Icon({ name }) {
  return <span className={`icon icon-${name}`} aria-hidden="true" />;
}
function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/Car1eano">
        <Icon name="github" />
        GitHub
      </a>
      <a href="https://linkedin.com/in/carleanochang">
        <Icon name="linkedin" />
        LinkedIn
      </a>
      <a href="mailto:poching2@illinois.edu">
        <Icon name="email" />
        Email
      </a>
    </div>
  );
}
function App() {
  const [compact, setCompact] = useState(false),
    [active, setActive] = useState('about'),
    [selected, setSelected] = useState(null);
  const header = useRef(null),
    dialog = useRef(null),
    previousFocus = useRef(null);
  useEffect(() => {
    let frame;
    const update = () => {
      setCompact(window.scrollY > 32);
      // Match the browser's anchor landing position, including section scroll margin.
      const scrollPadding =
        parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      let current = 'about';
      nav.forEach(([id]) => {
        const section = document.getElementById(id);
        const scrollMargin = parseFloat(getComputedStyle(section).scrollMarginTop) || 0;
        const edge = scrollPadding + scrollMargin + 1;
        if (section.getBoundingClientRect().top <= edge) current = id;
      });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3)
        current = 'contact';
      setActive(current);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(header.current);
    update();
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);
  useEffect(() => {
    if (selected) {
      previousFocus.current = document.activeElement;
      dialog.current.showModal();
      document.body.classList.add('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selected]);
  const close = () => {
    dialog.current?.close();
    setSelected(null);
    previousFocus.current?.focus();
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header ref={header} className={`site-header ${compact ? 'compact' : ''}`}>
        <div className="nav-shell">
          <a className="wordmark" href="#about" aria-label="Carleano Chang, back to introduction">
            carleano<span>.</span>
          </a>
          <nav aria-label="Main navigation">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main">
        <section id="about" className="section intro">
          <div className="reading-width">
            <h1>Carleano Chang</h1>
            <p className="lede">
              Building useful software,
              <br />
              one thoughtful detail at a time.
            </p>
            <p>
              I’m a Master of Computer Science student at the University of Illinois
              Urbana-Champaign, with a background in computer science from National Tsing Hua
              University.
            </p>
            <p>
              My experience spans backend systems, Android interfaces, test automation, and machine
              learning pipelines. I’ve worked with teams at TSMC, CloudMile, and Garmin.
            </p>
            <SocialLinks />
            <a
              className="text-link resume-link"
              href="/assets/documents/Carleano-Chang-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Read my résumé <span aria-hidden="true">↗</span>
            </a>
            <div className="intro-note">
              <span className="status-dot" />
              Currently at UIUC · MCS, Class of 2027
            </div>
          </div>
        </section>
        <section id="experience" className="section tinted">
          <div className="reading-width">
            <div className="section-heading">
              <span className="section-number">01</span>
              <h2>Where I’ve been</h2>
            </div>
            <p className="section-intro">
              Different teams, different problems. A shared focus on making software work better.
            </p>
            <div className="experience-list">
              {experience.map((e) => (
                <article key={e.company} className="experience-item">
                  <div className="entry-meta">
                    <span>{e.date}</span>
                    <span>{e.location}</span>
                  </div>
                  <div className="organization-heading">
                    {e.logo && (
                      <img
                        className="organization-logo"
                        src={e.logo}
                        alt={`${e.company} logo`}
                        loading="lazy"
                      />
                    )}
                    <h3>{e.company}</h3>
                  </div>
                  <p className="role">
                    {e.role} <span> / {e.team}</span>
                  </p>
                  <p>{e.summary}</p>
                  <button className="text-link" onClick={() => setSelected(e)}>
                    Explore this experience <span aria-hidden="true">↗</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="landscape-band" aria-label="Illustrated landscape">
          <div>
            <p>From Taiwan to Illinois.</p>
            <span>A journey in learning and building.</span>
          </div>
        </section>
        <section id="education" className="section">
          <div className="reading-width">
            <div className="section-heading">
              <span className="section-number">02</span>
              <h2>Learning, always</h2>
            </div>
            <article className="education-entry">
              <div className="entry-meta">
                <span>Aug 2025 — May 2027</span>
                <span>Urbana-Champaign, IL</span>
              </div>
              <div className="organization-heading">
                <img
                  className="organization-logo school-logo"
                  src="/assets/images/education/Illinois.png"
                  alt="University of Illinois logo"
                  loading="lazy"
                />
                <h3>University of Illinois Urbana-Champaign</h3>
              </div>
              <p>Master of Computer Science</p>
              <p className="caption">GPA 3.94 / 4.0</p>
            </article>
            <article className="education-entry">
              <div className="entry-meta">
                <span>Sep 2019 — Jun 2024</span>
                <span>Hsinchu, Taiwan</span>
              </div>
              <div className="organization-heading">
                <img
                  className="organization-logo school-logo"
                  src="/assets/images/education/NTHU.jpg"
                  alt="National Tsing Hua University logo"
                  loading="lazy"
                />
                <h3>National Tsing Hua University</h3>
              </div>
              <p>Bachelor of Science in Computer Science</p>
              <p className="caption">GPA 3.91 / 4.0</p>
            </article>
          </div>
          <div className="wide-width skills-wrap">
            <h3 className="skills-heading">My toolkit</h3>
            <div className="skills-grid">
              {skills.map((s) => (
                <div key={s.title}>
                  <h4>{s.title}</h4>
                  <ul>
                    {s.items.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="section contact tinted">
          <div className="reading-width">
            <div className="section-heading">
              <span className="section-number">03</span>
              <h2>Let’s connect</h2>
            </div>
            <p className="lede">Have something in mind?</p>
            <p>
              For a conversation about software, a project, or an opportunity, you can reach me
              here.
            </p>
            <a className="email-link" href="mailto:poching2@illinois.edu">
              poching2@illinois.edu <span aria-hidden="true">↗</span>
            </a>
            <SocialLinks />
          </div>
        </section>
      </main>
      <footer>
        <div className="wide-width">
          <span>© {new Date().getFullYear()} Carleano Chang</span>
          <a href="#about">Back to top ↑</a>
        </div>
      </footer>
      <dialog
        ref={dialog}
        onCancel={close}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        aria-labelledby="dialog-title"
      >
        <div className="dialog-content">
          {selected && (
            <>
              <div className="dialog-header">
                <p className="eyebrow">{selected.date}</p>
                <button aria-label="Close experience details" onClick={close}>
                  ×
                </button>
              </div>
              <h2 id="dialog-title">{selected.company}</h2>
              <p className="role">
                {selected.role} / {selected.team}
              </p>
              <ul>
                {selected.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <p className="tools">{selected.tools}</p>
              <button className="text-link" onClick={close}>
                Back to the page ←
              </button>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
createRoot(document.getElementById('root')).render(<App />);
