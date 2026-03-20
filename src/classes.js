const allTodos = []  /*Store all Todos*/
const allProjects = { } /*Store all Projects */
const myProjects = []    /* all Project ids that exist */

/* the TODO CLASS */
class Todo {
    constructor(title, description, dueDate, priority, completed, projectId) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.completed = completed
        this.projectId = projectId
        this.taskId = Math.floor(Math.random()*90)
       
        allTodos.push(this)    /* add each todo to the all TODOs array */
        allProjects[this.projectId].push(this)    /* add this TODO to repective project id */
    }
}

/*The PROJECT CLASS */
class Project {
    constructor(title) {
        this.title = title
        this.id = Math.floor(Math.random()*90)

        myProjects.push(this)   /* Add this project to myProjects list */
        allProjects[this.id] = []   /* Make a property name with the project id */
    }

    changeId(newId) {
        const oldId = this.id
        allProjects[newId] = allProjects[oldId]
        allProjects[newId].forEach(todo => {
            todo.projectId = newId
        })
        delete allProjects[oldId]
        this.id = newId
    }
}

export { Todo, Project, allProjects, allTodos, myProjects }