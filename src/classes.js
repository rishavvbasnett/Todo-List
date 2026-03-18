const allTodos = []  /*Store all Todos*/
const allProjects = { } /*Store all Projects */
const projectIds = []    /* all Project ids that exist */

/* the TODO CLASS */
class Todo {
    constructor(title, description, dueDate, priority, completed, projectId) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.completed = completed
        this.projectId = projectId

        /* add each todo to the all TODOs array */
        allTodos.push(this)
    }
}

/*The PROJECT CLASS */
class Project {
    constructor(title, id) {
        this.title = title
        this.id = id
    }
}

/* function to assign todos to respective projects */
function assign2Projects(todoArray) {
    todoArray.forEach(todo => {
        if (!projectIds.includes(todo.projectId)) {
            projectIds.push(todo.projectId) /*  Keep track of project Ids */
            allProjects[todo.projectId] = []
        }
        allProjects[todo.projectId].push(todo)
    })
}

export { Todo, Project, assign2Projects, allProjects, allTodos }