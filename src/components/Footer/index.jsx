import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="blog-footer navbar fixed-bottom ">
    <div className="copyright">
      <p>{new Date().getFullYear()} &copy;</p>
    </div>
  </footer>
)

export default Footer
