const setup = () => {
    let btnCheck = document.getElementById("btnCheck");
    btnCheck.addEventListener("click", vervangTekst);
};

const vervangTekst = () => {
    let inputField = document.getElementById("txtInput");
    let oudeZin = inputField.value.trim();

    if (oudeZin === "") {
        alert("Voer een zin in!");
        return;
    }

    let zoekwoord = "de";
    let vervangwoord = "het";

    let woorden = oudeZin.split(" ");
    for (let i = 0; i < woorden.length; i++) {
        if (woorden[i].toLowerCase() === zoekwoord) {
            woorden[i] = vervangwoord;
        }
    }

    let nieuweZin = woorden.join(" ");

    // Weergeven in de HTML
    document.getElementById("oldSentence").textContent = oudeZin;
    document.getElementById("newSentence").textContent = nieuweZin;
};

window.addEventListener("load", setup);
