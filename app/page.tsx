const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Samin Salman, home">
          SS<span>.</span>
        </a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><i /> Computer Science · UC Santa Cruz</div>
        <h1>
          I build thoughtful<br />
          <em>digital experiences.</em>
        </h1>
        <div className="heroBottom">
          <p>
            I’m Samin Salman, a Computer Science B.S. student interested in
            turning ideas into useful, well-crafted software.
          </p>
          <a className="roundLink" href="#work" aria-label="See my work">
            <span>See my work</span><Arrow />
          </a>
        </div>
        <div className="heroMark" aria-hidden="true">S</div>
      </section>

      <section className="section about" id="about">
        <p className="sectionLabel">01 / About</p>
        <div className="aboutGrid">
          <h2>Curious by nature.<br />Technical by choice.</h2>
          <div className="aboutCopy">
            <p>
              I’m currently studying Computer Science at UC Santa Cruz, where
              I’m building a strong foundation in software development,
              algorithms, and problem solving.
            </p>
            <p>
              I care about the details that make technology feel intuitive—from
              clear interfaces to clean, reliable code. I’m always looking for
              the next problem worth solving and the next person to learn from.
            </p>
          </div>
        </div>
        <div className="facts">
          <div><strong>UCSC</strong><span>University</span></div>
          <div><strong>CS B.S.</strong><span>Degree</span></div>
          <div><strong>California</strong><span>Based in</span></div>
          <div><strong>Always</strong><span>Learning</span></div>
        </div>
      </section>

      <section className="section work" id="work">
        <div className="workHeading">
          <p className="sectionLabel">02 / Selected work</p>
          <h2>Projects in progress.</h2>
          <p>A growing collection of things I’m learning, designing, and building.</p>
        </div>
        <div className="projectGrid">
          <article className="project featured">
            <div className="projectVisual visualOne"><span>SS</span></div>
            <div className="projectMeta">
              <div><span className="tag">Web development</span><h3>Personal Portfolio</h3></div>
              <p>A fast, responsive home for my work, story, and growth as a developer.</p>
            </div>
          </article>
          <article className="project">
            <div className="projectVisual visualTwo"><span>01</span><span>101</span><span>10</span></div>
            <div className="projectMeta">
              <div><span className="tag">Computer science</span><h3>Coursework & Experiments</h3></div>
              <p>Selected technical exercises and explorations from my studies at UCSC.</p>
            </div>
          </article>
          <article className="project projectNext">
            <div className="projectVisual visualThree"><span>Next<br />up</span></div>
            <div className="projectMeta">
              <div><span className="tag">Coming soon</span><h3>The Next Build</h3></div>
              <p>This space is ready for the next idea I turn into something real.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section learning">
        <p className="sectionLabel">03 / Toolkit</p>
        <div className="learningGrid">
          <h2>What I’m<br />working with.</h2>
          <div className="skillList">
            <div><span>01</span><strong>Programming fundamentals</strong></div>
            <div><span>02</span><strong>Data structures & algorithms</strong></div>
            <div><span>03</span><strong>Web development</strong></div>
            <div><span>04</span><strong>Problem solving</strong></div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <p className="sectionLabel">04 / Contact</p>
        <h2>Let’s build something<br /><em>worth sharing.</em></h2>
        <p className="contactCopy">I’m open to internships, collaborations, and conversations with people building interesting things.</p>
        <a className="contactLink" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          Connect on LinkedIn <Arrow />
        </a>
        <div className="footerBottom">
          <span>© 2026 Samin Salman</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
