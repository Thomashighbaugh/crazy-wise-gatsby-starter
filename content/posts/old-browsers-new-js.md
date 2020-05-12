---
title: "Old Browsers, New JS"
path: /blog/old-browsers-new-js
date: "2019-01-06"
type: post
draft: false
---

Javascript features enter into the language much faster than the browsers can keep up, especially while still supporting older
releases that have lower end hardware and more antique operating systems behind them that pose a security risk to the user. This
poses a developer dilemma, as often those new JS features include functionality a developer would like to incorporate
but still has to consider older browsers, so what is there to do?

## Enter the Transpilers

One common strategy to include bleeding edge JS in sites while still providing users with cross platform support for browsers
almost a decade old is transpiling the new JS to old JS. **Transpiling** is the process where a software application takes
developer written code and changes its form into one the browser can read. Much like how a compiler turns C into binary, the
transpiler is rendering the Javascript in a dialect that the older browsers can understand.

## The Power of Babel

This is the way that React, the library/framework this site is written primarily in, turns React files containing components
and JSX into a form any browser can actually read as React was built to be transpiled exclusively, which may some day change.
This is done using Babel, which is not specific to React but is used in all sorts of applications to render vanilla JS
out of the various permutations of the already amorpheous Javascript language.

## Transpiling: The Giant Leap

Babel is part of the process that Gatsby, the static site generator this project employed, uses to create HTML+CSS files
that absolutely render across platforms. This functionality is the first step towards that process, that will then parse
the generated Javascript into the HTML it would otherwise embed into a site's HTML and slaps on a CSS file to go with it.
This occupies a tiny slice of a big server and so often statically generated sites are hosted for free.

The presence of Babel, and the technology underlaying it, has further soldified JS' foothold on the web as it has enabled
Javascript written in the newest variant to render easily across platforms without the developer needing to do more than
include Babel or one of the many Static Site Generators in the Build script in the `package.json`
