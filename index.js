const inputName = document.getElementById("name-input")
const addBtn = document.getElementById("add-btn")
const displayName = document.querySelector(".display-random-name")
const generateBtn = document.querySelector(".generate-random-name")

let names = []


addBtn.addEventListener("click", () => {
    names.push(inputName.value)
    console.log(names)

    const addedNameList = document.querySelector(".added-name-list")

    const li = document.createElement("li")
    li.textContent = inputName.value

    addedNameList.appendChild(li)

    inputName.value = ""
})

function generateRandomName() {
    let randomIndex = Math.floor(Math.random() * names.length)
    let randomName = names[randomIndex]
    displayName.innerHTML = randomName
}

generateBtn.addEventListener("click", generateRandomName)

