const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    // hier ga je de actie van de sliders gaan opnemen en laten veranderen
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    // Event listener voor de Save knop
    document.getElementById("button").addEventListener("click", saveColor);
}

const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatch = document.getElementById('swatch');
    swatch.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

const saveColor = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let savedColorsContainer = document.getElementById("savedColors");

    let colorBox = document.createElement("div");
    colorBox.classList.add("savedColor");
    colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "✖";
    deleteButton.classList.add("deleteBtn");
    deleteButton.addEventListener("click", () => {
        savedColorsContainer.removeChild(colorBox);
    });

    colorBox.appendChild(deleteButton);
    savedColorsContainer.appendChild(colorBox);
}

window.addEventListener("load", setup);
