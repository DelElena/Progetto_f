const a4 = document.querySelector(".a4");
const a6 = document.querySelector(".a6");

const contenitore = document.querySelector(".contenitore");

a4.addEventListener("click", toggle4Coumn);
a6.addEventListener("click", toggle6Column);

function toggle4Coumn() {
    a4.classList.add("btn--active");
    a6.classList.remove("btn--active");
    contenitore.classList.remove("contenitore-6-col");
}

function toggle6Column() {
    a4.classList.remove("btn--active");
    a6.classList.add("btn--active");
    contenitore.classList.add("contenitore-6-col");
}