import "./reset.css"
import "./styles.css"
import { HomePage } from "./home.js";
import { Menu } from "./menu.js";
import { Reservation } from "./reservation.js"

/* DOM nodes */
const contentBox = document.querySelector("#content")
const navBtns = document.querySelectorAll("nav>button")

/* function to clear the Content div */
function clear() {
    contentBox.replaceChildren()
}

/* create a Navigation function to navigate pages */
function navigate(page) {
    clear()

    if (page === "menu") {
        Menu()
    } else if (page === "home") {
        HomePage()
    }
    if (page === "reservations") {
        Reservation()
    }
}

/* get which nav button was clicked; call navigate function, and load respective page */
navBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        const page = e.target.dataset.page
        navigate(page)

        /* Add an (.active class) for Tabbed page */
        navBtns.forEach(btn => btn.classList.remove("active")) /*Remove .active class from all btns first */
        e.target.classList.add("active")
    })
})

/* Load the homepage while opening */
navigate("home")

export { navigate }