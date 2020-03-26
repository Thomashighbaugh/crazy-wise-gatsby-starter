import React from "react"
import Link from "gatsby-link"

// @TODO create and import './archive.scss';
// @TODO

export default function ArchiveList({ data }) {
  const { edges: posts } = data.archive
  const months = posts.reduce((months, { node }) => {
    months[node.frontmatter.path] = node.frontmatter.title
    return months
  }, {})

  return (
    <ol className="list-unstyled">
      {Object.keys(months).map(key => {
        const title = months[key]
        return (
          <li key={key}>
            <Link to={`${key}/`}>{title}</Link>
          </li>
        )
      })}
    </ol>
  )
}
