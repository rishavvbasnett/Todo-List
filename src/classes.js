let allProjects;
let myProjects;

class Todo {
    constructor(title, description, dueDate, priority, completed, projectId) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.completed = completed
        this.projectId = projectId
        this.taskId = Math.floor((Math.random() * 90) + 10)

        /* everytime, update the state from localStorage */
        loadState()
        allProjects[this.projectId].push(this)
        updateState()
    }
}

/*The PROJECT CLASS */
class Project {
    constructor({title, id}) {
        this.title = title
        if (id === 0) {
            this.id = 0
        } else {
            this.id = Math.floor(Math.random() * 90)
        }
        
        loadState()
        allProjects[this.id] = []
        myProjects.push(this)
        updateState()
    }
}

/* function to fetch update exisiting allProjects and myProjects from localStorage */
function loadState() {
    const storedProjects = localStorage.getItem("allProjects")
    const storedMyProjects = localStorage.getItem("myProjects")

    if (!storedProjects && !storedMyProjects) {
        localStorage.clear()
        allProjects = { 0: []}
        /* Make a default project object with id = 0 */
        const defaultProject = new Project({title: "Default List of Todos", id: 0})
        myProjects = []
        updateState()
    } else {
        allProjects = JSON.parse(localStorage.getItem("allProjects"))
        myProjects = JSON.parse(localStorage.getItem("myProjects"))
    }
    
}
/* function to update allProjects and myProjects to localStorage */
function updateState() {
    localStorage.setItem("allProjects", JSON.stringify(allProjects))
    localStorage.setItem("myProjects", JSON.stringify(myProjects))
}

export { Todo, Project, allProjects, myProjects, loadState, updateState }