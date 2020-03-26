import React from 'react'
import './Nav.scss'

const Nav = () => (

    <div className="blog-masthead navbar">
      <div className="container">
        <nav className="nav blog-nav">
          <a className="nav-link active" href="/">Home</a>
          <a className="nav-link" href="#">New features</a>
          <a className="nav-link" href="#">Press</a>
          <a className="nav-link" href="#">New hires</a>
          <a className="nav-link" href="#">About</a>
        </nav>
      </div>
    </div>

);

export default Nav;