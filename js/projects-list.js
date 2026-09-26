// Renders the full project list on projects.html from the shared
// content-data module, so the data only has to be maintained in one place.

import { projects } from "./content-data.js";

function buildProjectCard(project) {
  const item = document.createElement("li");
  item.className = "win-list-item";

  const title = document.createElement("h3");
  title.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.description;

  const link = document.createElement("a");
  link.className = "button";
  link.href = project.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "View project";

  item.append(title, description, link);
  return item;
}

const list = document.getElementById("projects-list");
if (list) {
  projects.forEach((project) => {
    list.appendChild(buildProjectCard(project));
  });
}
