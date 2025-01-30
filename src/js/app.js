import { specialists } from "./specialists/index.js";
import { accordion } from "./sections/accordion.js";
import { header } from "./components/header.js";

window.addEventListener("load", () => {
    header()
    accordion()
    specialists()

    // Zoom Site Disabled
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
    });

    document.addEventListener('gesturechange', function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
    });

    document.addEventListener('gestureend', function (e) {
        e.preventDefault();
        document.body.style.zoom = 1;
    });
})