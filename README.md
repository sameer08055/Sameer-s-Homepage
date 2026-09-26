# Windows 95 Desktop Portfolio

## Author

Mohammed Sameer Sarfaraz Bake

## Class Link

CS5610.18490.202710

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
<img width="2874" height="1562" alt="image" src="https://github.com/user-attachments/assets/a6fee2db-c03c-4923-b589-8073839d7e7b" />

## Live Site
https://sameer08055.github.io/personal-homepage/
## Pages

This project includes four HTML pages, at four distinct URLs:

index.html — the interactive Windows 95 desktop (homepage)
about.html — plain fallback About page
projects.html — plain fallback Projects page
contact.html — plain fallback Contact page, and the AI-generated page for this assignment: its body copy was drafted by Claude (see "Use of GenAI Tools" below for the model, prompt, and disclosure)

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

Model used: Claude (Anthropic), Claude Sonnet 4.6, accessed via the Claude.ai chat interface, September 2026.
What it was used for:
Planning and design discussion: I asked Claude extensive questions about project structure, HTML semantics, CSS organization, and how to structure the ES6 modules (window-manager.js, desktop.js, content-data.js, main.js) before writing any code myself. Claude acted as a design/planning assistant and sounding board — walking through options, tradeoffs, and formatting conventions — rather than the author of the final code.
Drafting the body copy of contact.html (the "Let's build something together" paragraph). This is the page explicitly marked as AI-generated per the assignment requirements; it is flagged with an HTML comment in contact.html pointing back to this section.
Drafting the initial design-document.md (personas, user stories, and the text description of the mockups) from a prompt describing the site's Windows 95 theme, which I then reviewed and adjusted.
Brainstorming the creative-component direction: I asked for a list of ideas for a "back to the 90s" themed homepage feature, and chose the Windows 95 desktop concept from that list.
Representative prompts used:
"List some creative-component ideas that take the homepage back to the 90s."
"Let's go with a Windows 95 desktop interface — draggable windows, a taskbar, and a Start Menu, built with vanilla JS." (followed by extensive back-and-forth on structure, HTML semantics, CSS formatting, and module organization before I implemented it)
"Write a short, friendly contact page paragraph inviting visitors to reach out about freelance/work opportunities."
Review process: The final HTML, CSS, and JavaScript in this repository were written by me. I used Claude to plan the architecture, ask formatting/best-practice questions, and get a design document and the AI-generated contact page draft, then implemented and manually tested the site myself (window dragging, focus/stacking order, taskbar syncing, Start Menu, Shut Down screen, responsive layout). Personal content in content-data.js was written by hand, not generated by AI.

## License

This project is licensed under the MIT License — see [LICENSE](./LICENSE).
