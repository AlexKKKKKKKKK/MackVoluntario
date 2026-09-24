import { project } from "./main.js";

document.querySelector("#category").textContent = project.category;

document.querySelector("#hero-image").src = project.image;
document.querySelector("#hero-image").alt = project.imageAlt;

document.querySelector("#title").textContent = project.title;
document.querySelector("#subtitle").textContent = project.subtitle;

document.querySelector("#schedule").textContent = project.schedule;
document.querySelector("#location").textContent = project.location;
document.querySelector("#spots").textContent = project.spots;
document.querySelector("#duration").textContent = project.duration;

document.querySelector("#description").textContent = project.description;
document.querySelector("#additional-info").textContent = project.additionalInfo;
