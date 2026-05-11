function scrollToSection(id) {
    const el = document.getElementById(id);

    if (el) {
        el.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function openGithub() {
    window.open("https://github.com/BitThzn", "_blank");
}

function openAbout() {
    window.location.href = "about.html";
}

function openIdentity() {
    window.location.href = "identity.html";
}

function openGhostRepo() {
    window.location.href = "./projects_pages/system-ghost.html";
}

function openComingSoon(projectName) {
    window.location.href = `coming.html?project=${projectName}`;
}

function openSystemGhostRepo() {
    window.open("https://github.com/BitThzn/SYSTEM-GHOST", "_blank");
}

function returnToCore() {
    window.location.href = "../index.html#projects";
}