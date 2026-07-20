// language.js
// Responsável exclusivamente pela troca de idioma e renderização dos dados de conteúdo.

import { data } from "./data.js";

export function switchLanguage(lang) {
    const d = data[lang];

    document.getElementById("btn-pt").classList.toggle("active-lang", lang === "pt");
    document.getElementById("btn-en").classList.toggle("active-lang", lang === "en");

    document.getElementById("name").textContent = d.name;
    document.getElementById("title").textContent = d.title;
    document.getElementById("summary-title").textContent = d.summaryTitle;
    document.getElementById("education-title").textContent = d.educationTitle;
    document.getElementById("summary-text").textContent = d.summary;
    document.getElementById("edu1").textContent = d.edu1;
    document.getElementById("edu2").textContent = d.edu2;
    document.getElementById("skills-title").textContent = d.skillsTitle;
    document.getElementById("languages-title").textContent = d.languagesTitle;
    document.getElementById("experience-title").textContent = d.experienceTitle;

    document.getElementById("skills-container").innerHTML = d.skills
        .map((skill) => `<span class="px-5 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-2xl text-sm">${skill}</span>`)
        .join("");

    document.getElementById("languages-container").innerHTML = d.languages
        .map((language) => `<div class="flex justify-between"><span>${language}</span></div>`)
        .join("");

    document.getElementById("experience-container").innerHTML = d.experiences
        .map(
            (experience) => `
                <div class="border-l-4 border-[#0a66c2] pl-7">
                    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3">
                        <div>
                            <h3 class="font-semibold text-xl">${experience.company}</h3>
                            <p class="text-[#0a66c2]">${experience.role}</p>
                        </div>
                        <div class="text-sm text-zinc-500 dark:text-zinc-400 lg:text-right lg:flex-shrink-0">
                            ${experience.period}<br>${experience.location}
                        </div>
                    </div>
                    <p class="mt-5 text-zinc-600 dark:text-zinc-400">${experience.desc}</p>
                </div>
            `
        )
        .join("");
}
