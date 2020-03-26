const path = require('path');

const blogPostQuery = `{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "Y-MM")
            regex: date(formatString: "Y-MM")
            title
          }
        }
      }
    }
  }`;

function createBlogPages({ boundActionCreators, graphql }) {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve(`src/templates/post.js`);

  return graphql(blogPostQuery)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {} // additional data can be passed via context
          });
        });
    });
}

function createArchivePages({ boundActionCreators, graphql }) {
  const { createPage } = boundActionCreators;
  const listTemplate = path.resolve(`src/templates/list.js`);

  return graphql(blogPostQuery)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      const articlesPerMonth = result.data.allMarkdownRemark.edges
        .reduce((months, { node }) => {
          const previousArticlesPerMonth = months[node.frontmatter.date]; 
          months[node.frontmatter.date] = previousArticlesPerMonth ? [...previousArticlesPerMonth, node] : [node];
          return months;
        }, {})

      Object.keys(articlesPerMonth)
        .forEach(key => articlesPerMonth[key]
          .forEach((node) => {
            createPage({
              path: `/${node.frontmatter.date}`,
              component: listTemplate,
              context: {
                regex: `/${node.frontmatter.regex}-/`
              } // additional data can be passed via context
            });
          })
        );
    });
}

exports.createPages = (args) => {
    return Promise.all([createBlogPages(args), createArchivePages(args)]);
}