import { useEffect, useState } from 'react';
import './styles/app.css';
import './styles/github-chart.css';

const skills = ['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'Machine Learning', 'NLP', 'SQL', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'Figma'];
const projects = [
  { name: 'Vaani', desc: 'A language-focused web experience designed to make complex information feel clear and accessible.', tags: ['Python', 'NLP', 'React'], tone: 'blue' },
  { name: 'TrustChain', desc: 'A transparent platform concept exploring how records and trust can work better together.', tags: ['Solidity', 'Node.js', 'Web3'], tone: 'lavender' },
];
const contributionLevels = '0000002001010001410000000000002210004000000001040100100000000010000002404100000000014210000011000004112000001000001100000044011000001000220002000001000232100000000000002000000220000000000002010000000000100010000000000000000000001210000000014200000000000001021111000000000000000000041000000000103120002000000004131320000000000000100100000200000010012000040001000021100021';
const initialActivity = { count: 298, range: '2025–26', levels: contributionLevels };

const Icon = ({ children }: { children: React.ReactNode }) => <span className="icon" aria-hidden="true">{children}</span>;

export default function App() {
  const [activity, setActivity] = useState(initialActivity);

  useEffect(() => {
    fetch('/github-activity.json', { cache: 'no-store' })
      .then(response => response.ok ? response.json() : Promise.reject(new Error('Activity data unavailable')))
      .then(data => {
        if (typeof data.count === 'number' && typeof data.levels === 'string') setActivity(data);
      })
      .catch(() => undefined);
  }, []);

  return <div className="page">
    <nav className="nav"><a className="logo" href="#top">HASINI</a><div className="nav-right"><a href="#projects">Projects</a><a href="#contact">Contact</a><button className="search" type="button"><Icon>⌕</Icon> Search <kbd>⌘K</kbd></button><button className="theme" type="button" aria-label="Toggle theme">☼</button></div></nav>
    <main id="top">
      <section className="profile">
        <div className="pixel-strip" aria-hidden="true" />
        <div className="profile-row">
          <div className="portrait"><img src="/assets/new_profile.jpeg" alt="Hasini Reddy" /></div>
          <div><h1>Hasini Reddy</h1><p className="role">Developer &amp; ML Enthusiast</p><div className="actions"><a className="pill" href="mailto:kandula.hasini009@gmail.com"><Icon>✉</Icon> Send an email</a><a className="pill" href="https://github.com/haaasini01" target="_blank" rel="noreferrer"><Icon>◉</Icon> GitHub</a></div></div>
        </div>
      </section>
      <section className="section about"><h2>About</h2><div className="section-body"><ul className="bullets"><li>I’m Hasini, a developer interested in thoughtful products, intelligent systems, and the details that make software feel good to use.</li><li>I build end-to-end web experiences with <a href="#skills">React, TypeScript, Node.js and Python</a> — from the first sketch to the finished interface.</li><li>I’m especially curious about <a href="#skills">machine learning and natural language processing</a>, where useful technology can become more human.</li></ul></div></section>
      <section className="section"><h2>Connect</h2><div className="section-body connect"><a className="pill" href="https://github.com/haaasini01" target="_blank" rel="noreferrer"><Icon>◉</Icon> GitHub</a><a className="pill" href="https://www.linkedin.com/in/hasini0/" target="_blank" rel="noreferrer"><Icon>in</Icon> LinkedIn</a><a className="pill" href="mailto:kandula.hasini009@gmail.com"><Icon>✉</Icon> Email</a></div></section>
      <section className="section"><h2>Experience</h2><div className="section-body experience"><div><b>Computer Science &amp; Engineering</b><p>Building a foundation in software development, data, and intelligent systems.</p></div><time>2021 — 2025</time></div></section>
      <section className="section activity"><h2>Activity</h2><div className="section-body"><div className="month-row" aria-hidden="true"><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span></div><div className="github-heatmap" aria-label="Hasini Reddy's GitHub contribution activity">{Array.from(activity.levels).map((level, index) => <i className={`level-${level}`} key={index} />)}</div><div className="activity-bottom"><p className="contributions">{activity.count} contributions in {activity.range}</p><div className="legend" aria-label="Contribution level legend"><span>Less</span><i /><i /><i /><i /><i /><span>More</span></div></div><p className="activity-link"><a href="https://github.com/haaasini01" target="_blank" rel="noreferrer">View activity on GitHub ↗</a></p></div></section>
      <section className="section projects" id="projects"><h2>Projects</h2><div className="project-grid">{projects.map((project, index) => <article key={project.name}><div className={`project-image ${project.tone}`}><span>0{index + 1}</span><b>{project.name[0]}</b><i /></div><div className="project-title"><h3>{project.name}</h3><a className="small-pill" href="https://github.com/haaasini01" target="_blank" rel="noreferrer">Code</a></div><p>{project.desc}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>
      <section className="section skills" id="skills"><h2>Skills</h2><div className="section-body chip-list">{skills.map((skill, index) => <span key={skill}><Icon>{['◈', '◆', '◉'][index % 3]}</Icon>{skill}</span>)}</div></section>
      <section className="section achievements"><h2>Focus</h2><div className="section-body focus"><div><b>Machine Learning &amp; NLP</b><p>Exploring the systems behind more natural, useful experiences.</p></div><div><b>Full-stack Development</b><p>Turning ideas into responsive, dependable products.</p></div><div><b>Product Thinking</b><p>Asking what people actually need before building.</p></div></div></section>
      <section className="closing" id="contact"><div className="orbit o1" /><div className="orbit o2" /><div className="orbit o3" /><img src="/assets/new_profile.jpeg" alt="" /><p>Still reading? That means something clicked. Let’s talk.</p><a className="pill" href="mailto:kandula.hasini009@gmail.com"><Icon>✉</Icon> Write me an email</a></section>
    </main>
    <footer>Designed and developed by <a href="https://github.com/haaasini01">Hasini Reddy</a><br />© {new Date().getFullYear()}. Built with care.</footer>
  </div>;
}
