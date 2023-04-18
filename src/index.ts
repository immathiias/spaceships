const formDiv = document.getElementById("addSpaceship");
const form = document.getElementById("formSpaceship");

let spaceshipList = [];
let crew = [];

function createLabel(htmlFor: string, text: string) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    label.classList.add('form-label')

    return label
}

function createInput(id: string, name: string, type: string, placeholder?: string) {
    const input = document.createElement('input')
    input.classList.add('form-input')
    input.id = id
    input.name = name
    input.type = type
    input.placeholder = placeholder
    input.required = true

    return input
}

function setInputValue(id: string, value: string) {
    const inputValue = document.querySelector<HTMLInputElement>(`#${id}`)

    inputValue.value = value

    return inputValue
}

function setInMission(id: number, mission: boolean) {
    const space = spaceshipList.filter((s) => s.id === id)[0]
    space.inMission = mission

    const inMission = document.getElementById(`mission-${id}`)
    inMission.innerText = `Em missão: ${getInMission(id) === true ? "Sim" : "Não"}`

}

function getInputValue(id: string) {
    const inputValue: string = document.querySelector<HTMLInputElement>(`#${id}`).value;

    return inputValue;
}

function getInMission(id: number) {
    let inMissionSpaceship = false
    const space = spaceshipList.filter((s) => s.id === id)[0]

    space.inMission === true ? inMissionSpaceship = true : inMissionSpaceship = false

    if (inMissionSpaceship) {
        return true
    } else {
        return false
    }
}

function addCrewMember(spaceship: { id: number, crewLimit: number }) {
    const name = prompt("Qual o nome do tripulante?")
    const age = parseFloat(prompt("Qual a idade do tripulante?"))

    console.log(crew)

    const crewMember = {
        id: crew.length,
        name,
        age
    }

    const member = spaceshipList.filter((s) => s.id === spaceship.id)[0]

    if (crew.length > spaceship.crewLimit) {
        alert("Limite de tripulantes atingido!")
        return
    }

    crew.push(crewMember)
    spaceshipList[member.id].crew.push(crewMember)
    addCrewList(spaceship, crewMember)
}


function addFormSpaceship() {

    formDiv.style.display = "grid"
    document.getElementById("buttonAdd").style.display = "none"

    if (form.hasChildNodes()) {
        return;
    }

    const nameLabel = createLabel("name", "Nome da nave:")
    form.appendChild(nameLabel)

    const nameInput = createInput("nameSpaceship", "name", "text", "Ex: Millenium Falcon")
    form.appendChild(nameInput)

    const pilotLabel = createLabel("pilot", "Piloto:")
    form.appendChild(pilotLabel)

    const pilotInput = createInput("pilotSpaceship", "pilot", "text", "Ex: Han Solo")
    form.appendChild(pilotInput)

    const maxCrewLabel = createLabel("maxCrew", "Máximo de tripulantes:")
    form.appendChild(maxCrewLabel)

    const maxCrewInput = createInput("maxCrewSpaceship", "maxCrew", "number", "Ex: 4")
    form.appendChild(maxCrewInput)

    const btn = document.createElement("button")
    btn.type = "submit"
    btn.textContent = "Criar"
    btn.classList.add("btn")
    form.appendChild(btn)

}

function addListSpaceship(spaceship: { id: number, name: string, pilot: string, crewLimit: number }) {
    const ul = document.getElementById("spaceshipsList")

    const li = document.createElement("li")
    li.classList.add("list-spaces")
    li.id = `spaceship-${spaceship.id}`

    const name = document.createElement("h4")
    name.innerText = `Nave: ${spaceship.name}`

    const pilot = document.createElement("h4")
    pilot.innerText = `Piloto: ${spaceship.pilot}`

    const maxCrew = document.createElement("h4")
    maxCrew.innerText = `Máximo de tripulantes: ${spaceship.crewLimit}`

    const inMission = document.createElement("h4")
    inMission.innerText = `Em missão: ${getInMission(spaceship.id) === true ? "Sim" : "Não"}`
    inMission.id = `mission-${spaceship.id}`

    const crew = document.createElement("h4")
    crew.innerText = "Lista de tripulantes:"

    const crewList = document.createElement("ul")
    crewList.id = `crewlist-${spaceship.id}`
    crewList.classList.add("crew-list")

    const removeButton = document.createElement("button")
    removeButton.innerText = "Remover"
    removeButton.classList.add("btn")
    removeButton.addEventListener(("click"), () => removeSpaceship(spaceship))

    const addCrew = document.createElement("button")
    addCrew.innerText = "Adicionar tripulante"
    addCrew.classList.add("btn")
    addCrew.addEventListener(("click"), () => addCrewMember(spaceship))

    const addInMission = document.createElement("button")
    addInMission.innerText = "Iniciar missão"
    addInMission.classList.add("btn")
    addInMission.addEventListener("click", () => {
        if (getInMission(spaceship.id) === false) {
            setInMission(spaceship.id, true)
        } else {
            alert("Missão já foi iniciada!")
        }
    })

    li.append(name, pilot, maxCrew, inMission, crew, crewList, removeButton, addCrew, addInMission)
    ul.appendChild(li)

}

function addCrewList(spaceship: { id: number }, member: { id: number, name: string, age: number }) {
    const ul = document.getElementById(`crewlist-${spaceship.id}`)

    const li = document.createElement("li")
    li.classList.add("crew-members")
    li.id = `crew-${member.id}`

    const name = document.createElement("p")
    name.innerText = `${member.name} |`

    const age = document.createElement("p")
    age.innerText = `${member.age} anos`

    li.append(name, age)
    ul.appendChild(li)
}


function removeSpaceship(spaceship: { id: number; name?: string; pilot?: string; crewLimit?: number }) {
    if (spaceshipList.includes(spaceship)) {

        spaceshipList.splice(spaceshipList.indexOf(spaceship), 1)

        const ul = document.getElementById("spaceshipsList")
        const spaceScreen = document.querySelector(`#spaceship-${spaceship.id}`)

        ul.removeChild(spaceScreen)
        return;
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = getInputValue("nameSpaceship")
    setInputValue("nameSpaceship", "")
    const pilot = getInputValue("pilotSpaceship")
    setInputValue("pilotSpaceship", "")
    const maxCrew = Number(getInputValue("maxCrewSpaceship"))
    setInputValue("maxCrewSpaceship", "")

    createSpaceship(name, pilot, maxCrew)

    document.getElementById("buttonAdd").style.display = "block"
    formDiv.style.display = "none"
})

function createSpaceship(name: string, pilot: string, crewLimit: number, crew?: string[], inMission?: boolean) {
    const spaceship = {
        id: spaceshipList.length,
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }

    spaceshipList.push(spaceship)
    addListSpaceship(spaceship)
    alert(`A nave ${spaceship.name} comandada pelo piloto ${spaceship.pilot} foi criada e está pronta para ser enviada a uma missão!`)
    return spaceship;
}

// const spaceshipName = prompt('Insira o nome da nave:')
// const spaceshipPilot = prompt('Insira o nome do piloto:')
// const spaceshipCrewLimit = prompt('Insira o limite de tripulaantes da nave:')