import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Sidebar from '../Sidebar'
import '../../styles/main.scss'
import '../../styles/fonts/font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../Footer'
import Header from '../Header'
const DefaultLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            author
            description
            social {
              twitter
              facebook
              linkedin
              github
              email
            }
          }
        }
      }
    `}
    render={data => (
      <div className="wrapper">
        <Helmet></Helmet>
        <Header />
        <Sidebar siteMetadata={data.site.siteMetadata} />
        <div className="content-box clearfix">{children}</div>
      <Footer/>
      </div>
    )}
  />
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
