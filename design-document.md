# Design Document — Windows 95 Desktop Portfolio

## 1. Project Description

This project is a personal portfolio homepage styled as a **Windows 95
desktop**. Instead of a conventional hero + sections layout, the homepage
(`index.html`) renders a desktop with icons, a taskbar, a Start Menu, and a
live clock. Double-clicking a desktop icon opens a draggable, closable
"program window" (styled with the classic beveled gray borders and blue
title bars) containing that section's content — About, Projects, or
Contact. Multiple windows can be open at once, each with its own entry in
the taskbar, exactly like the real OS.

The site is built entirely with vanilla HTML5, CSS3, and ES6+ JavaScript —
no frameworks, no component libraries, no jQuery. All interactive behavior
(window dragging, opening/closing, taskbar syncing, the Start Menu, and the
live clock) is hand-written in ES6 modules.

To satisfy the requirement for multiple real HTML pages with distinct URLs
(and to give search engines / graders a plain fallback), the same content
also exists as ordinary standalone pages: `about.html`, `projects.html`, and
`contact.html`. The Start Menu's "Programs" list links to these directly, in
addition to the desktop icons opening the content inline as windows.

## 2. User Personas

### Persona 1 — "Recruiter Rachel"

- **Age:** 34
- **Role:** Technical recruiter at a mid-size tech company
- **Goals:** Quickly find a candidate's skills, project examples, and
  contact info without needing to "figure out" a gimmick.
- **Frustrations:** Novelty homepages that hide real information behind too
  many clicks or unclear navigation.
- **Needs from this site:** A clearly labeled "My Computer" / "Resume" icon
  she can double-click immediately, plus a plain `about.html` link in the
  Start Menu as a fallback if she doesn't want to interact with the desktop
  metaphor at all.

### Persona 2 — "Fellow Developer Dev"

- **Age:** 26
- **Role:** Front-end developer browsing portfolios for inspiration
- **Goals:** See an original idea executed well — in this case, functioning
  draggable windows and a taskbar built without any UI library.
- **Frustrations:** Portfolios that all look like the same template.
- **Needs from this site:** Working drag, focus (click-to-front), close, and
  a taskbar that actually reflects open windows — proof it isn't just a
  static image of a desktop.

### Persona 3 — "Prospective Client Priya"

- **Age:** 41
- **Role:** Small business owner looking to hire a freelance developer
- **Goals:** Understand what kind of work this developer can do and how to
  reach them, without being confused by the retro interface.
- **Frustrations:** Interfaces that are "clever" but not usable.
- **Needs from this site:** An obvious way in (large, labeled icons; a
  Start Menu item literally called "Contact"), and a contact window that
  works like a normal contact form/links page once opened.

## 3. User Stories

1. **As Recruiter Rachel**, I want to double-click a "Resume/About" icon on
   the desktop, so that I can see the developer's background immediately.
2. **As Recruiter Rachel**, I want a plain `contact.html` link available
   (via the Start Menu), so that I have a normal fallback if I don't want
   to interact with the desktop metaphor.
3. **As Fellow Developer Dev**, I want to drag windows around the screen and
   have clicking a window bring it to the front, so that I can confirm the
   interaction is real and not decorative.
4. **As Fellow Developer Dev**, I want each open window to show up as a
   button in the taskbar, and clicking that button to bring the window
   back into focus, so that the experience matches a real OS.
5. **As Prospective Client Priya**, I want the Projects window to list real
   projects with short descriptions and links, so that I can see concrete
   examples of work.
6. **As Prospective Client Priya**, I want a Contact window with an email
   link, so that I can start a conversation right away.
7. **As any visitor**, I want a Start Menu with a "Shut Down..." option that
   shows a playful "It's now safe to close this tab" screen, so that the
   site feels like it has personality without breaking usability.
8. **As any visitor**, I want the clock in the taskbar to show the current
   time, so that the desktop feels alive rather than static.

## 4. Design Mockups (described)

**Desktop (index.html)**

```
--------------------------------------------------
|  [My Computer]     [Resume]                     |
|  [Projects]        [Contact.exe]                 |
|  [Recycle Bin]                                   |
|                                                   |
|              (desktop background)                |
|                                                   |
|        +-------------------------------+          |
|        | Resume.txt      [_][□][X]     |          |
|        |-------------------------------|          |
|        |  window content here          |          |
|        +-------------------------------+          |
--------------------------------------------------
| [Start]  [Resume.txt] [Projects]        12:45 PM |
--------------------------------------------------
```

**About page (about.html) / Projects page (projects.html) / Contact page
(contact.html)** — plain fallback pages, same content as the windows, using
the shared header/nav/footer shell described in the original design so they
remain fully navigable outside of the desktop metaphor.

Layout uses CSS Grid for the overall desktop shell (icon area / taskbar) and
Flexbox for window title bars and taskbar buttons. Window positions are set
with `position: absolute` and moved via `transform`/`left`/`top` updates in
JavaScript during drag.
