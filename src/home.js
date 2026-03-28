import { format, parseISO } from "date-fns"
import "./Home-styles.css"
import { Todo, Project, allProjects, myProjects, fetchAllProjects, fetchMyProjects, loadState, updateState } from "./classes.js"
import { createInput, option, makeDialog, makeForm, makeDiv, makeBtn, handleSubmit } from "./functions.js"
import { clear } from "./index.js"

function Home(projectId = 0) {

    loadState()

    document.body.classList.add("home")
    const contentBox = document.querySelector("#content")

    /* PROJECT HEADING div */
    const projectHeading = makeDiv("projectHeading")

    /* Get project title that was clicked */
    const theProject = myProjects.find(project => project.id == projectId)
    projectHeading.textContent = theProject.title
    contentBox.append(projectHeading)

    /* ToDo list box */
    const todoBox = makeDiv("todoBox")
    contentBox.append(todoBox)
    renderTodos()

    /* Make a dialogBox and Form for ADD TASK Button */
    const Dialog = makeDialog("NewTask")

    const newTaskForm = makeForm(Dialog, "newTaskForm")

    /* Input elements for the form */
    const titleInput = newTaskForm.querySelector("#taskTitle")
    const descriptionInput = newTaskForm.querySelector("#description")
    const dueDateInput = newTaskForm.querySelector("#dueDate")
    const priorityInput = newTaskForm.querySelector("#priority")

    let currentTodo = null

    /* Task form submit event */
    newTaskForm.addEventListener("submit", e => {
        e.preventDefault();
        
        if (currentTodo) {
            let todo2Delete = allProjects[currentTodo.projectId].findIndex(todo => todo.taskId == currentTodo.taskId)
            allProjects[currentTodo.projectId].splice(todo2Delete, 1)
            updateState()
        } 
        const task = handleSubmit(newTaskForm)
        const todo = new Todo(task.taskTitle, task.description, task.dueDate, task.priority, false, projectId)
        renderTodos()
        newTaskForm.reset();
        Dialog.close()
    })

    /* Add Task button */
    const addTaskBtn = makeBtn("addTaskBtn", "Add a Task")
    contentBox.append(addTaskBtn)
    addTaskBtn.addEventListener("click", e => {
        Dialog.showModal()
    })

    /* Function to render Todos and display it/ add to the DOM */
    function renderTodos() {

        todoBox.replaceChildren()
        loadState()

        allProjects[projectId].forEach(todo => {

            const taskDiv = makeDiv(todo.taskId)
            taskDiv.dataset.id = todo.taskId
            taskDiv.classList.add("task")

            const title = document.createElement("p")
            title.classList.add("title")
            title.textContent = todo.title

            const dueDate = document.createElement("p")
            dueDate.classList.add("dueDate")
            const dateString = parseISO(todo.dueDate)
            const theDueDate = format(dateString, "MMM dd, yyyy")
            dueDate.textContent = theDueDate

            const priority = document.createElement("p")
            priority.classList.add("priority")

            if (todo.priority === "urgent") {
                taskDiv.classList.add("urgent")
                priority.textContent = "Urgent"
            } else if (todo.priority === "high") {
                taskDiv.classList.add("high")
                priority.textContent = "High"
            } else if (todo.priority === "moderate") {
                taskDiv.classList.add("moderate")
                priority.textContent = "Moderate"
            } else if (todo.priority === "low") {
                taskDiv.classList.add("low")
                priority.textContent = "Low"
            }

            const edit = makeBtn("editBtn", "Edit")
            const remove = makeBtn("doneBtn", "Remove")

            /* Event listener Edit or remove a todo */
            taskDiv.addEventListener("click", e => {
                if ((e.target === e.currentTarget) || (e.target === edit)) {
                    const todo2Edit = allProjects[projectId].find(todo => todo.taskId == taskDiv.dataset.id)
                    currentTodo = todo2Edit

                    titleInput.value = todo2Edit.title
                    descriptionInput.value = todo2Edit.description
                    priorityInput.value = todo2Edit.priority
                    dueDateInput.value = todo2Edit.dueDate

                    Dialog.showModal()

                } else if (e.target === remove) {
                    const delId = taskDiv.dataset.id

                    const delIndex = allProjects[projectId].findIndex(todo => todo.taskId == delId)
                    allProjects[projectId].splice(delIndex, 1)
                    updateState()
                    todoBox.removeChild(taskDiv)
                }
            })

            taskDiv.append(title, dueDate, priority, edit, remove)
            todoBox.append(taskDiv)
        })
    }

}

export { Home }