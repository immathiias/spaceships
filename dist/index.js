const form = document.getElementById("formSpaceship");
function addFormSpaceship() {
    form.style.display = "grid";
    document.getElementById("division").style.display = "block";
    document.getElementById("buttonAdd").style.display = "none";
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Nome:";
    nameLabel.htmlFor = "name";
    nameLabel.classList.add("form-label");
    form.appendChild(nameLabel);
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "nameSpaceship";
    nameInput.name = "name";
    nameInput.classList.add("form-input");
    form.appendChild(nameInput);
    const pilotLabel = document.createElement("label");
    pilotLabel.textContent = "Piloto:";
    pilotLabel.htmlFor = "pilot";
    pilotLabel.classList.add("form-label");
    form.appendChild(pilotLabel);
    const pilotInput = document.createElement("input");
    pilotInput.type = "text";
    pilotInput.id = "pilotSpaceship";
    pilotInput.name = "pilot";
    pilotInput.classList.add("form-input");
    form.appendChild(pilotInput);
    const maxCrewLabel = document.createElement("label");
    maxCrewLabel.textContent = "Máximo de tripulantes:";
    maxCrewLabel.htmlFor = "maxCrew";
    maxCrewLabel.classList.add("form-label");
    form.appendChild(maxCrewLabel);
    const maxCrewInput = document.createElement("input");
    maxCrewInput.type = "number";
    maxCrewInput.id = "maxCrewSpaceship";
    maxCrewInput.name = "maxCrew";
    maxCrewInput.classList.add("form-input");
    form.appendChild(maxCrewInput);
    const btn = document.createElement("button");
    btn.type = "submit";
    btn.textContent = "Criar";
    btn.classList.add("form-btn");
    form.appendChild(btn);
}
function removeFormSpaceship() {
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("buttonAdd").style.display = "block";
    document.getElementById("division").style.display = "none";
    form.style.display = "none";
});
function createSpaceship(name, pilot, crewLimit, crew, inMission) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    alert(`A nave ${spaceship.name} comandada pelo piloto ${spaceship.pilot} criada e está pronta para ser enviada a uma missão!`);
    return spaceship;
}
// const spaceshipName = prompt('Insira o nome da nave:')
// const spaceshipPilot = prompt('Insira o nome do piloto:')
// const spaceshipCrewLimit = prompt('Insira o limite de tripulaantes da nave:')
