import React, { Component } from "react"
import Link from "gatsby-link"
//@TODO add in nav links for each page
const Nav = () => (
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
        <Link to="/page-3/" onlyActiveOnIndex className=" nav-link " id="nav2">
          ARCHIVE
        </Link>
      </li>
      <li className="nav-item mr-1">
        <Link to="/page-4/" onlyActiveOnIndex className=" nav-link " id="nav3">
          TEST
        </Link>
      </li>
      <li className="nav-item mr-1">
        <Link to="/page-5/" onlyActiveOnIndex className=" nav-link " id="nav4">
          TEST
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
