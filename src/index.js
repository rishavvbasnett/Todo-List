import "./reset.css"
import "./styles.css"

import { Todo, Project, assign2Projects, allProjects, allTodos } from "./classes.js"
import { Home } from "./home.js"
import { allTaskObjects } from "./home.js"

Home()

const t1 = new Todo("study JS", "practice js", "03/17/2026", "Urgent", true, 0)
const t2 = new Todo("study HTML", "HTML practice", "03/18/2026", "High", true, 0)
const t3 = new Todo("learn CSS Grid", "build layout", "03/19/2026", "Medium", false, 1)
const t4 = new Todo("fix bugs", "debug todo app", "03/20/2026", "Urgent", false, 1)
const t5 = new Todo("read docs", "webpack docs", "03/21/2026", "Low", false, 2)
const t6 = new Todo("refactor code", "clean structure", "03/22/2026", "High", false, 2)
const t7 = new Todo("build feature", "add project filter", "03/23/2026", "High", false, 1)
const t8 = new Todo("practice Git", "branch + merge", "03/24/2026", "Medium", true, 0)
const t9 = new Todo("UI polish", "improve styling", "03/25/2026", "Low", false, 2)
const t10 = new Todo("deploy app", "gh-pages setup", "03/26/2026", "Urgent", false, 3)

assign2Projects(allTodos)

