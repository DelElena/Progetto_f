const { Carousel } = require("bootstrap")

document.addEventListener("click", function () {
    const carousel = new Carousel("carousel-item", {
        direction: 'horizontal',
        loop: true
    });
});