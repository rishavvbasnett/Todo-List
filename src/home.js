import "./reset.css"
import homepageImg from "./images/homepageImg.jpg"
import { Menu } from "./menu.js"
import { navigate } from "./index.js"

const HomePage = () => {
    const contentBox = document.querySelector("#content")
    const header = document.createElement("h1")
        header.id = "contentHeading"
        header.textContent = "Welcome to Singha Thai"
        header.style.color = "rgb(152, 96, 13)"
        header.style.textShadow = "0.5px 0.6px 0.7px black"
        header.style.fontSize = "2.3rem"
        header.style.fontFamily = '"logoFont", system-ui, "Segoe UI", Roboto, sans-serif'

    const leftBox = document.createElement("div")
        leftBox.classList.add("leftBox")
    const leftText = document.createElement("p")
        leftText.textContent = "At Singha Thai, we are passionate about bringing the authentic flavors of Thailand to your table. Our dishes are carefully crafted to tantalize your taste buds and transport you to the bustling streets of Bangkok. Come and experience the true essence of Thai cuisine with us."
        leftText.style.letterSpacing = "1px"
    const leftBtn = document.createElement("button")
        leftBtn.textContent = "Explore our Menu"

    leftBox.appendChild(leftText)
    leftBox.appendChild(leftBtn)

    /* make the leftBox flex and give gap to seperate buttom and text */
    leftBox.style.paddingRight = "1rem"
    leftBox.style.display = "flex"
    leftBox.style.flexDirection = "column"
    leftBox.style.gap = "2rem"
    leftBox.style.alignItems = "flex-start"

    /* style the text to make it look better */
    leftText.style.color = "rgb(53, 27, 2)"
    leftText.style.fontSize = "1.2rem"
    leftText.style.fontWeight = "500"

    /* Explore our Menu Button styling */
    leftBtn.style.display = "flex"
    leftBtn.style.justifyContent = "center"
    leftBtn.style.alignItems = "center"
    leftBtn.style.fontWeight = "bold"
    leftBtn.style.boxShadow = "2px 3px 5px rgba(163, 155, 142, 0.7)"
    leftBtn.id = "exploreMenu"

    leftBtn.addEventListener("click", () => {
        navigate("menu")
    })

    const rightBox = document.createElement("div")
        rightBox.classList.add("rightBox")
    const rightImg = document.createElement("img")
        rightImg.src = homepageImg
        rightImg.style.borderRadius = "12px"
        rightImg.style.minHeight = "230px"
        rightImg.style.minWidth = "230px"
        rightImg.style.border = "3px solid rgb(87, 44, 3)"

    rightBox.appendChild(rightImg)
    contentBox.appendChild(header)

    contentBox.appendChild(rightBox)
    contentBox.appendChild(leftBox)

    /* Layout and placement with Grid */
    contentBox.style.display = "grid"
    contentBox.style.gridTemplateRows = "auto minmax(400px, 1fr)"
    contentBox.style.gridTemplateColumns = "1fr 1fr"

    contentBox.style.rowGap = "2rem"
    contentBox.style.columnGap = "2rem"

    header.style.gridArea = "1/1/1/3" /*Let the header take 2 columns */
    rightBox.style.gridArea = "2/2/3/3"
}

export { HomePage }