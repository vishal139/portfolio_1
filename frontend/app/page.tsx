"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

type Profile = { name: string; role: string; bio: string; skills: string[] };

const capabilities = [
  ["01", "Product interfaces", "Thoughtful, responsive interfaces that make complex ideas feel effortless to use."],
  ["02", "Full-stack systems", "Reliable frontends and APIs connected into products that are ready to grow."],
  ["03", "Fast iteration", "A practical build process that turns a rough idea into a polished experience quickly."],
];
const principles = ["Curious by default", "Detail in the right places", "Built for real people"];
const expertiseGroups = [
  {
    index: "01 / Languages",
    title: "Strong fundamentals.",
    icon: "code",
    skills: [["C++", "cplusplus"], ["JavaScript", "javascript"], ["TypeScript", "typescript"], ["Python", "python"], ["MATLAB", "matlab"], ["SQL", "mysql"]],
  },
  {
    index: "02 / Full-stack",
    title: "Products from UI to API.",
    icon: "layers",
    skills: [["React.js", "react"], ["Next.js", "nextjs"], ["Angular", "angularjs"], ["Node.js", "nodejs"], ["Express.js", "express"], ["NestJS", "nestjs"], ["Flask", "flask"], ["MongoDB", "mongodb"]],
  },
  {
    index: "03 / DevOps",
    title: "Shipping with confidence.",
    icon: "terminal",
    skills: [["Docker", "docker"], ["Kafka", "apachekafka"], ["Microservices", "microservices"], ["Git", "git"], ["GitHub Copilot", "github"]],
  },
  {
    index: "04 / Architecture",
    title: "Systems built to scale.",
    icon: "network",
    skills: [["REST APIs", "api"], ["Scalable System Design", "scale"], ["Database Optimization", "database"], ["Distributed Systems", "distributed"], ["Authentication & Authorization", "auth"]],
  },
];

function ExpertiseIcon({ kind }: { kind: string }) {
  const paths = {
    code: <><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /><path d="m14 4-4 16" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    terminal: <><path d="m4 17 6-5-6-5" /><path d="M12 19h8" /></>,
    network: <><rect height="5" rx="1" width="6" x="9" y="2" /><rect height="5" rx="1" width="6" x="2" y="17" /><rect height="5" rx="1" width="6" x="16" y="17" /><path d="M12 7v5m0 0H5v5m7-5h7v5" /></>,
  };

  return <svg aria-hidden="true" className="expertise-icon" fill="none" viewBox="0 0 24 24">{paths[kind as keyof typeof paths]}</svg>;
}

