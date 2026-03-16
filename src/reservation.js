import "./reset.css"

const Reservation = () => {
    /* DOM */
    const contentBox = document.querySelector("#content")
        contentBox.style.display = "flex"
        contentBox.style.flexDirection = "column"
        contentBox.style.gap = "clamp(1rem, 3vh, 40px)"
        contentBox.style.paddingTop = "clamp(1rem, 4vh, 40px)"
        contentBox.style.paddingBottom = "1rem"

    const heading = document.createElement("h2")
        heading.id = "contentHeading"
        heading.style.textAlign = "center"
        heading.style.letterSpacing = "3px"
        heading.textContent = "Reserve a Table"
        heading.style.color = "rgb(152, 96, 13)"
        heading.style.textShadow = "0.5px 0.6px 0.7px black"
        heading.style.fontSize = "1.8rem"
        heading.style.lineHeight = "1"
        heading.style.fontFamily = '"logoFont", system-ui, "Segoe UI", Roboto, sans-serif'


    /* The main form element */
    const formBox = document.createElement("form")
        formBox.id = "reserveForm"

    /* Name */
    const labelName = document.createElement("label")
        labelName.id = "labelName"
        labelName.htmlFor = "name"
        labelName.append("Full Name: ")
    const inputName = document.createElement("input")
        inputName.id = "name"
        inputName.name = "name"
        inputName.type = "text"
    /* Phone */
    const labelPhone = document.createElement("label")
        labelPhone.id = "labelPhone"
        labelPhone.htmlFor = "phone"
        labelPhone.append("Phone: ")
    const inputPhone = document.createElement("input")
        inputPhone.id = "phone"
        inputPhone.name = "phone"
        inputPhone.type = "number"
    /* Date */
        const labelDate = document.createElement("label")
        labelDate.id = "labelDate"
        labelDate.htmlFor = "date"
        labelDate.append("Date: ")
    const inputDate = document.createElement("input")
        inputDate.id = "date"
        inputDate.name = "date"
        inputDate.type = "date"
    /* Time */
    const labelTime = document.createElement("label")
        labelTime.id = "labelTime"
        labelTime.htmlFor = "time"
        labelTime.append("Time: ")
    const inputTime = document.createElement("input")
        inputTime.id = "time"
        inputTime.name = "time"
        inputTime.type = "time"
        inputTime.min = "10:00"
        inputTime.max = "22:00"
    /* Party Size */
    const labelParty = document.createElement("label")
        labelParty.id = "labelParty"
        labelParty.htmlFor = "party"
        labelParty.append("Party Size: ")
    const inputParty = document.createElement("input")
        inputParty.id = "party"
        inputParty.name = "party"
        inputParty.type = "number"
    /* Reserve Button */
    const reserveBtn = document.createElement("button")
        reserveBtn.id = "reserveBtn"
        reserveBtn.append("Reserve")
        reserveBtn.addEventListener("click", e => {
            alert("!!!!Homemade food are the best!!!!")
        })

    /* Add all labels and inputs to Form element */
    formBox.append(labelName, inputName, labelPhone, inputPhone, labelDate, inputDate, labelTime, inputTime, labelParty, inputParty, reserveBtn)

    contentBox.append(heading, formBox)
}



export { Reservation }