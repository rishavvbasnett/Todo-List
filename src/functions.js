
/* function to make DIVS */
function makeDiv(className) {
    const myDiv = document.createElement("div")
        myDiv.classList.add(className)
    return myDiv
}

/* function to make BUTTONS */
function makeBtn(className, textContent) {
    const myBtn = document.createElement("button")
        myBtn.classList.add(className)
        myBtn.textContent = textContent
    return myBtn
}

/* function to handle submit events */
function handleSubmit(form) {
    const formData = new FormData(form)
    return Object.fromEntries(formData)
}

/* function to make INPUT ELEMENTS with properties ready to use */
function createInput(type="text", placeholder, required, id, name) {
    const input = document.createElement("input")
        input.type = type
        input.placeholder = placeholder
        input.required = required
        input.id = id
        input.name = name
    return input
}

/* function to make OPTIONS FOR SELECT ELEMENTS */
function option(parent, value, text) {
    const option = document.createElement("option")
        option.value = value
        option.text = text
        parent.append(option)
    return option
}

/* function to make A DIALOG BOX*/
function makeDialog(type) {
    const Dialog = document.createElement("dialog")
        Dialog.classList.add(type)
        document.body.append(Dialog)
    return Dialog
}

/* Function to Make FORM */
function makeForm(parent, type) {
    const form = document.createElement("form")
        form.classList.add(type)

    /* Title */
    const taskTitle = createInput("text", "Title", true, "taskTitle", "taskTitle")
    /* DESCRIPTION */
    const description = createInput("text", "Description", true, "description", "description")
    /* DUE DATE */
    const dueDate = createInput("date", "", true, "dueDate", "dueDate")
    /* PRIORITY */
    const priority = document.createElement("select")
        priority.id = "priority"
        priority.name = "priority"
            const option1 = option(priority, "low", "Low")
            const option2 = option(priority, "moderate", "Moderate")
            const option3 = option(priority, "high", "High")
            const option4 = option(priority, "veryhigh", "Very High")
            const option5 = option(priority, "urgent", "Urgent")
    /* ADD button */
    const addBtn = makeBtn("addBtn", "Add")
    /* Back button */
    const backBtn = makeBtn("backBtn", "Back")
        backBtn.type = "reset"
        backBtn.addEventListener("click", e=> {
            parent.close()
        })
    
    form.append(taskTitle, description, dueDate, priority, addBtn, backBtn)
    parent.append(form)
    return form
} 

export { createInput, option, makeDialog, makeForm, makeDiv, makeBtn, handleSubmit}