console.log("burgermenu");
const toggleButton = document.getElementsByClassName("toggle-button")[0]
console.log("test1");
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

console.log("test2");
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})

console.log("test3");
