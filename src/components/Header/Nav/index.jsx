import React, { Component } from "react"
import Link from "gatsby-link"

const Nav = () => (
  <nav className="navbar">
    <div className="btn-group links">
      <Link className="nav-link btn" id="nav0" to="/">
        HOME
      </Link>

      <Link to="/about/" onlyActiveOnIndex className="btn nav-link " id="nav1">
        ABOUT
      </Link>
      <Link
        to="/projects/"
        onlyActiveOnIndex
        className="btn nav-link "
        id="nav2"
      >
        ARCHIVE
      </Link>
      <Link
        to="/projects/"
        onlyActiveOnIndex
        className="btn nav-link "
        id="nav3"
      >
        TEST{" "}
      </Link>
      <Link
        to="/projects/"
        onlyActiveOnIndex
        className="btn nav-link "
        id="nav4"
      >
        TEST
      </Link>
    </div>
  </nav>
)

export default Nav
