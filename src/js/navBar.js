const nav = document.querySelector('#navBar');
let lastScrollY = window.scrollY;

window.addEventListener("scroll" , () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
        console.log("test");
    } else {
        nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
});