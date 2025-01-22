document.addEventListener("DOMContentLoaded", () => {
    const rainbow = document.querySelector(".rainbow");

    // Hover effect: Change speed and glow
    rainbow.addEventListener("mouseover", () => {
        rainbow.style.animationDuration = "2s, 1s";
    });

    rainbow.addEventListener("mouseout", () => {
        rainbow.style.animationDuration = "5s, 2s";
    });
});