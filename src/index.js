import "./reset.css"
import "./styles.css"

/* Pages */
import { Home, allTaskObjects  } from "./home.js"
import { Projects, allProjectObjects} from "./projects.js"
import { Todo, Project, assign2Projects, allProjects, allTodos } from "./classes.js"

/* Open with the Home page Rendered */
Home()

/* clear */
function clear() {
    const contentBox = document.querySelector("#content") 
    contentBox.replaceChildren()
}

function renderPage(page) {
    if (page==="home") {
        clear()
        Home()
    } else if (page==="projects") {
        clear()
        Projects()
    }
    
}

/* Logic for changing page based on the nav button clicked */
const headerButtons = document.querySelectorAll("nav>button")
headerButtons.forEach(btn => {
    btn.addEventListener("click", e=> {
        let page = e.target.dataset.type
        renderPage(page)  
    })
})




