"use client";

import { useEffect, useState } from "react";

const sectionIds = ["about", "education", "experience", "projects"];

const projects = [
  {
    number: "01",
    title: "Personal Portfolio",
    type: "Web development",
    summary: "An evolving digital résumé designed and built to present my work, interests, and growth as a computer science student.",
    stack: ["React", "TypeScript", "CSS"],
  },
  {
    number: "02",
    title: "Coursework Archive",
    type: "Computer science",
    summary: "A growing collection of programming labs, technical exercises, and small experiments from my studies at UCSC.",
    stack: ["Algorithms", "Data structures", "Problem solving"],
  },
];

export default function Home() {
  const [openProject, setOpenProject] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const panel = document.querySelector(".scrollPanel");
    if (!panel) return;

    const updateSection = () => {
      const center = panel.getBoundingClientRect().top + panel.clientHeight / 2;
      const closest = sectionIds.reduce((best, id, index) => {
        const rect = document.getElementById(id)!.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - center);
        return distance < best.distance ? { index, distance } : best;
      }, { index: 0, distance: Infinity });
      setActiveSection(closest.index);
    };

    panel.addEventListener("scroll", updateSection, { passive: true });
    updateSection();
    return () => panel.removeEventListener("scroll", updateSection);
  }, []);

  return (
    <main className="splitResume">
      <aside className="introPanel">
        <div className="introTop">
          <span className="tinyLogo">SS<span>●</span></span>
          <span className="status"><i /> Available for internships</span>
        </div>

        <div className="portraitWrap" aria-label="Portrait placeholder for Samin Salman">
          <div className="portraitBlob">
            <span>SS</span>
            <div className="portraitGrid" aria-hidden="true" />
          </div>
          <span className="orbit orbitOne" aria-hidden="true" />
          <span className="orbit orbitTwo" aria-hidden="true" />
        </div>

        <div className="introCopy">
          <p className="hello">Hello, I’m</p>
          <h1>Samin<br />Salman<span>.</span></h1>
          <p className="bio">Computer Science B.S. student at UC Santa Cruz, learning to build thoughtful software and solve meaningful problems.</p>
        </div>

        <div className="introBottom">
          <nav aria-label="Jump to résumé section">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </nav>
          <div className="contactLinks">
            <span>Let’s connect</span>
            <a href="https://github.com/Samsal7" target="_blank" rel="noreferrer">GitHub ↗</a>
            <span>Email available on request</span>
          </div>
        </div>
      </aside>

      <nav className={`sectionTrack active-${activeSection}`} aria-label="Résumé progress">
        <span className="trackMarker" aria-hidden="true" />
        {sectionIds.map((id, index) => (
          <button
            key={id}
            className={activeSection === index ? "active" : ""}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            aria-label={`Go to ${id}`}
            aria-current={activeSection === index ? "step" : undefined}
          >
            <i />
            <span>{String(index + 1).padStart(2, "0")} · {id}</span>
          </button>
        ))}
      </nav>

      <div className="scrollPanel">
        <div className="scrollHint"><span>Scroll résumé</span><i>↓</i></div>

        <section className="scrollSection aboutPage" id="about">
          <div className="sectionTop"><span>01</span><p>Profile</p></div>
          <div className="organicTitle">
            <h2>Curious mind,<br /><em>technical hands.</em></h2>
            <span className="softBlob" aria-hidden="true" />
          </div>
          <div className="aboutColumns">
            <p>I’m a computer science student who enjoys understanding how things work, then finding ways to make them clearer, faster, or more useful.</p>
            <p>My interests live where logical systems meet human experience—from reliable code and algorithms to interfaces that feel natural to use.</p>
          </div>
          <div className="quickFacts">
            <div><strong>UCSC</strong><span>University</span></div>
            <div><strong>CS B.S.</strong><span>Degree</span></div>
            <div><strong>CA</strong><span>Based</span></div>
          </div>
        </section>

        <section className="scrollSection educationPage" id="education">
          <div className="sectionTop"><span>02</span><p>Education</p></div>
          <div className="educationCard">
            <div className="ucscSeal" aria-hidden="true">UC<br />SC</div>
            <div>
              <span className="datePill">Present</span>
              <h2>B.S. Computer Science</h2>
              <h3>University of California, Santa Cruz</h3>
              <p>Developing a strong foundation in programming, data structures, algorithms, systems thinking, and collaborative problem solving.</p>
            </div>
          </div>
          <div className="courseCloud" aria-label="Areas of study">
            <span>Algorithms</span><span>Data structures</span><span>Software development</span>
            <span>Programming fundamentals</span><span>Problem solving</span>
          </div>
        </section>

        <section className="scrollSection experiencePage" id="experience">
          <div className="sectionTop"><span>03</span><p>Experience</p></div>
          <div className="experienceIntro">
            <h2>Building the<br /><em>foundation.</em></h2>
            <p>I’m currently focused on academic work, independent projects, and preparing for my first professional software opportunity.</p>
          </div>
          <div className="experienceLine">
            <span className="lineDot" />
            <div><small>Now</small><h3>Computer Science Student</h3><p>Learning through coursework, technical labs, and hands-on building at UC Santa Cruz.</p></div>
          </div>
          <div className="experienceLine muted">
            <span className="lineDot" />
            <div><small>Next</small><h3>Internship Opportunity</h3><p>Looking to contribute, learn from a strong team, and turn fundamentals into real-world impact.</p></div>
          </div>
        </section>

        <section className="scrollSection projectsPage" id="projects">
          <div className="sectionTop"><span>04</span><p>Selected projects</p></div>
          <h2>Things I’m<br /><em>making & learning.</em></h2>
          <div className="projectAccordion">
            {projects.map((project, index) => (
              <article className={openProject === index ? "open" : ""} key={project.title}>
                <button onClick={() => setOpenProject(index)} aria-expanded={openProject === index}>
                  <span>{project.number}</span><strong>{project.title}</strong><i>{openProject === index ? "−" : "+"}</i>
                </button>
                <div className="projectReveal">
                  <span className="projectType">{project.type}</span>
                  <p>{project.summary}</p>
                  <div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="endNote"><span>More soon</span><p>This résumé grows as I do.</p></div>
        </section>
      </div>
    </main>
  );
}
