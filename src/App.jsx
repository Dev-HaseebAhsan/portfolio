import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="main" style={{}}>
      <title>Haseeb Ahsan | Portfolio</title>
      <div className="body">
        {/* Site Info */}
        <header id="header">
          {/* Portfolio Introduction */}
          <div className="hero-container">
            <div className="hero">
              {/* NOTE: Change the font */}
              <h1 >
                Hello! I'm <span style={{color:"rgb(var(--primary))"}}>Haseeb Ahsan</span>
              </h1>
              <p className="description">
                I am a driven student studying computer science with a passion for problem solving and aesthetic.
              </p>
            </div>
          </div>

          {/* Portrait of myself */}
          <div className="portrait container">
            {/* Put portrait here */}
          </div>
        </header>

        {/* Project Info */}
        <section id="projects">
          <div className="section-format">
            <h2>Some <span style={{color:"rgb(var(--primary))"}}>Projects</span> That I'm Proud Of:</h2>
            {/* NOTE: ADD BUTTONS TO SEND USER TO PROJECTS (if project has a link of course) */}
            {/* Project 1 */}
            <div className="listed-project">
              <div className="project-info">
                <h3>Project Example</h3>
                <p className="project-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="languages-used-title">Languages Utilized in this Project:</p>
                <ul className="languages-used">
                  <li className="language">
                    {/* insert language icon here */}
                    <p>C</p>
                  </li>
                </ul>
              </div>
              <div className="project-img">
                {/* Insert project image here */}
              </div>
            </div>

            <div className="listed-project">
              <div className="project-info">
                <h3>Project Example</h3>
                <p className="project-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="languages-used-title">Languages Utilized in this Project:</p>
                <ul className="languages-used">
                  <li className="language">
                    {/* insert language icon here */}
                    <p>C</p>
                  </li>
                </ul>
              </div>
              <div className="project-img">
                {/* Insert project image here */}
              </div>
            </div>
            
            {/* Next Project Here */}

          </div>
        </section>

        {/* Education Info */}
        <section id="education">
          <div className="section-format">
            <h2>
              A Little About my <span style={{color:"rgb(var(--primary))"}}>Education</span>:
            </h2>
            <div id="rutgers">
              <div class="rutgers-img">
                {/* Insert rutgers logo */}
              </div>
              <div class="education-info">
                {/* Insert info regarding education */}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section id="contact">

        </section>

        {/* Footer */}
        <footer id="footer">

        </footer>

      </div>
    </div>
    </>
  )
}

export default App
