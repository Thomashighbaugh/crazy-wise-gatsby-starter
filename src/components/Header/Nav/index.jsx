import React, { Component } from "react"
import Link from "gatsby-link"
//@TODO add in nav links for each page
const Nav = () => (
<<<<<<< HEAD
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
=======
  <nav className="navbar fixed-top navbar-expand-lg ">
      <ul className="navbar-nav">
          <li className="nav-item mr-1">
     <Link onlyActiveOnIndex className="nav-link " id="nav0" to="/">
        HOME
      </Link>
          </li>
          <li className="nav-item mr-1">

          <Link to="/page-2/" onlyActiveOnIndex className=" nav-link " id="nav1">
        ABOUT
      </Link>
          </li>
          <li className="nav-item mr-1">
          <Link
        to="/page-3/"
        onlyActiveOnIndex
        className=" nav-link "
>>>>>>> 5635ce8... almost there
        id="nav2"
      >
        ARCHIVE
      </Link>
<<<<<<< HEAD
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
=======
          </li>
          <li className="nav-item mr-1">
          <Link
        to="/page-4/"
        onlyActiveOnIndex
        className=" nav-link "
        id="nav3"
      >
        TEST
      </Link>
          </li>
          <li className="nav-item mr-1">

          <Link
        to="/page-5/"
        onlyActiveOnIndex
        className=" nav-link "
>>>>>>> 5635ce8... almost there
        id="nav4"
      >
        TEST
      </Link>
<<<<<<< HEAD
    </div>
=======
          </li>
      </ul>
>>>>>>> 5635ce8... almost there
  </nav>
)

export default Nav
