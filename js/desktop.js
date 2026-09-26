// Wires up the Windows 95 desktop: builds each window's content from the
// shared content-data module, registers windows with the window manager,
// and connects desktop icons (single click = select, double click = open).

import { profile, skills, experience, projects, funFacts } from "./content-data.js";
import {
  registerWindow,
  openWindow,
  initStartMenu,
  initShutdown,
  initClock,
} from "./window-manager.js";

function renderAboutWindow() {
  const body = document.querySelector("#window-about .win-window__body");
  const experienceItems = experience
    .map(
      (job) => `
        <li class="timeline__item">
          <strong>${job.role}</strong> — ${job.org} (${job.dates})<br />
          ${job.summary}
        </li>`
    )
    .join("");

  const skillItems = skills
    .map((skill) => `<li class="skills__item">${skill}</li>`)
    .join("");

  const funFactItems = funFacts.map((fact) => `<li>${fact}</li>`).join("");

  body.innerHTML = `
    <h2>${profile.name}</h2>
    <p>${profile.tagline}</p>
    <h3>Experience</h3>
    <ul class="timeline">${experienceItems}</ul>
    <h3>Skills</h3>
    <ul class="skills__list">${skillItems}</ul>
    <h3>Beyond the code</h3>
    <ul>${funFactItems}</ul>
  `;
}

function renderProjectsWindow() {
  const body = document.querySelector("#window-projects .win-window__body");
  const items = projects
    .map(
      (project) => `
        <li class="win-list-item">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <a class="win-button bevel-out" href="${project.url}" target="_blank" rel="noopener noreferrer">Open</a>
        </li>`
    )
    .join("");

  body.innerHTML = `<ul class="win-list">${items}</ul>`;
}

function renderContactWindow() {
  const body = document.querySelector("#window-contact .win-window__body");
  body.innerHTML = `
    <p>Have a project in mind or a question? Reach out below.</p>
    <p>
      <a class="win-button bevel-out" href="mailto:${profile.email}">Email</a>
      <a class="win-button bevel-out" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a class="win-button bevel-out" href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
    </p>
  `;
}

function renderMyComputerWindow() {
  const body = document.querySelector("#window-my-computer .win-window__body");
  body.innerHTML = `
    <p>This computer contains the following drives:</p>
    <ul class="win-list">
      <li class="win-list-item"><h3>C:\\About</h3><p>Background, experience and skills.</p></li>
      <li class="win-list-item"><h3>D:\\Projects</h3><p>${projects.length} project(s) on record.</p></li>
      <li class="win-list-item"><h3>E:\\Contact</h3><p>Email and social links.</p></li>
    </ul>
  `;
}

function renderRecycleBinWindow() {
  const body = document.querySelector("#window-recycle .win-window__body");
  body.innerHTML = `
    <p class="notepad-text">deleted_bugs.log

  [ ] off-by-one error (1)
  [ ] off-by-one error (2)
  [x] the one bug that took 6 hours
  [ ] "it works on my machine"
</p>
  `;
}

function setupIcons() {
  document.querySelectorAll(".desktop-icon").forEach((icon) => {
    icon.addEventListener("click", () => {
      document
        .querySelectorAll(".desktop-icon--selected")
        .forEach((el) => el.classList.remove("desktop-icon--selected"));
      icon.classList.add("desktop-icon--selected");
    });
    icon.addEventListener("dblclick", () => {
      openWindow(icon.dataset.opens);
    });
    icon.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        openWindow(icon.dataset.opens);
      }
    });
  });
}

function setupWindows() {
  const taskbarListEl = document.getElementById("taskbar-windows");
  const windowConfigs = [
    { id: "window-my-computer", title: "My Computer" },
    { id: "window-about", title: "Resume.txt" },
    { id: "window-projects", title: "Projects" },
    { id: "window-contact", title: "Contact.exe" },
    { id: "window-recycle", title: "Recycle Bin" },
  ];

  windowConfigs.forEach(({ id, title }) => {
    const windowEl = document.getElementById(id);
    if (windowEl) {
      registerWindow({ id, windowEl, taskbarListEl, title });
    }
  });
}

renderAboutWindow();
renderProjectsWindow();
renderContactWindow();
renderMyComputerWindow();
renderRecycleBinWindow();
setupIcons();
setupWindows();
initStartMenu({ startButtonSelector: "#start-button", startMenuSelector: "#start-menu" });
initShutdown({
  shutdownTriggerSelector: "#shutdown-trigger",
  shutdownScreenSelector: "#shutdown-screen",
});
initClock("#taskbar-clock");

// Open the About window by default so the desktop isn't empty on load.
openWindow("window-about");
