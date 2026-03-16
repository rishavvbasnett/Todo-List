import "./reset.css"
/* Appetizers Images */
import springRolls from "./images/Appetizers/springRolls.png"
import tomYum from "./images/Appetizers/tomYum.png"
import calamari from "./images/Appetizers/calamari.png"
import dumplings from "./images/Appetizers/dumplings.png"
/* Entrees */
import padThai from "./images/Entrees/PadThai.png"
import drunkenNoodles from "./images/Entrees/DrunkenNoodles.png"
import penangCurry from "./images/Entrees/PenangCurry.png"
import seafoodFeast from "./images/Entrees/SeaFoodFeast.png"



const Menu = () => {
    const contentBox = document.querySelector("#content")
    contentBox.style.display = "flex"
    contentBox.style.flexDirection = "column"
    contentBox.style.paddingTop = "1rem"
    contentBox.style.gap = "3rem"

    const appetizerBox = document.createElement("div")
    appetizerBox.style.display = "flex"
    appetizerBox.style.flexDirection = "column"
    appetizerBox.style.gap = "2rem"

    const headerApps = document.createElement("h2")
    headerApps.style.margin = "0"
    headerApps.style.padding = "0"
    headerApps.id = "contentHeading"
    headerApps.style.textAlign = "center"
    headerApps.style.letterSpacing = "3px"
    headerApps.textContent = "Appetizers"
    headerApps.style.color = "rgb(152, 96, 13)"
    headerApps.style.textShadow = "0.5px 0.6px 0.7px black"
    headerApps.style.fontSize = "1.8rem"
    headerApps.style.fontFamily = '"logoFont", system-ui, "Segoe UI", Roboto, sans-serif'

    const innerAppsBox = document.createElement("div")
    innerAppsBox.id = "AppsBox"
    innerAppsBox.style.display = "grid"
    innerAppsBox.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 320px)"
    innerAppsBox.style.gap = "3rem"
    innerAppsBox.style.justifyContent = "center"

    /* pictures for food itemts */
    const pic1 = document.createElement("div")
        pic1.style.minHeight = "fit-content"
        pic1.style.border = "3px solid black"
        pic1.style.borderRadius = "10px"
        pic1.style.paddingBottom = "0.6rem"
        pic1.style.display = "flex"
        pic1.style.flexDirection = "column"
        pic1.style.gap = "5px"
        pic1.style.alignItems = "center"
        pic1.style.boxShadow = "4px 4px 5px rgb(82, 76, 60)"

        const SpringRolls = document.createElement("img")
        SpringRolls.src = springRolls
        SpringRolls.style.minHeight = "200px"
        SpringRolls.style.minWidth = "200px"
        SpringRolls.style.borderRadius = "8px 8px 0 0"
        SpringRolls.style.borderBottom = "2px solid black"

        const pic1Title = document.createElement("p")
        pic1Title.append("Spring Rolls - $10")
        pic1Title.style.color = "rgb(91, 67, 2)"
        pic1Title.style.fontWeight = "bold"
        pic1Title.style.fontSize = "1.4rem"


    const pic2 = document.createElement("div")
        pic2.style.minHeight = "fit-content"
        pic2.style.border = "3px solid black"
        pic2.style.borderRadius = "10px"
        pic2.style.paddingBottom = "0.6rem"
        pic2.style.display = "flex"
        pic2.style.flexDirection = "column"
        pic2.style.gap = "5px"
        pic2.style.alignItems = "center"
        pic2.style.boxShadow = "4px 4px 5px rgb(82, 76, 60)"

        const TomYum = document.createElement("img")
        TomYum.src = tomYum
        TomYum.style.minHeight = "200px"
        TomYum.style.minWidth = "200px"
        TomYum.style.borderRadius = "10px"
        TomYum.style.borderRadius = "8px 8px 0 0"
        TomYum.style.borderBottom = "2px solid black"

        const pic2Title = document.createElement("p")
        pic2Title.append("Tom Yum - $12")
        pic2Title.style.color = "rgb(91, 67, 2)"
        pic2Title.style.fontWeight = "bold"
        pic2Title.style.fontSize = "1.4rem"


    const pic3 = document.createElement("div")
        pic3.style.minHeight = "fit-content"
        pic3.style.border = "3px solid black"
        pic3.style.borderRadius = "10px"
        pic3.style.paddingBottom = "0.6rem"
        pic3.style.display = "flex"
        pic3.style.flexDirection = "column"
        pic3.style.gap = "5px"
        pic3.style.alignItems = "center"
        pic3.style.boxShadow = "4px 4px 5px rgb(82, 76, 60)"

        const Calamari = document.createElement("img")
        Calamari.src = calamari
        Calamari.style.minHeight = "200px"
        Calamari.style.minWidth = "200px"
        Calamari.style.borderRadius = "10px"
        Calamari.style.borderRadius = "8px 8px 0 0"
        Calamari.style.borderBottom = "2px solid black"

        const pic3Title = document.createElement("p")
        pic3Title.append("Calamari - $10")
        pic3Title.style.color = "rgb(91, 67, 2)"
        pic3Title.style.fontWeight = "bold"
        pic3Title.style.fontSize = "1.4rem"


    const pic4 = document.createElement("div")
        pic4.style.minHeight = "fit-content"
        pic4.style.border = "3px solid black"
        pic4.style.borderRadius = "10px"
        pic4.style.paddingBottom = "0.6rem"
        pic4.style.display = "flex"
        pic4.style.flexDirection = "column"
        pic4.style.gap = "5px"
        pic4.style.alignItems = "center"
        pic4.style.boxShadow = "4px 4px 5px rgb(82, 76, 60)"

        const Dumplings = document.createElement("img")
        Dumplings.src = dumplings
        Dumplings.style.minHeight = "200px"
        Dumplings.style.minWidth = "200px"
        Dumplings.style.borderRadius = "8px 8px 0 0"
        Dumplings.style.borderBottom = "2px solid black"

        const pic4Title = document.createElement("p")
        pic4Title.append("Dumplings - $10")
        pic4Title.style.color = "rgb(91, 67, 2)"
        pic4Title.style.fontWeight = "bold"
        pic4Title.style.fontSize = "1.4rem"


    pic1.append(SpringRolls)
    pic2.append(TomYum)
    pic3.append(Calamari)
    pic4.append(Dumplings)

    pic1.append(pic1Title)
    pic2.append(pic2Title)
    pic3.append(pic3Title)
    pic4.append(pic4Title)

    innerAppsBox.append(pic1, pic2, pic3, pic4)
    appetizerBox.append(headerApps, innerAppsBox)
    contentBox.append(appetizerBox)


