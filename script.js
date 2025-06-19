window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    document.querySelector(".hero").style.backgroundPositionY = `${scrollY * -0.5}px`;
});
