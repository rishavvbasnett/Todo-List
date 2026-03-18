import "./Home-styles.css"
import { Todo, Project, assign2Projects, allProjects, allTodos } from "./classes.js"
import { createInput, option, makeDialog, makeForm, makeDiv, makeBtn, handleSubmit } from "./functions.js"


function Home() {
    let allTaskObjects = []

    document.body.classList.add("home")
    const contentBox = document.querySelector("#content")
        
    /* PROJECT HEADING div */
    const projectHeading = makeDiv("projectHeading")
        contentBox.append(projectHeading)
    
    /* ToDo list box */
    const todoBox = makeDiv("todoBox")
        contentBox.append(todoBox)

    /* Make a dialogBox and Form for ADD TASK Button */
    const Dialog = makeDialog("NewTask")
    const newTaskForm = makeForm(Dialog, "newTaskForm")
        newTaskForm.addEventListener("submit", e=> {
            e.preventDefault();
            allTaskObjects.push(handleSubmit(newTaskForm))
            console.log(allTaskObjects)
            newTaskForm.reset();
            Dialog.close()
        })
        
    /* Add Task button */
    const addTaskBtn = makeBtn("addTaskBtn", "Add Task")
        contentBox.append(addTaskBtn)

        addTaskBtn.addEventListener("click", e=> {
            Dialog.showModal()
            })
    }
    export { Home }