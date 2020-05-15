import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Wrapper, Main } from "../Style"
import { SEO } from "../SEO"
import { ThemeContext } from "../Theme/theme"
import { Hero } from "../Hero"
import { removeNull } from "../Helpers"
import { NavForm } from "../Nav"
import { ThemeForm } from "../Theme/theme"
import { withTina } from 'tinacms'
import { useGlobalJsonForm } from "gatsby-tinacms-json"
import { useCMS } from "@tinacms/react-core"

const merge = require("lodash.merge")

export const PageLayout = ({ page, children }) => {
  const cms = useCMS()
  const data = useStaticQuery(graphql`
    query PageLayoutQuery {
      nav: settingsJson(
        fileRelativePath: { eq: "/content/settings/menu.json" }
      ) {
        ...nav

        rawJson
        fileRelativePath
      }
      theme: settingsJson(
        fileRelativePath: { eq: "/content/settings/theme.json" }
      ) {
        ...globalTheme

        rawJson
        fileRelativePath
      }
      site: settingsJson(
        fileRelativePath: { eq: "/content/settings/site.json" }
      ) {
        logo
        title
        description
        author

        rawJson
        fileRelativePath
      }
    }
  `)

  useGlobalJsonForm(data.nav, NavForm)
  useGlobalJsonForm(data.theme, ThemeForm)
  useGlobalJsonForm(data.site, SiteForm)

  const themeContext = React.useContext(ThemeContext)
  const theme = themeContext.theme
  const pageTitle =
    page && page.title
      ? page.title
      : page && page.frontmatter && page.frontmatter.title
      ? page.frontmatter.title
      : ""
  const pageHero = page.frontmatter ? page.frontmatter.hero : page.hero
  const hero = pageHero
    ? merge({}, theme.hero, removeNull(pageHero))
    : theme.hero

  return (
    <>
      {pageTitle && <SEO title={pageTitle} />}
      <Hero hero={hero} />
      <Main>
        <Wrapper>{children}</Wrapper>
      </Main>
    </>
  )
}

const SiteForm = {
  label: "Site",
  fields: [
    {
      label: "Logo",
      name: "rawJson.logo",
      component: "text",
      parse(value) {
        return value || ""
      },
    },
    {
      label: "Title",
      name: "rawJson.title",
      component: "text",
      parse(value) {
        return value || ""
      },
    },
    {
      label: "Description",
      name: "rawJson.description",
      component: "text",
      parse(value) {
        return value || ""
      },
    },
    {
      label: "Author",
      name: "rawJson.author",
      component: "text",
      parse(value) {
        return value || ""
      },
    },
  ],
}
