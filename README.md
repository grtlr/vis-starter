# vis-starter

A starter template to prototype visualizations 🚀.

To use this repository just use [degit](https://github.com/Rich-Harris/degit):

    npx degit grtlr/vis-starter <name>

By default, this template ships with [`d3`](https://d3js.org/). If you prefer to use [`vega-lite`](https://vega.github.io/vega-lite/), simply check out the following branch:

    npx degit grtlr/vis-starter#vega-lite <name>

## Development

The project can be build using:

    yarn install
    yarn run build

You can start a live development server with hot reloading:

    yarn run dev

In addition, there is an extensive style guide at `.eslintrc.json`. To apply automated fixes simply run:

    yarn run lint-fix

This template also provides continuous integration using Travis CI and GitHub Actions.
