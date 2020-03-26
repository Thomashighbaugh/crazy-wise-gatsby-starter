import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import "./index.scss"
import "prismjs/themes/prism-okaidia.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      />

      <Header />
      <div className="container">{children()}</div>
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
