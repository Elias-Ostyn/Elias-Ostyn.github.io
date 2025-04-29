
const tafels = [];

const setup = () => {
    const input = document.getElementById("getal");
    const goButton = document.getElementById("btnGo");
    const output = document.getElementById("output");
    const label = document.querySelector("label");

    label.addEventListener("click", () => {
        input.focus();
    });

    goButton.addEventListener("click", () => {
        const waarde = input.value.trim();
        const getal = parseInt(waarde);

        if (isNaN(getal)) {
            alert("Gelieve een geldig getal in te voeren.");
            return;
        }

        input.value = "";
        tafels.push(getal);
        tekenTafels();
    });
};

const tekenTafels = () => {
    const output = document.getElementById("output");
    verwijderAlleChildren(output);

    tafels.forEach(getal => {
        const tafelDiv = document.createElement("div");
        tafelDiv.className = "tafel";

        const tijd = new Date().toLocaleTimeString();
        const header = document.createElement("h4");
        header.innerText = `Tafel van ${getal} aangemaakt op: ${tijd}`;
        tafelDiv.appendChild(header);

        for (let i = 1; i <= 10; i++) {
            const rij = document.createElement("div");
            rij.innerText = `${getal} x ${i} = ${getal * i}`;
            rij.className = "tafel-rij";
            if (i % 2 === 0) {
                rij.classList.add("even");
            }
            tafelDiv.appendChild(rij);
        }

        output.appendChild(tafelDiv);
    });
};

const verwijderAlleChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};

window.addEventListener("load", setup);
