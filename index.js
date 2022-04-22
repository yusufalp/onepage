import { fullStackProjects, frontEndProjects } from "./data/project.js";
import { techStackList } from "./data/tech.js";

const today = new Date();
const currentYear = today.getFullYear();

const footerTCopyrights = document.querySelector(".copyrights")

const copyrights = `Copyrights @ Yusuf Alp ${currentYear}`;
footerTCopyrights.textContent = copyrights;


const projects = document.querySelector(".personal-projects");

for (let project of fullStackProjects) {
  const article = document.createElement("article");
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;
  const projectImg = document.createElement("img");
  projectImg.setAttribute("src", project.imgSrc);
  projectImg.setAttribute("alt", project.imgAlt);
  const projectClientLink = document.createElement("a");
  projectClientLink.setAttribute("href", project.clientLink);
  projectClientLink.textContent = "Front-End";
  const projectServerLink = document.createElement("a");
  projectServerLink.setAttribute("href", project.serverLink);
  projectServerLink.textContent = "Back-End";
  const projectLiveLink = document.createElement("a");
  projectLiveLink.setAttribute("href", project.liveLink);
  projectLiveLink.textContent = "Live";
  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  const projectTechnologies = document.createElement("p");
  projectTechnologies.textContent = `Technologies: ${project.technologies}`;
  article.appendChild(projectTitle);
  article.appendChild(projectImg);
  article.appendChild(projectClientLink);
  article.appendChild(projectServerLink);
  article.appendChild(projectLiveLink);
  article.appendChild(projectDescription);
  article.appendChild(projectTechnologies);
  projects.appendChild(article);
}

for (let project of frontEndProjects) {
  const article = document.createElement("article");
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;
  const projectImg = document.createElement("img");
  projectImg.setAttribute("src", project.imgSrc);
  projectImg.setAttribute("alt", project.imgAlt);
  const projectGitHubLink = document.createElement("a");
  projectGitHubLink.setAttribute("href", project.githubLink);
  projectGitHubLink.textContent = "GitHub";
  const projectLiveLink = document.createElement("a");
  projectLiveLink.setAttribute("href", project.liveLink);
  projectLiveLink.textContent = "Live";
  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  const projectTechnologies = document.createElement("p");
  projectTechnologies.textContent = `Technologies: ${project.technologies}`;
  article.appendChild(projectTitle);
  article.appendChild(projectImg);
  article.appendChild(projectGitHubLink);
  article.appendChild(projectLiveLink);
  article.appendChild(projectDescription);
  article.appendChild(projectTechnologies);
  projects.appendChild(article);
}

const about = document.querySelector("#about");

for (let tech of techStackList) {
  const techImg = document.createElement("img");
  techImg.classList.add("tech-img")
  techImg.setAttribute("src", tech.imgSrc);
  techImg.setAttribute("alt", tech.imgAlt);
  about.appendChild(techImg);
}



