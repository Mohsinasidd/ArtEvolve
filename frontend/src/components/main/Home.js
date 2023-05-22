import React from 'react'

const Home = () => {
  return (
    <>
      {/* Hello world */}
      <div className="site">
        <div className="nav">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-info" />
                <span>ABOUT</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-pencil" />
                <span>BLOG</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-folder-open-o" />
                <span>WORKS</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-comments-o" />
                <span>TALK</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="overlay" />
          <h2>ARTEVOLVE</h2>
          <h1>
            F
            <br />
            &amp; 
          </h1>
          <h3>
              
            <br />
            and mission-driven companies.
          </h3>
          <a href="#">
            <button>GET IN TOUCH</button>
          </a>
        </div>
      </div>
    </>

  )
}

export default Home