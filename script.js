console.log("burgermenu");
const toggleButton = document.getElementsByClassName("toggle-button")[0]

const navbarLinks = document.getElementsByClassName("navbar-links")[0]

console.log("test");
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})
