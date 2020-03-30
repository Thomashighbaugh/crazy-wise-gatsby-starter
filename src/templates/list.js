import React from "react"
import Link from "gatsby-link"

// @TODO Turn this page into featured Posts

export default function List({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="blog-posts">
      {posts
        .filter((post) => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <p>{post.excerpt}</p>
            </div>
          )
        })}
    </div>
  )
}

export const pageQuery = graphql`
  query ArchiveQuery($regex: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { date: { regex: $regex } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
