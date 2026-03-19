import "./Project-styles.css"
import { Todo, Project, assign2Projects, allProjects, allTodos } from "./classes.js"
import { createInput, option, makeDialog, makeForm, makeDiv, makeBtn, handleSubmit } from "./functions.js"

let allProjectObjects = []

function Projects() {
    document.body.classList.add("projects")
    const contentBox = document.querySelector("#content")

    /* Your Projects Heading */
    const pageTitle = makeDiv("pageTitle")
        pageTitle.append("Your Projects")
        contentBox.append(pageTitle)

    /* Projects box */
    const projectListBox = makeDiv("projectListBox")
        contentBox.append(projectListBox)
    
    /* New Project button */
    const newProjectBtn = makeBtn("newProjectBtn", "New Project")
        contentBox.append(newProjectBtn)
        newProjectBtn.addEventListener("click", e=> {
            Dialog.showModal()
        })
    
    /* Dialogbox and form to Add new Projects */
    const Dialog = makeDialog("newProject")

    const newProjectForm = makeForm(Dialog, "newProjectForm")
        newProjectBtn.addEventListener("submit", e=> {
            e.preventDefault()
            allProjectObjects.push(handleSubmit(newProjectForm))
            newProjectForm.reset()
            Dialog.close()
        })

}

export { Projects, allProjectObjects }