const inputName = document.getElementById("name-input")
const addBtn = document.getElementById("add-btn")
const displayName = document.querySelector(".display-random-name")
const generateBtn = document.querySelector(".generate-random-name")
const addedNameList = document.querySelector(".added-name-list")

let emojis = ["🎉", "☀️", "👌", "😂", "😊", "😍", "😘", "😒"]
let idcounter = 1
let names = []

addBtn.addEventListener("click", () => {
    const nameValue = inputName.value.trim()
    if (nameValue.length === 0) {
        alert("You must write a valid name")
        return
    }

    // create new name object
    let newName = {
        id: idcounter,
        name: nameValue,
    }
    names.push(newName)
    idcounter++

    console.log(names)
    
    // create <li> item
    const li = document.createElement("li")
    li.dataset.id = newName.id  // store the id in a data attribute
    li.textContent = newName.id + ". "

    // create <span> for name
    const span = document.createElement("span")
    span.textContent = newName.name

    // create delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "❌"
    deleteBtn.style.marginLeft = "10px"

    // assemble the li
    li.appendChild(span)
    li.appendChild(deleteBtn)
    addedNameList.appendChild(li)

    // clear input
    inputName.value = ""

    // delete functionality
    deleteBtn.addEventListener("click", () => {
        // remove li from DOM
        li.remove()
        // remove from names array
        names = names.filter(item => item.id !== newName.id)
        console.log("After deletion:", names)
    })
})

function generateRandomName() {
    if (names.length === 0) {
        displayName.innerHTML = "No names available"
        return
    }
    const randomIndexEmojis = Math.floor(Math.random() * emojis.length)
    const randomEmoji = emojis[randomIndexEmojis]

    let randomIndex = Math.floor(Math.random() * names.length)
    let randomName = names[randomIndex]
    displayName.innerHTML = `${randomName.name} ${randomEmoji}` 
}

generateBtn.addEventListener("click", generateRandomName)

