const setup = () => {
    // 1. Maak array met minstens 5 namen
    let familie = ["Emma", "Lucas", "Marie", "Noah", "Liam"];

    // 2. Toon lengte van de array
    console.log("Aantal elementen:", familie.length);

    // 3. Toon 1e, 3e en 5e element (index 0, 2, 4)
    console.log("Eerste:", familie[0]);
    console.log("Derde:", familie[2]);
    console.log("Vijfde:", familie[4]);

    // 4. Vraag extra naam via prompt, voeg toe via functie
    let extraNaam = prompt("Geef een extra familienaam:");
    VoegNaamToe(familie, extraNaam);

    // Toon de aangepaste array
    console.log("Na toevoegen:", familie);

    // 5. Zet array om naar string
    let familieString = familie.join(", ");
    console.log("Als string:", familieString);
};

// Functie met pass-by-reference
const VoegNaamToe = (lijst, naam) => {
    if (naam) {
        lijst.push(naam.trim());
    }
};

window.addEventListener("load", setup);
