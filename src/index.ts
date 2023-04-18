const formDiv = document.getElementById("addSpaceship");
const form = document.getElementById("formSpaceship");

let spaceshipList = [];

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

function getInputValue(id: string) {
    const inputValue: string = document.querySelector<HTMLInputElement>(`#${id}`).value;

    return inputValue;
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

function addListSpaceship(spaceship: {id: number, name: string, pilot: string, crewLimit: number}) {
    const ul = document.getElementById("spaceshipsList")

    const li = document.createElement("li")
    li.classList.add("list-spaces")

    const name = document.createElement("h4")
    name.innerText = `Nave: ${spaceship.name}`

    const pilot = document.createElement("h4")
    pilot.innerText = `Piloto: ${spaceship.pilot}`

    const maxCrew = document.createElement("h4")
    maxCrew.innerText = `Máximo de tripulantes: ${spaceship.crewLimit}`

    const inMission = document.createElement("h4")
    inMission.innerText =  "Em missão: Não"

    const crew = document.createElement("h4")
    crew.innerText =  "Lista de tripulantes:"
    
    const crewList = document.createElement("ul")
    crewList.id = `spaceship-${spaceship.id}`

    li.append(name, pilot, maxCrew, inMission, crew, crewList)
    ul.appendChild(li)

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