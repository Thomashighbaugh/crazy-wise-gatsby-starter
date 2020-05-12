---
title: Markdown Content Management
path: /blog/introducing-tina-grande
date: '2019-11-06T00:00:00.000Z'
type: post
authors:
  - scott-byrne
draft: false
hero:
  image: ../images/lpc.jpg
  large: false
  overlay: true
---

[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)

In order to create this website, the Gatsby SSR is able to accept numerous streams of input to create the pages. This has
a rather wide range of options, which is truly unlimited for the industrious who write their own plugins, but typically
ranges from Medium content to documents written for the website in a markup language. This content is then queried using
GraphQL and rendered into HTML format for each page the SSR renders, one for each input source file.

## About Markdown

If you happen to examine almost any Github repo, you'll notice that a file called `README.md` is generally in each one,
which is the description of the repos content produced by the developer. This file is rendered by GitHub, using a program
called Gollem, into a front page for the site which typically describes the repo's content and the ways users may install
or otherwise utilize the source code of the repository.

The file is in Markdown, a markup language that is essentially a powerful but simplified wrapper for HTML that is designed to
enable the rapid composure of text documents without the overhead of a word processor, like Microsoft Word, or need for the
internet, like Google Docs, on any system that has any text editor. Its a useful markup to remember, personally I use it
for most note taking activities (except reading where I use emac's org-mode), to compose pages in my personal knowledge wiki,
write down quick notes for later on my phone and even most documents that I write for school.

Markdown also features the ability to use regular HTML within the Markdown file, with some limitations involving styling
the document with css (it depends on the renderer, some allow this but most do not) and rules about nesting (you cannot nest Markdown
control directives within HTML tags, whatever is in the HTML must itself use HTML). This adds a lot of flexibility to the
format regardless, though it does not miss out on wrapping some useful features in a rapidly written syntax. For instance,
three backticks begin (and end) a code block like below

```javascript
alert(
  "If you write the name of the language next to the three backticks, it turns syntax highlighting on"
)
alert("Way easier than doing that in OneNote!")
```

and to make a comment block, use the greater than symbol on the line you want to quote

> Which I am not sure you can easily do on most text editors

The pipe symbol, using the format illuminated below, can be used to produce some of the easiest tables imaginable, which
really improve the professional quality of one's documentation and are an easy way to appreociate data and break up concepts.

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

```

becomes:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Though of particular interest in the academic world, markdown lists are made without needing to explore a menu or learn a
hot key combo, simply add a hyphen to the front of the line. If you want to nest items, add a space in front of that hyphen
and the rendering engine handles the rest.

### Git Hub Flavored Markdown

Github, and many Markdown renders that are available, also make various macros available that extend the functionality of
the markup language to include things like support for icons, check boxes for todo lists and much more
