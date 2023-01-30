# that-girl-solo-backpacking

![GitHub Last Commit](https://img.shields.io/github/last-commit/anthfgreco/that-girl-solo-backpacking)
![GitHub Repo Size](https://img.shields.io/github/repo-size/anthfgreco/that-girl-solo-backpacking)

Personal travel blog made from scratch with React and Tailwind CSS.

Project includes a simple CMS that converts Markdown files → JSON → React components using react-markdown.

https://anthfgreco.github.io/that-girl-solo-backpacking/

## Todo
- [x] CMS to automate Markdown → JSON → React components
- [x] Automatically populate blog main page with blog links
- [x] Contact form using Formspree
- [x] World SVG map showing countries visited with hover effects and links using react-simple-maps
- [x] Full screen image landing for blog posts
- [ ] Update HomePage with more relevant text and recent blog posts
- [ ] Styled countries links on Destinations page
- [ ] Transition to using a backend server (currently hosting on GitHub Pages and using react-router for client routing)
  - [ ] Comments, views, likes, etc.


## Getting started
### Importing Markdown files
- Place your Markdown files in the public/posts folder
- Write the required metadata at the top of every blog post, see existing posts for examples
- Convert Markdown files to json to be used by the application `npm run json`

### Developing
- Clone or fork project then navigate to the project folder
- Install dependencies: `npm install`
- Start development server: `npm run dev`

### Building and Deploying
[Vite Docs](https://vitejs.dev/guide/static-deploy.html)
