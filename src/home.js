import "./Home-styles.css"
import { Todo, Project, myProjects, allProjects, allTodos } from "./classes.js"
import { createInput, option, makeDialog, makeForm, makeDiv, makeBtn, handleSubmit } from "./functions.js"

function Home(projectId = 0) {

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
        const task = handleSubmit(newTaskForm)

        if (currentTodo) {
            currentTodo.title = task.taskTitle
            currentTodo.description = task.description
            currentTodo.priority = task.priority
            currentTodo.dueDate = task.dueDate
            updateTodoBox(currentTodo)
            Dialog.close()
        } else {
            const todo = new Todo(task.taskTitle, task.description, task.dueDate, task.priority, false, projectId)
            renderTodo(todo)
            newTaskForm.reset();
            Dialog.close()
        }
    })

    /* Add Task button */
    const addTaskBtn = makeBtn("addTaskBtn", "Add a Task")
    contentBox.append(addTaskBtn)
    addTaskBtn.addEventListener("click", e => {
        Dialog.showModal()
    })

    /* Function to render Todos and display it/ add to the DOM */
    function renderTodo(todo) {
        const taskDiv = makeDiv(todo.taskId)
        taskDiv.dataset.id = todo.taskId
        taskDiv.classList.add("task")

        const title = document.createElement("p")
        title.classList.add("title")
        title.textContent = todo.title

        const dueDate = document.createElement("p")
        dueDate.classList.add("dueDate")
        dueDate.textContent = todo.dueDate

        const priority = document.createElement("p")
        priority.classList.add("priority")
        priority.textContent = todo.priority
        if (todo.priority === "urgent") {
            taskDiv.classList.add("urgent")
        } else if (todo.priority === "high") {
            taskDiv.classList.add("high")
        } else if (todo.priority === "moderate") {
            taskDiv.classList.add("moderate")
        } else if (todo.priority === "low") {
            taskDiv.classList.add("low")
        }

        const expand = makeBtn("editBtn", "Expand")
        const done = makeBtn("doneBtn", "Done")

        /* Event listener Edit or remove a todo */
        taskDiv.addEventListener("click", e => {
            if ((e.target === e.currentTarget) || (e.target === expand)) {
                const todo2Edit = allTodos.find(todo => todo.taskId == taskDiv.dataset.id)
                currentTodo = todo2Edit

                titleInput.value = todo2Edit.title
                descriptionInput.value = todo2Edit.description
                priorityInput.value = todo2Edit.priority
                dueDateInput.value = todo2Edit.dueDate

                Dialog.showModal()

            } else if (e.target === done) {
                const delId = taskDiv.dataset.id
                const delIndex = allTodos.findIndex(todo => todo.taskId == delId)
                allTodos.splice(delIndex, 1)
                allProjects[projectId].splice(delIndex, 1)
                todoBox.removeChild(taskDiv)
            }
        })

        taskDiv.append(title, dueDate, priority, expand, done)
        todoBox.append(taskDiv)
    }

    /* Function to update the Todo box after editing a todo */
    function updateTodoBox(todo) {
        const todoDiv = document.querySelector(`[data-id="${todo.taskId}"]`)
        const title = todoDiv.querySelector(".title")
        const dueDate = todoDiv.querySelector(".dueDate")
        const priority = todoDiv.querySelector(".priority")


        title.textContent = todo.title
        dueDate.textContent = todo.dueDate
    }

}

export { Home }