function SkillTag({ name, icon }: { name: string; icon: string }) {
  const technologyIcons = ["cplusplus", "javascript", "typescript", "python", "matlab", "mysql", "react", "nextjs", "angularjs", "nodejs", "express", "nestjs", "flask", "mongodb", "docker", "apachekafka", "git", "github"];
  const hasTechnologyIcon = technologyIcons.includes(icon);

  return <span className="skill-tag">{hasTechnologyIcon ? <img alt="" src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`} /> : <b>{icon === "api" ? "API" : icon === "auth" ? "AU" : icon === "scale" ? "SC" : icon === "database" ? "DB" : "DS"}</b>}{name}</span>;
}

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ??
    (process.env.NODE_ENV === "development" ? "http://localhost:5001" : "https://api-569006565187.asia-south1.run.app");

  useEffect(() => {
    axios.get<Profile>(`${apiBaseUrl}/api/profile`)
      .then((response) => setProfile(response.data))
      .catch(() => setProfile(null));
  }, [apiBaseUrl]);

  const name = profile?.name ?? "Vishal Kachhap";
  const role = profile?.role ?? "Full Stack Developer";
  const bio = "I am a full-stack developer who enjoys turning complex problems into reliable, thoughtful software. I build across the frontend and backend, with a focus on clean interfaces, scalable APIs, and systems that are easy to maintain.";
  const skills = profile?.skills ?? ["React", "Next.js", "Node.js", "Express", "Python"];

  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Vishal Kachhap home">VK<span>.</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#articles">Articles</a></div>
        <a className="nav-availability" href="/Vishal_Kachhap_CV.pdf" download><span className="status-dot" /> Download CV</a>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">Personal portfolio / 2025</p>
          <h1>I build products that <em>work.</em></h1>
          <p className="hero-intro">I&apos;m {name.split(" ")[0]}, a {role.toLowerCase()}. This is my corner of the web for the things I build, learn, and write about.</p>
        </div>
        <div className="hero-art reveal reveal-delay">
          <div className="terminal-bar"><span /><span /><span /><b>vishal.dev</b></div>
          <div className="code-lines"><p><i>const</i> developer = <strong>&quot;Vishal&quot;</strong>;</p><p><i>const</i> stack = [<strong>&quot;React&quot;</strong>, <strong>&quot;Node&quot;</strong>];</p><p className="code-gap" /><p><i>return</i> build({"{"}</p><p className="indent">cleanInterfaces: <strong>true</strong>,</p><p className="indent">reliableSystems: <strong>true</strong>,</p><p className="indent">goodQuestions: <strong>true</strong></p><p>{"}"});</p></div>
          <div className="art-caption">{"// currently shipping"}</div><div className="art-side-note">status: online<br />location: india</div>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label"><span>01</span> About me</div>
        <div className="about-grid"><h2>Software should be clear, useful, and <em>built to last.</em></h2>
          <div className="portrait-wrap"><Image src="/profile-placeholder.png" alt="Temporary profile portrait" fill sizes="(max-width: 700px) 100vw, 24vw" /><span>Temporary profile image</span></div>
          <div className="about-copy"><div className="profile-kicker"><span /> Full Stack Developer</div><p>{bio}</p><p>I work across the stack, from accessible React interfaces to Node.js APIs. I care about maintainable code, fast feedback loops, and solving the right problem before writing the first line.</p>
            <div className="tech-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="expertise section-shell" id="expertise">
        <div className="section-label"><span>02</span> Technical expertise</div>
        <div className="expertise-heading"><h2>The tools I use to turn ideas into <em>working software.</em></h2><p>Comfortable moving between the browser, the server, and everything that connects them.</p></div>
        <div className="expertise-grid">{expertiseGroups.map((group) => <article className="expertise-card" key={group.index}>
          <span className="expertise-index">{group.index}</span><div className="expertise-icon-wrap"><ExpertiseIcon kind={group.icon} /></div><h3>{group.title}</h3><div className="skill-tags">{group.skills.map(([name, icon]) => <SkillTag key={name} name={name} icon={icon} />)}</div>
        </article>)}</div>
      </section>

      <section className="capabilities section-shell" id="capabilities">
        <div className="section-label"><span>03</span> How I work</div>
        <div className="capability-list">{capabilities.map(([number, title, text]) => <article className="capability" key={number}>
          <span className="capability-number">{number}</span><h3>{title}</h3><p>{text}</p><span className="capability-arrow">↗</span>
        </article>)}</div>
      </section>

      <section className="statement section-shell"><p className="eyebrow">A working philosophy</p><h2>Great software starts with understanding the problem.</h2>
        <div className="principles">{principles.map((principle, index) => <span key={principle}><b>0{index + 1}</b>{principle}</span>)}</div>
      </section>

      <section className="articles section-shell" id="articles"><div className="section-label"><span>04</span> Notes from the build</div>
        <div className="articles-heading"><h2>Things I&apos;m <em>learning.</em></h2><p>A space for practical notes on development, technology, and the ideas I keep coming back to.</p></div>
        <div className="article-placeholder"><span>Coming soon</span><strong>Developer notes, experiments, and tech deep-dives.</strong><span className="article-arrow">↗</span></div>
      </section>

      <section className="contact section-shell" id="contact"><div className="section-label"><span>05</span> Keep in touch</div>
        <div className="contact-inner"><h2>Thanks for<br /><em>stopping by.</em></h2><a className="contact-link" href="mailto:hello@vishalkachhap.dev">Say hello <span>↗</span></a></div>
        <footer><span>Vishal Kachhap</span><span>Built with care / 2025</span></footer>
      </section>
    </main>
  );
}
