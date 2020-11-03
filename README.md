# Slick
A template for creating clean, modern dzslides presentations.

# What?

The amazing [pandoc] tool can convert a Markdown document into an html and
css-based slide show using a few different plugins, this simplest of which is
dzslides.  Unfortunately, dzslides are, frankly, pretty ugly by default.
`Slick` aims to provide a set of sane adjustments to pandoc's default dzslides
template.  

## Why?  

Why bother with converting markdown to html slides over powerpoint?  Well, I
think there's something to be said for generating the content of a presentation
in plain text -- if you happen to take notes or generate content in markdown,
you can transition those notes seamlessly to html with a single command.
What's more, html can do things that powerpoint just *can't*, or can't easily.
Think about how hard it is to get the following working in powerpoint:

- Highlighted source code
- Interactive visuals
- Animated gifs

The example slides show how all of these are available in slick dzslides.
Anything else that's doable in html should be doable with slick dzslides,
provided perhaps with a little knowhow in html, css, and perhaps javascript.

## How?

0. Clone slick dzslides from github.
1. Create a folder for your web presentation files to live in.
2. Copy the `fonts` folder from slick to your web presentation folder.  This
   will provide slick's good-looking fonts, internet connection or no.
3. Create your content in a markdown file (such as `example.md`).  Use standard
   markdown to notate where images fit, etc.
4. Add image files to your web presentation folder (perhaps in an `/images`
   subdirectory.  Make sure your markdown file references your image locations.
5. Convert your markdown to html using pandoc:

  ```{bash}
    pandoc 
