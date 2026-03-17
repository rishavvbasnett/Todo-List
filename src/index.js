import "./styles.css"

/* store all TODOs */
const allTodos = []

/* a giant root Object that stores all projects and todos */
const allProjects = {

}

/* the TODO class */
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


/* project class to group todos */
class Project {
    constructor(title, todo , id) {
        this.todo = todo
        this.title = title
        this.id = id
    }
}

/* Make a default project to add tasks to the default */
const t1 = new Todo("study JS", "practice js", "03/17/2026", "Urgent", true, 0)
const t2 = new Todo("study HTML", "HTML practice", "03/18/2026", "High", true, 0)
const t3 = new Todo("learn CSS Grid", "build layout", "03/19/2026", "Medium", false, 1)
const t4 = new Todo("fix bugs", "debug todo app", "03/20/2026", "Urgent", false, 1)
const t5 = new Todo("read docs", "webpack docs", "03/21/2026", "Low", false, 2)
const t6 = new Todo("refactor code", "clean structure", "03/22/2026", "High", false, 2)
const t7 = new Todo("build feature", "add project filter", "03/23/2026", "High", false, 1)
const t8 = new Todo("practice Git", "branch + merge", "03/24/2026", "Medium", true, 0)
const t9 = new Todo("UI polish", "improve styling", "03/25/2026", "Low", false, 2)
const t10 = new Todo("deploy app", "gh-pages setup", "03/26/2026", "Urgent", false, 0)
