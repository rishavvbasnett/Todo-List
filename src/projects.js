import "./Project-styles.css"
import { Todo, Project, allProjects, allTodos, myProjects } from "./classes.js"
import { createInput, option, makeDialog, makeForm, makeDiv, makeBtn, handleSubmit } from "./functions.js"
import { Home } from "./home.js"
import { clear } from "./index.js"

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
    newProjectBtn.addEventListener("click", e => {
        Dialog.showModal()
    })

    /* Dialogbox and form to Add new Projects */
    const Dialog = makeDialog("newProject")

    const newProjectForm = makeForm(Dialog, "newProjectForm")
    newProjectForm.addEventListener("submit", e => {
        e.preventDefault()

        const projectObject = handleSubmit(newProjectForm)
        const project = new Project(projectObject.projectTitle, projectObject.projectId)

        renderProject(project)
        newProjectForm.reset()
        Dialog.close()
    })

    /* Function to Render Projects from the project List */
    function renderProject(project) {
        const projectDiv = makeDiv(project.id)
        projectDiv.dataset.id = project.id
        projectDiv.id = project.id

        const title = document.createElement("p")
        title.textContent = project.title

        const deleteBtn = makeBtn("deleteProject", "Delete Project")
        deleteBtn.addEventListener("click", e => {
            let ID2delete = e.target.closest("div").dataset.id
            removeProject(ID2delete)
            /* REMOVE THE PARENT DIV FORM THE PROJECTLIST BOX */
            projectListBox.removeChild(e.target.closest("div"))
        })
        projectDiv.addEventListener("click", e => {
            if (e.target === e.currentTarget) {
                clear()
                Home(e.currentTarget.dataset.id)
            }
        })
        projectDiv.dataset.id = project.id
        projectDiv.append(title, deleteBtn)
        projectListBox.append(projectDiv)
    }

    /* Function to Remove Projects from Data */
    function removeProject(projectId) {
        const removeIndex = myProjects.findIndex(Project => Project.id == projectId)
        console.log(removeIndex)
        if ((allProjects[projectId].length) > 0) {
            const choice = prompt(`This Project has ${allProjects[projectId].length} tasks. Do you want to delete it? (y/n)`)

            if (choice.toLowerCase() === "y") {
                myProjects.splice(removeIndex, 1)
                delete allProjects[projectId]
            } else {
                return
            }
        }
        myProjects.splice(removeIndex, 1)
        delete allProjects[projectId]
    }

    renderProject(myProjects[0]) /* Render the default project */
}

export { Projects }