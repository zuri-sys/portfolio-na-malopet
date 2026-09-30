import './App.css'

const projects = [
  {
    number: '01',
    title: 'API Fetch Practice',
    subtitle: 'An exercise in working with data from an API.',
    url: 'https://github.com/zuri-sys/API_Fetch-Practice.git',
    kind: 'api',
  },
  {
    number: '02',
    title: 'Task Manager Activity',
    subtitle: 'A hands-on task management project.',
    url: 'https://github.com/zuri-sys/task-manager-na-maangas.git',
    kind: 'tasks',
  },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function ProjectArt({ kind }) {
  return (
    <div className={`project-art ${kind}`} aria-hidden="true">
      {kind === 'api' ? (
        <div className="code-window">
          <div className="window-top"><i /><i /><i /><span>response.json</span></div>
          <div className="code-lines">
            <p><small>01</small> const response = await fetch(url)</p>
            <p><small>02</small> const data = await response.json()</p>
            <p><small>03</small></p>
            <p><small>04</small> return data.map(item =&gt; &#123;</p>
            <p><small>05</small> &nbsp; render(item)</p>
            <p><small>06</small> &#125;)</p>
          </div>
        </div>
      ) : (
        <div className="task-sheet">
          <div className="sheet-top"><strong>Today</strong><span>03 / 05</span></div>
          {[65, 44, 56, 35].map((width, index) => (
            <div className="task-row" key={width}>
              <span className={index < 2 ? 'checked' : ''}>{index < 2 ? '✓' : ''}</span>
              <i style={{ width: `${width}%` }} />
            </div>
          ))}
        </div>
      )}
      <span className="art-caption">{kind === 'api' ? 'DATA / EXPERIMENT' : 'IDEAS / ORGANIZED'}</span>
    </div>
  )
}

function App() {
  return (
    <div className="site">
      <header className="header">
        <a className="logo" href="#top" aria-label="Back to top">VJ<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-github" href="https://github.com/zuri-sys" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-meta"><span>PORTFOLIO / 2026</span><span>3RD YEAR COMPUTER SCIENCE</span></div>
          <div className="hero-main">
            <p>Hello, I'm</p>
            <h1 id="hero-title"><span>Vincent James G.</span><strong>Postrano<span className="blue">.</span></strong></h1>
            <div className="hero-bottom">
              <p>3rd Year CS Student<br />Learning by building for the web.</p>
              <a className="explore" href="#work">Explore work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <span className="side-note" aria-hidden="true">CODE / CURIOSITY / CRAFT</span>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="work-heading"><p>Selected work</p><h2 id="work-title">Built to learn.<br /><span>Made to work.</span></h2></div>
          <div className="project-list">
            {projects.map(project => (
              <article className="project" key={project.number}>
                <a className="project-cover" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                  <ProjectArt kind={project.kind} />
                </a>
                <div className="project-info">
                  <span>{project.number} / 02</span>
                  <div><h3>{project.title}</h3><p>{project.subtitle}</p></div>
                  <a href={project.url} target="_blank" rel="noreferrer">View repository <Arrow /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <p className="section-label">A little about me</p>
          <div className="about-grid">
            <h2 id="about-title">Curious by<br />default<span className="blue">.</span></h2>
            <div><p>I’m Vincent, a third year Computer Science student. This space collects the projects I’m building as I learn, experiment, and turn ideas into working software.</p>
              <a href="https://github.com/zuri-sys" target="_blank" rel="noreferrer">Follow my work on GitHub <Arrow /></a>
            </div>
          </div>
          <div className="about-foot"><span>Postrano, Vincent James G.</span><span>Student / Developer in progress</span></div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p>Have a project or idea?</p>
          <h2 id="contact-title">Let’s connect<span>.</span></h2>
          <a href="https://github.com/zuri-sys" target="_blank" rel="noreferrer">Find me on GitHub <Arrow /></a>
        </section>
      </main>
      <footer><span>© 2026 Vincent James G. Postrano</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

export default App
