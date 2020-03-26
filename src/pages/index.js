import React from 'react';
import List from '../templates/list';
import ArchiveList from '../templates/archiveList';
import Link from 'gatsby-link';

export default function Index({
  data
}) {
  return (
    <div className="row">
      <div className="col-sm-8 blog-main">
          <List data={data} />
      </div>
      <div className="col-sm-3 offset-sm-1 blog-sidebar">
        <div className="sidebar-module sidebar-module-inset">
          <h4>About</h4>
          <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        </div>
        <div className="sidebar-module">
          <h4>Archives</h4>
          <ArchiveList data={data} />
        </div>
        <div className="sidebar-module">
          <h4>Elsewhere</h4>
          <ol className="list-unstyled">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
    archive: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path: date(formatString: "Y-MM")
            title: date(formatString: "MMMM Y")
          }
        }
      }
    }
  }
`;