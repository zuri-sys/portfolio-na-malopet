import { useState } from 'react'
import './App.css'

const projects = [
  {
    title: 'API Fetch Practice',
    short: 'API Fetch',
    category: 'Development exercise',
    description: 'Exploring how an interface works with data from an API.',
    url: 'https://github.com/zuri-sys/API_Fetch-Practice.git',
    theme: 'api',
  },
  {
    title: 'Task Manager Activity',
    short: 'Task Manager',
    category: 'Development exercise',
    description: 'A hands-on task management project.',
    url: 'https://github.com/zuri-sys/task-manager-na-maangas.git',
    theme: 'tasks',
  },
  {
    title: 'Medicine Inventory',
    short: 'Medicine Inventory',
    category: 'Lab exam · Web application',
    description: 'A medicine inventory interface connected to a persistent REST API.',
    url: 'https://github.com/zuri-sys/medicine-inventory.git',
    theme: 'medicine',
  },
]

function ProjectIllustration({ theme }) {
  if (theme === 'api') {
    return (
      <div className="illustration illustration-api" aria-hidden="true">
        <div className="api-orbit orbit-one" />
        <div className="api-orbit orbit-two" />
        <div className="api-panel">
          <div className="api-panel-top"><span /><span /><span /><b>data / response</b></div>
          <div className="api-panel-body">
            <div className="api-line"><i>01</i><span><em>GET</em> /posts</span><strong>200 OK</strong></div>
            <div className="api-line"><i>02</i><span>&#123; "items": [</span></div>
            <div className="api-line indent"><i>03</i><span>&#123; "title": "Hello, world" &#125;,</span></div>
            <div className="api-line indent"><i>04</i><span>&#123; "title": "Next idea" &#125;</span></div>
            <div className="api-line"><i>05</i><span>] &#125;</span></div>
          </div>
        </div>
        <div className="floating-label label-one">request</div>
        <div className="floating-label label-two">response</div>
      </div>
    )
  }

  if (theme === 'medicine') {
    return (
      <div className="illustration illustration-medicine" aria-hidden="true">
        <div className="medicine-ring ring-one" />
        <div className="medicine-ring ring-two" />
        <div className="medicine-panel">
          <div className="medicine-head"><span>Inventory</span><small>MEDICINES</small></div>
          <div className="medicine-summary"><b>Available stock</b><strong>128</strong><i>Across all items</i></div>
          <div className="medicine-table">
            <div><span>Item</span><span>Qty</span><span>Status</span></div>
            <div><span>Paracetamol</span><span>42</span><em>In stock</em></div>
            <div><span>Medicine B</span><span>18</span><em>In stock</em></div>
            <div><span>Medicine C</span><span>08</span><em>Low</em></div>
          </div>
        </div>
        <div className="medicine-cross">+</div>
      </div>
    )
  }

  return (
    <div className="illustration illustration-tasks" aria-hidden="true">
      <div className="task-disc disc-one" />
      <div className="task-disc disc-two" />
      <div className="task-board">
        <div className="task-board-head"><span>My day</span><small>THINGS TO DO</small></div>
        <div className="board-progress"><span /></div>
        <div className="board-row done"><b>✓</b><i /><small>done</small></div>
        <div className="board-row done"><b>✓</b><i /><small>done</small></div>
        <div className="board-row"><b /><i /><small>today</small></div>
        <div className="board-row"><b /><i /><small>today</small></div>
      </div>
      <div className="floating-note">one thing<br />at a time.</div>
    </div>
  )
}

function App() {
  const [active, setActive] = useState(0)
  const project = projects[active]
  const changeProject = (direction) => {
    setActive((current) => (current + direction + projects.length) % projects.length)
  }

  return (
    <div className="site" id="top">
      <header className="site-header">
        <a className="identity" href="#top" aria-label="Vincent Postrano, back to top">V<span>J</span>P.</a>
        <span className="header-role">Student developer / Portfolio 2026</span>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className={`showcase showcase-${project.theme}`} id="projects" aria-labelledby="showcase-heading">
          <div className="showcase-intro">
            <p>Selected work by Vincent James G. Postrano</p>
            <span>01 — 0{projects.length}</span>
          </div>

          <div className="stage" key={project.theme}>
            <div className="stage-heading" aria-live="polite">
              <span className="stage-kind">{project.category}</span>
              <h1 id="showcase-heading">{project.title}</h1>
              <p>{project.description}</p>
            </div>
            <a className="stage-art" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository on GitHub`}>
              <ProjectIllustration theme={project.theme} />
              <span className="art-open">View project <span aria-hidden="true">↗</span></span>
            </a>
            <span className="visual-note">Original visual concept · Repository linked</span>
          </div>

          <div className="showcase-controls">
            <div className="counter"><strong>0{active + 1}</strong><span>/ 0{projects.length}</span></div>
            <div className="project-tabs" aria-label="Choose a project">
              {projects.map((item, index) => (
                <button
                  className={active === index ? 'active' : ''}
                  key={item.title}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-current={active === index ? 'true' : undefined}
                >
                  <span>0{index + 1}</span>{item.short}
                </button>
              ))}
            </div>
            <div className="arrow-controls">
              <button type="button" onClick={() => changeProject(-1)} aria-label="Previous project">←</button>
              <button type="button" onClick={() => changeProject(1)} aria-label="Next project">→</button>
            </div>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-heading">
          <div className="section-index"><span>About Vincent</span><span>0{projects.length + 1} / 0{projects.length + 2}</span></div>
          <div className="about-layout">
            <h2 id="about-heading">A little curiosity<br />goes a long way.</h2>
            <div className="about-copy">
              <p>I’m Vincent James G. Postrano, a 3rd Year Computer Science student. I use small projects to practice, explore ideas, and keep learning how to build for the web.</p>
              <a href="https://github.com/zuri-sys" target="_blank" rel="noreferrer">Explore my GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <div className="section-index"><span>Next chapter</span><span>0{projects.length + 2} / 0{projects.length + 2}</span></div>
          <p>Have an idea to share?</p>
          <h2 id="contact-heading">Let’s make<br />something <em>work.</em></h2>
          <a href="https://github.com/zuri-sys" target="_blank" rel="noreferrer">Connect on GitHub <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Vincent James G. Postrano</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