/* Entree Menu from here */

    const entreBox = document.createElement("div")
    entreBox.style.display = "flex"
    entreBox.style.flexDirection = "column"
    entreBox.style.gap = "3rem"

    const headerEntre = document.createElement("h2")
        headerEntre.style.margin = "0"
        headerEntre.style.padding = "0"
        headerEntre.id = "contentHeading"
        headerEntre.style.textAlign = "center"
        headerEntre.style.letterSpacing = "3px"
        headerEntre.textContent = "Entrée"
        headerEntre.style.color = "rgb(152, 96, 13)"
        headerEntre.style.textShadow = "0.5px 0.6px 0.7px black"
        headerEntre.style.fontSize = "1.8rem"
        headerEntre.style.fontFamily = '"logoFont", system-ui, "Segoe UI", Roboto, sans-serif'

    const innerEntreBox = document.createElement("div")
        innerEntreBox.id = "Entree-Box"
        innerEntreBox.style.display = "grid"
        innerEntreBox.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 320px))"
        innerEntreBox.style.gap = "3rem"
        innerEntreBox.style.justifyContent = "center"

    const p1 = document.createElement("div")
        p1.style.minHeight = "fit-content"
        p1.style.border = "3px solid black"
        p1.style.borderRadius = "10px"
        p1.style.paddingBottom = "0.6rem"
        p1.style.display = "flex"
        p1.style.flexDirection = "column"
        p1.style.gap = "5px"
        p1.style.alignItems = "center"
        p1.style.boxShadow = "4px 4px 5px rgb(82, 76, 60)"

        const PadThai = document.createElement("img")
        PadThai.src = padThai
        PadThai.style.minHeight = "200px"
        PadThai.style.minWidth = "200px"
        PadThai.style.borderRadius = "8px 8px 0 0"
        PadThai.style.borderBottom = "2px solid black"

        const p1Title = document.createElement("p")
        p1Title.append("Pad Thai - $23")
        p1Title.style.color = "rgb(91, 67, 2)"
        p1Title.style.fontWeight = "bold"
        p1Title.style.fontSize = "1.4rem"

    const p2 = document.createElement("div")
        p2.style.minHeight = "fit-content"
        p2.style.border = "3px solid black"
        p2.style.borderRadius = "10px"
        p2.style.paddingBottom = "0.6rem"
        p2.style.display = "flex"
        p2.style.flexDirection = "column"
        p2.style.gap = "5px"
        p2.style.alignItems = "center"
        p2.style.boxShadow = "4px 4px 5px rgb(82, 76, 60)"

        const DrunkenNoodles = document.createElement("img")
        DrunkenNoodles.src = drunkenNoodles
        DrunkenNoodles.style.minHeight = "200px"
        DrunkenNoodles.style.minWidth = "200px"
        DrunkenNoodles.style.borderRadius = "8px 8px 0 0"
        DrunkenNoodles.style.borderBottom = "2px solid black"

        const p2Title = document.createElement("p")
        p2Title.append("Drunken Noodles - $22")
        p2Title.style.color = "rgb(91, 67, 2)"
        p2Title.style.fontWeight = "bold"
        p2Title.style.fontSize = "1.4rem"

    const p3 = document.createElement("div")
        p3.style.minHeight = "fit-content"
        p3.style.border = "3px solid black"
        p3.style.borderRadius = "10px"
        p3.style.paddingBottom = "0.6rem"
        p3.style.display = "flex"
        p3.style.flexDirection = "column"
        p3.style.gap = "5px"
        p3.style.alignItems = "center"
        p3.style.boxShadow = "4px 4px 5px rgb(82, 76, 60)"

        const PenangCurry = document.createElement("img")
        PenangCurry.src = penangCurry
        PenangCurry.style.minHeight = "200px"
        PenangCurry.style.minWidth = "200px"
        PenangCurry.style.borderRadius = "8px 8px 0 0"
        PenangCurry.style.borderBottom = "2px solid black"

        const p3Title = document.createElement("p")
        p3Title.append("Penang Curry - $19")
        p3Title.style.color = "rgb(91, 67, 2)"
        p3Title.style.fontWeight = "bold"
        p3Title.style.fontSize = "1.4rem"

    const p4 = document.createElement("div")
        p4.style.minHeight = "fit-content"
        p4.style.border = "3px solid black"
        p4.style.borderRadius = "10px"
        p4.style.paddingBottom = "0.6rem"
        p4.style.display = "flex"
        p4.style.flexDirection = "column"
        p4.style.gap = "5px"
        p4.style.alignItems = "center"
        p4.style.boxShadow = "4px 4px 5px rgb(82, 76, 60)"

        const SeafoodFeast = document.createElement("img")
        SeafoodFeast.src = seafoodFeast
        SeafoodFeast.style.minHeight = "220px"
        SeafoodFeast.style.minWidth = "200px"
        SeafoodFeast.style.borderRadius = "8px 8px 0 0"
        SeafoodFeast.style.borderBottom = "2px solid black"

        const p4Title = document.createElement("p")
        p4Title.append("Seafood Feast - $35")
        p4Title.style.color = "rgb(91, 67, 2)"
        p4Title.style.fontWeight = "bold"
        p4Title.style.fontSize = "1.4rem"

    p1.append(PadThai)
    p2.append(DrunkenNoodles)
    p3.append(PenangCurry)
    p4.append(SeafoodFeast)

    p1.append(p1Title)
    p2.append(p2Title)
    p3.append(p3Title)
    p4.append(p4Title)

    innerEntreBox.append(p1, p2, p3, p4)
    entreBox.append(headerEntre, innerEntreBox)
    contentBox.append(entreBox)

    /*Add a box shadow to all the items while hovering over them */
    const AppsItems = document.querySelectorAll("#AppsBox>div")
        AppsItems.forEach(box => {
            box.addEventListener("mouseenter", e => {
                e.target.style.transform = "scale(1.05)"
                e.target.style.boxShadow = "5px 5px 8px black"
            })
            box.addEventListener("mouseleave", e => {
                e.target.style.transform = "scale(1)"
                e.target.style.boxShadow = "4px 4px 5px rgb(82, 76, 60)"
            })
        })

    const EntreeItems = document.querySelectorAll("#Entree-Box>div")
        EntreeItems.forEach(box => {
            box.addEventListener("mouseenter", e => {
                e.target.style.transform = "scale(1.05)"
                e.target.style.boxShadow = "5px 5px 8px black"
            })
            box.addEventListener("mouseleave", e => {
                e.target.style.transform = "scale(1)"
                e.target.style.boxShadow = "4px 4px 5px rgb(82, 76, 60)"
            })
        })
}


export { Menu }