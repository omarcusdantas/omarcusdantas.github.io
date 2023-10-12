function calculateNewX(scrollY, div) {
    const divDistanceFromTop = div.getBoundingClientRect().top;
    const maxScroll = divDistanceFromTop;
    const minX = 150;

    if (scrollY <= maxScroll) {
        const normalizedScroll = scrollY / maxScroll;
        const newX = minX - normalizedScroll * minX;
        return newX + "%";
    }

    return "0%";
}

function translateAboutCard() {
    const scrollY = window.scrollY;
    const div = document.querySelector(".about");
    const newX = calculateNewX(scrollY, div);
    div.style.transform = `translateX(${newX})`;
}

translateAboutCard();
document.addEventListener("scroll", translateAboutCard);
