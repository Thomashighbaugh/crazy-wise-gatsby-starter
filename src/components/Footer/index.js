import React from "react"
import { Wrapper } from "../Style"
import styled from "styled-components"
import { transparentize } from "polished"

export const Footer = styled(({ ...styleProps }) => {
  return (
    <footer {...styleProps}>
      <Wrapper>
        © {new Date().getFullYear()} – Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
        <a href="https://www.tinacms.org">Tina</a> <span>by </span>
      </Wrapper>
    </footer>
  )
})`
  font-size: 1.25rem;
  text-align: center;
  height: 1rem;
  background-color: ${(props) =>
    transparentize(0.97, props.theme.color.foreground)};
  box-shadow: inset 0 1px 0
    ${(props) => transparentize(0.95, props.theme.color.foreground)};
`
