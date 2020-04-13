import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="container-fluid column is-10 is-offset-1"
            style={{ marginBottom: "6rem" }}
          >
            <div className="jumbotron">
              <h1 className="display-1">Subjects</h1>
            </div>
            <h4 className="lead">
              This is where you can find our content organized by subjects, or
              tags as they are also known. Just select one below and enjoy!
            </h4>
            <ul className="taglist nav btn-group">
              {group.map((tag) => (
                <li className="nav-item" key={tag.fieldValue}>
                  <Link
                    className="btn btn-lg btn-dark nav-link"
                    role="button"
                    to={`/tags/${kebabCase(tag.fieldValue)}/`}
                  >
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
