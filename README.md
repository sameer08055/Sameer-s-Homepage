# Windows 95 Desktop Portfolio

## Author

Mohammed Sameer Sarfaraz Bake

## Class Link

`<INSERT YOUR COURSE / CLASS LINK HERE>`

## Project Objective

Build a static, front-end-only homepage using **only** vanilla HTML5, CSS3,
and ES6+ JavaScript (no frameworks, no component libraries, no jQuery) that
introduces the author, showcases a small portfolio of projects, and includes
an original interactive component. The differentiating feature here is a
fully interactive **Windows 95 desktop**: double-click desktop icons to open
draggable, closable "program windows" (About/Projects/Contact), each with a
live taskbar entry, a working Start Menu, a live clock, and a "Shut Down"
easter egg — all built from scratch with ES6 modules, no UI libraries.

## Screenshot

`<INSERT SCREENSHOT OF THE DEPLOYED HOMEPAGE HERE, e.g. ./images/screenshot.png>`

## Live Site

`<INSERT PUBLIC DEPLOYMENT URL HERE, e.g. GitHub Pages link>`

## Project Structure

```
.
├── index.html            # The Win95 desktop: icons, windows, taskbar, Start Menu
├── about.html             # Plain fallback About page (second content page)
├── projects.html          # Plain fallback Projects page
├── contact.html           # Plain fallback Contact page (AI-generated copy, see below)
├── css/
│   └── style.css          # All styles: Win95 bevels/desktop + plain page styles, no !important
├── js/
│   ├── window-manager.js   # Core creative component: drag, focus, taskbar, Start Menu, clock
│   ├── desktop.js           # Wires icons + window content on index.html
│   ├── content-data.js       # Shared placeholder profile/skills/experience/projects data
│   ├── main.js               # Shared nav highlighting + footer year (fallback pages)
│   ├── about-content.js       # Renders about.html from content-data.js
│   └── projects-list.js        # Renders projects.html from content-data.js
├── images/                # Placeholder SVG avatar and favicon
├── design-document.md      # Description, personas, user stories, mockups
├── package.json            # type: "module", scripts, dev dependencies
├── .eslintrc.json          # ESLint config used for this project
├── .prettierrc.json        # Prettier config used for this project
└── LICENSE                 # MIT License
```

## ⚠️ Before You Submit

All personal content (name, tagline, email, social links, skills,
experience, and project descriptions) lives in one place,
`js/content-data.js` — edit that file if anything changes. Still to fill in
before final submission: the class link, a real screenshot, and the live
deployment URL below.

## Instructions to Build / Run Locally

This is a static site with no build step required.

1. Clone the repository:
   ```bash
   git clone <YOUR_REPO_URL>
   cd <YOUR_REPO_FOLDER>
   ```
2. Install dev dependencies (only needed for linting/formatting/local server):
   ```bash
   npm install
   ```
3. Serve the site locally. ES6 modules require `http://`, not `file://`, so
   either:
   - Run `npm start` (uses the `serve` package) and open the printed URL, or
   - Open the folder in VS Code and use the "Live Server" extension
     (right-click `index.html` → "Open with Live Server").
4. Lint and format checks:
   ```bash
   npm run lint
   npm run format:check
   ```

## Deployment

Deployed as a static site (e.g. GitHub Pages). To deploy your own copy:

1. Push this repository to GitHub.
2. In the repo settings, enable GitHub Pages for the `main` branch (root
   folder).
3. GitHub will publish the site at `https://<username>.github.io/<repo>/`.

## Use of GenAI Tools

GenAI tools were used as part of building this project. Details below:

- **Model used:** Claude (Anthropic), Claude Sonnet 4.6, accessed via the
  Claude.ai chat interface, September 2026.
- **What it was used for:**
  1. Scaffolding the overall project (HTML structure, CSS, and the ES6
     `window-manager.js` / `desktop.js` / `content-data.js` / `main.js`
     modules) based on the assignment rubric and creative-component
     direction provided by the student.
  2. Drafting the body copy of `contact.html` (the "Let's build something
     together" paragraph). This is the page explicitly marked as
     AI-generated per the assignment requirements; it is flagged with an
     HTML comment in `contact.html` pointing back to this section.
  3. Drafting the initial `design-document.md` (personas, user stories, and
     the text description of the mockups) from a prompt describing the
     site's Windows 95 theme.
- **Representative prompts used:**
  - "Build me a vanilla HTML/CSS/ES6 portfolio homepage following this
    rubric: [rubric pasted here]."
  - "List some creative-component ideas that take the homepage back to the
    90s."
  - "Let's go with a Windows 95 desktop interface — draggable windows, a
    taskbar, and a Start Menu, built with vanilla JS."
  - "Write a short, friendly contact page paragraph inviting visitors to
    reach out about freelance/work opportunities."
- **Review process:** All AI-generated code and text were read through,
  adjusted for consistency (naming, styling, tone), and manually tested in
  the browser (window dragging, focus/stacking order, taskbar syncing,
  Start Menu, Shut Down screen, responsive layout) before being included in
  this submission. Personal content was intentionally kept as placeholders
  (see "Before You Submit" above) rather than generated by AI, and should be
  filled in by hand with real information.

## License

This project is licensed under the MIT License — see [LICENSE](./LICENSE).
