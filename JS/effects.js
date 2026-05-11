const ghost = document.getElementById("ghostTitle");

function randomGlitch() {
    if (!ghost) return;

    if (Math.random() > 0.7) {
        ghost.classList.add("glitch");

        setTimeout(() => {
            ghost.classList.remove("glitch");
        }, 200);
    }
}

setInterval(randomGlitch, 800);