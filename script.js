const lines = [
    "SYSTEM://GHOST/",
    "SYSTEM://GHOST/chao/",
    "SYSTEM://GHOST/chao/player/",
    "SYSTEM://GHOST/chao/player/Objectives/",
    "SYSTEM://GHOST/chao/player/layers/fb1b860e/",

    "SYSTEM://GHOST/chao/????????/",
    "SYSTEM://GHOST/chao/????????/layers/",
    "SYSTEM://GHOST/chao/????????/Life/5c707f7b/",

    "SYSTEM://GHOST/chao/????????/",
    "SYSTEM://GHOST/chao/????????/layers/",
    "SYSTEM://GHOST/chao/????????/layers/45991735/",
    "SYSTEM://GHOST/chao/????????/Life/d74bc0e2/",

    "SYSTEM://GHOST/chao/????????_2/",
    "SYSTEM://GHOST/chao/????????_2/layers/",
    "SYSTEM://GHOST/chao/????????_2/layers/7c8c2eee/",

    "SYSTEM://GHOST/chao/????????_3/",
    "SYSTEM://GHOST/chao/????????_3/Objectives/",
    "SYSTEM://GHOST/chao/????????_3/Life/d30988f7/",

    "SYSTEM://GHOST/chao/????????_1/",
    "SYSTEM://GHOST/chao/????????_1/layers/",
    "SYSTEM://GHOST/chao/????????_1/Life/1adc8f35/",

    "SYSTEM://GHOST/chao/????????_2/",
    "SYSTEM://GHOST/chao/????????_2/layers/",
    "SYSTEM://GHOST/chao/????????_2/Life/372b1a9d/",

    "SYSTEM://GHOST/chao/????????_Long/",
    "SYSTEM://GHOST/chao/????????_Long/layers/",
    "SYSTEM://GHOST/chao/????????_Long/layers/1242c331/",

    "SYSTEM://GHOST/chao/????????_Wavy/",
    "SYSTEM://GHOST/chao/????????_Wavy/Objectives/",
    "SYSTEM://GHOST/chao/????????_Wavy/Life/9feb989a/",

    "SYSTEM://GHOST/chao/????????/",
    "SYSTEM://GHOST/chao/????????/layers/",
    "SYSTEM://GHOST/chao/????????/layers/114bd4fb/"
];

let index = 0;
const terminal = document.getElementById("terminalText");
const ghost = document.getElementById("ghostTitle");

setInterval(() => {
    terminal.textContent = lines[index];
    index = (index + 1) % lines.length;
}, 250);

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function openGithub() {
    window.open("https://github.com/BitThzn", "_blank");
}

function openAbout() {
    window.location.href = "about.html";
}

function randomGlitch() {
    const chance = Math.random();

    if (chance > 0.7) {
        ghost.classList.add("glitch");

        setTimeout(() => {
            ghost.classList.remove("glitch");
        }, 200);
    }
}

setInterval(randomGlitch, 800);

function openIdentity() {
    window.location.href = "identity.html";
}

const goals = [
    "BECOME AN ELITE PROGRAMMER",
    "MASTER CYBERSECURITY",
    "SPECIALIZE IN CYBER DEFENSE",
    "BECOME A MOTORCYCLE RIDER",
    "TRAVEL THE WORLD",
    "HELP PEOPLE THROUGH TECHNOLOGY",
    "PLAY MORE GAMES",
    "BUILD REAL FRIENDSHIPS"
];

const container = document.getElementById("goalsContainer");

function loadGoals() {
    let i = 0;

    const interval = setInterval(() => {

        if (i < goals.length) {

            const line = document.createElement("div");
            line.classList.add("goal-line");
            line.textContent = ">> " + goals[i];

            container.appendChild(line);

            setTimeout(() => {
                line.classList.add("show");
            }, 100);

            i++;

        } else {
            clearInterval(interval);

            const done = document.createElement("div");
            done.classList.add("goal-loading");
            done.textContent = "MISSION DATA FULLY LOADED";
            container.appendChild(done);
        }

    }, 600);
}

loadGoals();