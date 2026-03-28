import "./Project-styles.css"
import { format, parseISO } from 'date-fns'
import { Todo, Project, loadState, updateState, myProjects, allProjects} from "./classes.js"
import { createInput, option, makeDialog, makeForm, makeDiv, makeBtn, handleSubmit} from "./functions.js"
import { Home } from "./home.js"
import { clear } from "./index.js"

function Projects() {

    loadState()
    
    document.body.classList.add("projects")
    const contentBox = document.querySelector("#content")

    /* Your Projects Heading */
    const pageTitle = makeDiv("pageTitle")
    pageTitle.append("Your Projects")
    contentBox.append(pageTitle)

    /* Projects box */
    const projectListBox = makeDiv("projectListBox")
    contentBox.append(projectListBox)
    renderProjects()

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

        renderProjects()
        newProjectForm.reset()
        Dialog.close()
    })

    /* Function to Render projects from myProjects array */
    function renderProjects() {

        projectListBox.replaceChildren()
        loadState()

        myProjects.forEach(project => {
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
                renderProjects()
            })
            projectDiv.addEventListener("click", e => {
                if (e.target === e.currentTarget) {
                    clear()
                    Home(e.currentTarget.dataset.id)
                }
            })

            projectDiv.append(title, deleteBtn)
            projectListBox.append(projectDiv)
        })
    }

    /* Function to Remove Projects from Data */
    function removeProject(projectId) {
        
        loadState()
        const removeIndex = myProjects.findIndex(Project => Project.id == projectId)

        if ((allProjects[projectId].length) > 0) {
            const choice = prompt(`This Project has ${allProjects[projectId].length} tasks. Do you want to delete it? (y/n)`)
            
            if (choice === "y") {
                myProjects.splice(removeIndex, 1)
                delete allProjects[projectId]
            } else {
                return
            } 
        } else {
            myProjects.splice(removeIndex, 1)
            delete allProjects[projectId]
        } 
        updateState()
    }

    renderProjects()/* Render the default project on opening */
}

export { Projects }