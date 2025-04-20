let personen = [];

// Event listener (btnBewaar click)
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    let lstPersonen = document.getElementById("lstPersonen");
    let selectedIndex = lstPersonen.selectedIndex;

    // Valideer invoer
    valideer();
    let elements = document.getElementsByClassName("invalid");
    if (elements.length === 0) {
        // Haal waarden op uit de invoervelden
        let persoon = {};
        vulOp(persoon);

        if (selectedIndex === -1) {
            // Nieuw persoon toevoegen
            personen.push(persoon);
            let option = new Option(`${persoon.voornaam} ${persoon.familienaam}`, personen.length - 1);
            lstPersonen.add(option);
        } else {
            persoonbijwerken(persoon, selectedIndex);
        }

        console.log("Persoon opgeslagen:", persoon);
        bewerkNieuwePersoon();

        console.log(persoon);
    }
};

const persoonbijwerken = (persoon, selectedIndex) => {
    let lstPersonen = document.getElementById("lstPersonen");
    personen[selectedIndex] = persoon;
    lstPersonen.options[selectedIndex].text = `${persoon.voornaam} ${persoon.familienaam}`;
};

const vulOp = (persoon) => {
    persoon.voornaam = document.getElementById("txtVoornaam").value.trim();
    persoon.familienaam = document.getElementById("txtFamilienaam").value.trim();
    persoon.geboorteDatum = document.getElementById("txtGeboorteDatum").value.trim();
    persoon.email = document.getElementById("txtEmail").value.trim();
    persoon.aantalKinderen = document.getElementById("txtAantalKinderen").value.trim();
};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    document.getElementById("lstPersonen").selectedIndex = -1;

    // Leeg alle invoervelden
    document.querySelectorAll('input[type=text]').forEach(input => input.value = "");
};

const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
};

window.addEventListener("load", setup);
