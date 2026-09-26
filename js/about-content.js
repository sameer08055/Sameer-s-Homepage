// Renders about.html content from the shared content-data module.

import { profile, skills, experience, funFacts } from "./content-data.js";

const bioEl = document.getElementById("about-bio");
const timelineEl = document.getElementById("about-timeline");
const skillsEl = document.getElementById("about-skills");
const funFactsEl = document.getElementById("about-fun-facts");

if (bioEl) {
  bioEl.innerHTML = `<h1>${profile.name}</h1><p>${profile.tagline}</p>`;
}

if (funFactsEl) {
  funFacts.forEach((fact) => {
    const item = document.createElement("li");
    item.textContent = fact;
    funFactsEl.appendChild(item);
  });
}

if (timelineEl) {
  experience.forEach((job) => {
    const item = document.createElement("li");
    item.className = "timeline__item";
    item.innerHTML = `<strong>${job.role}</strong> — ${job.org} (${job.dates})<br />${job.summary}`;
    timelineEl.appendChild(item);
  });
}

if (skillsEl) {
  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.className = "skills__item";
    item.textContent = skill;
    skillsEl.appendChild(item);
  });
}
