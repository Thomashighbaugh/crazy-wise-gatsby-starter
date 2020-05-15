import React from "react"
import { graphql } from "gatsby"
import {
  Paper,
  Meta,
  MetaSpan,
  MetaActions,
  DraftBadge,
} from "../components/Style"
import { EditorToggle } from "../components/EditToggle"
import { ListAuthors } from "../components/Authors"
import { Link } from "gatsby"
import { PageLayout } from "../components/PageLayout"
import { useLocalRemarkForm, DeleteAction } from "gatsby-tinacms-remark"
import {
  InlineForm,
  InlineTextField,
  InlineWysiwyg,
} from "react-tinacms-inline"
import { UseAuthors } from "../components/UseAuthors"
function Post(props) {
  const authors = UseAuthors()
  const page = props.data.markdownRemark
  const formOptions = {
    actions: [DeleteAction],
    fields: [
      {
        label: "Title",
        name: "rawFrontmatter.title",
        component: "text",
      },
      {
        label: "Authors",
        name: "rawFrontmatter.authors",
        component: "authors",
        authors: authors,
      },
      {
        name: "rawFrontmatter.draft",
        component: "toggle",
        label: "Draft",
      },
      {
        label: "Date",
        name: "rawFrontmatter.date",
        component: "date",
      },
      {
        label: "Hero Image",
        name: "rawFrontmatter.hero.image",
        component: "image",
        parse: (filename) => `../images/${filename}`,
        uploadDir: () => `/content/images/`,
        previewSrc: (formValues) => {
          if (
            !formValues.frontmatter.hero ||
            !formValues.frontmatter.hero.image
          )
            return ""
          return formValues.frontmatter.hero.image.childImageSharp.fluid.src
        },
      },
    ],
  }

  const [data, form] = useLocalRemarkForm(page, formOptions)

  return (
    <InlineForm form={form}>
      <PageLayout page={data}>
        <Paper>
          <Meta>
            <MetaSpan>{data.frontmatter.date}</MetaSpan>
            {data.frontmatter.authors && data.frontmatter.authors.length > 0 && (
              <MetaSpan>
                <em>By</em>&nbsp;
                <ListAuthors authorIDs={data.frontmatter.authors} />
              </MetaSpan>
            )}
            <MetaActions>
              <Link to="/blog">← Back to Blog</Link>
            </MetaActions>
          </Meta>
          <h1>
            <InlineTextField name="rawFrontmatter.title" />
          </h1>
          <hr />
          <InlineWysiwyg name="rawMarkdownBody" format="markdown">
            <div
              dangerouslySetInnerHTML={{
                __html: data.html,
              }}
            />
          </InlineWysiwyg>
          {data.frontmatter.draft && <DraftBadge>Draft</DraftBadge>}
          {process.env.NODE_ENV !== "production" && <EditorToggle />}
        </Paper>
      </PageLayout>
    </InlineForm>
  )
}

export default Post

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(
      published: { eq: true }
      frontmatter: { path: { eq: $path } }
    ) {
      id
      excerpt(pruneLength: 360)
      html

      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        draft
        authors
        hero {
          large
          overlay
          image {
            childImageSharp {
              fluid(quality: 70, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }

      fileRelativePath
      rawFrontmatter
      rawMarkdownBody
    }
    settingsJson(fileRelativePath: { eq: "/content/settings/authors.json" }) {
      ...authors
    }
  }
`
