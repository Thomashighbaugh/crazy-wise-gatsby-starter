import React from "react"
import { Wrapper } from "../Style"
import { Coffee } from "styled-icons/boxicons-regular"
import styled, { css } from "styled-components"
import { transparentize } from "polished"
import { Nav } from "../Nav"
import { ThemeContext } from "../Theme/theme"
import { Link } from "gatsby"

export const Header = styled(({ siteTitle, ...styleProps }) => {
  return (
    <ThemeContext.Consumer>
      {({ toggleDarkMode, isDarkMode, theme }) => (
        <header {...styleProps}>
          <HeaderWrapper>
            <SiteTitle>
              <SiteLink to="/">
                <Coffee />
                {siteTitle}
              </SiteLink>
            </SiteTitle>
            <Nav toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          </HeaderWrapper>
        </header>
      )}
    </ThemeContext.Consumer>
  )
})`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: ${(props) => props.theme.header.height};
  top: 0;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.foreground};

  ${(props) =>
    props.theme.header.overline &&
    css`
      border-top: 4px solid ${(props) => props.theme.color.primary};
    `};

  ${(props) =>
    props.theme.header.underline &&
    css`
      box-shadow: inset 0 -1px 0 ${(props) => transparentize(0.99, props.theme.color.white)},
        0 1px 0 ${(props) => transparentize(0.99, props.theme.color.black)};
    `};

  ${(props) =>
    props.theme.header.transparent &&
    css`
      background-color: ${(props) =>
        transparentize(0.8, props.theme.color.black)};
      color: ${(props) => props.theme.color.white};
    `};
`

export const SiteLink = styled(Link)`
  position: static;
  
  display: flex;
  align-items: center;
  justify-items: center;
  align-self: stretch;
  color: inherit !important;
  font-size: 2.25rem;
  text-decoration: none;
  margin: 0 0 0 0 !important;
  transition: all 2s ${(p) => p.theme.easing};
  z-index: 1;
  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 0.75rem;
    fill: ${(props) => props.theme.color.primary};
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: -1rem;
    width: calc(100% + 2rem);
    height: 100%;
    background-color: ${(props) => props.theme.color.primary};
    opacity: 0;
    transition: all 2s ${(p) => p.theme.easing};
    z-index: -1;
  }

  &:focus-visible {
    &:after {
      opacity: 0.5;
    }
  }
`

export const SiteTitle = styled.h1`
  margin: 0;
  flex: 0 0 auto;
  font-size: 1.5rem;
  align-self: stretch;
  display: flex;
`

export const HeaderWrapper = styled(Wrapper)`
  display: flex;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  height: 100%;
`
