const goalsContainer = document.getElementById("goalsContainer");

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

function loadGoals() {
    if (!goalsContainer) return;

    let i = 0;

    const interval = setInterval(() => {
        if (i < goals.length) {

            const line = document.createElement("div");

            line.classList.add("goal-line");
            line.textContent = ">> " + goals[i];

            goalsContainer.appendChild(line);

            requestAnimationFrame(() => {
                line.classList.add("show");
            });

            i++;

        } else {

            clearInterval(interval);

            const done = document.createElement("div");

            done.classList.add("goal-loading");
            done.textContent = "MISSION DATA FULLY LOADED";

            goalsContainer.appendChild(done);
        }

    }, 600);
}