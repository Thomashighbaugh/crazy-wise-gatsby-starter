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
        <a href="https://www.tinacms.org">Tina</a>{" "}
        <span>
          by <a href="https://thomasleonhighbaugh.me">Thomas Leon Highbaugh</a>{" "}
        </span>
      </Wrapper>
    </footer>
  )
})`
  font-size: 1rem;
  text-align: center;
  font-family: "Lilita One", monospace;
  height: 0.5rem;
  background-color: ${(props) =>
    transparentize(0.97, props.theme.color.foreground)};
  box-shadow: inset 0 1px 0
    ${(props) => transparentize(0.95, props.theme.color.foreground)};
`
