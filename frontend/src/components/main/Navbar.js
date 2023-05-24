import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://img.freepik.com/premium-vector/art-gallery-logo-design_92167-618.jpg?w=740"
              height={80}
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/Aboutus">
                  Aboutus
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/Contactus">
                  Contactus
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/BrowseExibition">
                  BrowseExibition
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signin">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signup">
                  Signup
                </NavLink>
              </li>
            </ul>
            {/* Left links */}
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-link px-3 me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
              <a
                className="btn btn-dark px-3"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                role="button"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>

  )
}

export default Navbar;