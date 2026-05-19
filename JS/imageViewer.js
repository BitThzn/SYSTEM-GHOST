const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");
const loading = document.getElementById("loading");
const fill = document.querySelector(".fill");

function openViewer(src) {

    viewer.classList.remove("hidden");

    loading.style.display = "block";
    viewerImage.style.display = "none";

    fill.style.animation = "none";
    void fill.offsetWidth;
    fill.style.animation = "load 2s forwards";

    setTimeout(() => {

        viewerImage.src = src;

        loading.style.display = "none";
        viewerImage.style.display = "block";

    }, 2000);
}

function closeViewer() {

    const windowElement =
        document.querySelector(".viewer-window");

    windowElement.classList.add("closing");

    setTimeout(() => {

        viewer.classList.add("hidden");

        windowElement.classList.remove("closing");

    }, 220);

}