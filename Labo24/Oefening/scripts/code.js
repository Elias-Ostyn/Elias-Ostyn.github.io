// zoekt naar html elem
    // knop voor taak toe te voegen
    // De inputvelden voor titel en beschrijving
    // alle kolommen op het bord displayen

// zet de teller op nul die wordt gebruikt voor id's aan nieuwe taken te gevne
// definieert loadtaskt om al eerdere taken uit de localstorage te halen

window.addEventListener("load", () => {
    const voegTaakToe = document.getElementById("voegTaakToe");
    console.log("taak toevoegen")
    const taakTitel = document.getElementById("taakTitel");
    console.log("taakTitel")
    const taakBeschrijving = document.getElementById("taakBeschrijving");
    console.log("taakBeschrijving")
    const columns = document.querySelectorAll(".column");
    let taakIdTeller = 0;

    // Haalt de taken uit localStorage
        // voor elke opgeslagen taak
            // nieuwe taak aangemaakt op het scherm via maakTaak
            // de datum in small juist gezet zoal hij was eerst
            // de juiste Id meegeven ( dit heb je nodig om te slepen
            // de taak toevoegen aan de juiste kolom ( ofwel to-do in progress, done) op basis van de status

    const loadTasks = () => {
        const taken = JSON.parse(localStorage.getItem("taken")) || [];

        taken.forEach(taakData => {
            const taak = maakTaak(taakData.titel, taakData.beschrijving);
            taak.querySelector("small").textContent = taakData.datum;
            taak.id = taakData.id;
            document.getElementById(taakData.status).appendChild(taak);
            console.log("de taken worden geladen");

        });
    };
 // haalt bestaande taken op uit de local storage
    // maakt een nieuwe taak-obj aan met (taakdata)

    // id : het id van de taak
    // titel : de teskt in het h4 elem
    // beschrijving : de tekst in p element
    // datum : de tekst in het small elem
    // status : standaard wordt dit in to-do gezet omdat de taak altijd begint in to-do

    //voegt de nieuwe taak aan de bestaande lijst
    // slaat de bijgewerkte op in de localStorage

    const OpslaanLocalStorage = (taak) => {
        const taken = JSON.parse(localStorage.getItem("taken")) || [];

        const taakData = {
            id: taak.id,
            titel: taak.querySelector("h4").textContent,
            beschrijving: taak.querySelector("p").textContent,
            datum: taak.querySelector("small").textContent,
            status: "todo"
        };

        taken.push(taakData);
        localStorage.setItem("taken", JSON.stringify(taken));
    };


    // hier haal je alle opgeslagen data op uit je local storage
    // als het leeg is heb je een lege arraylist
    // dan zoek je de taak op die je hebt doorgegeven taak door te kijken naar het id.
    // als de taak gevonden is, veranderd het zijn status veranderd de status naar welke kolom dit stond
    // en dan sla terug op in de local storage
    const UpdateStatusLocalStorage = (taak, newStatus) => {
        const taken = JSON.parse(localStorage.getItem("taken")) || [];

        const index = taken.findIndex(t => t.id === taak.id);
        if (index !== -1) {
            taken[index].status = newStatus;
            localStorage.setItem("taken", JSON.stringify(taken));
        }
    };


    const maakTaak = (titel, beschrijving) => {
        // Maak een nieuw <div>-element aan voor de taak en geef het de klasse "taak"
        const taak = document.createElement("div");
        taak.className = "taak";
        taak.draggable = true; // Maak het element versleepbaar
        taak.id = "taak-" + taakIdTeller++; // Geef een uniek ID zoals "taak-0", "taak-1", ...

        // Maak een <h4> element aan voor de titel van de taak
        const h4 = document.createElement("h4");
        h4.textContent = titel; // Zet de titeltekst erin

        // Maak een <p> element aan voor de beschrijving van de taak
        const p = document.createElement("p");
        p.textContent = beschrijving; // Zet de beschrijvingstekst erin

        // Maak een <small> element aan voor de datum
        const small = document.createElement("small");

        // Genereer de huidige datum en tijd in Belgisch formaat
        const datum = new Date().toLocaleString("nl-BE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });

        // Zet de datumtekst erin
        small.textContent = "Dit item werd aangemaakt op: " + datum;

        // Voeg alle elementen (titel, beschrijving en datum) toe aan de taak
        taak.appendChild(h4);
        taak.appendChild(p);
        taak.appendChild(small);

        // Als je begint met slepen, sla het ID van deze taak op
        taak.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", taak.id);
            taak.classList.add("dragging"); // Voeg klasse toe zodat je visueel ziet dat hij wordt gesleept
            console.log("id opslaan van de taak: " + taak.id);
        });

        // Als je stopt met slepen, verwijder de klasse "dragging"
        taak.addEventListener("dragend", () => {
            taak.classList.remove("dragging");
        });

        // Geef het volledige taak-element terug aan de aanroepende code
        return taak;
    };

    // Wanneer je op de knop "Toevoegen" klikt:
    // Worden de titel en beschrijving uit de inputvelden gehaald.
    // Als één van beide leeg is, gebeurt er niets.
    // Anders:
    // Wordt een nieuwe taak aangemaakt met maakTaak(...).

    // Deze taak wordt toegevoegd aan de "To Do"-kolom.
    // De taak wordt opgeslagen in localStorage via OpslaanLocalStorage(...).
    // De taakinfo wordt gelogd in de console.
    // De inputvelden worden leeggemaakt.

    voegTaakToe.addEventListener("click", () => {
        const titel = taakTitel.value.trim();
        const beschrijving = taakBeschrijving.value.trim();

        if (titel === "" || beschrijving === "") return;

        const taak = maakTaak(titel, beschrijving);
        document.getElementById("todo").appendChild(taak);
        OpslaanLocalStorage(taak);

        console.log("Taak toegevoegd:", {
            titel: titel,
            beschrijving: beschrijving
        });

        taakTitel.value = "";
        taakBeschrijving.value = "";
    });

    // Voor elke kolom (To Do, In Progress, Done):
    // dragover laat toe dat er iets op de kolom gesleept kan worden.
    // drop:
    // Haalt het ID op van het gesleepte taakje.
    // Vindt het bijbehorende HTML-element.
    // Verplaatst het naar de juiste kolom.
    // Past de status in localStorage aan via UpdateStatusLocalStorage(...).
    columns.forEach(column => {
        column.addEventListener("dragover", e => e.preventDefault());
        column.addEventListener("drop", e => {
            console.log("versleept" )
            e.preventDefault();
            const id = e.dataTransfer.getData("text/plain");
            const taak = document.getElementById(id);
            if (taak) {
                column.appendChild(taak);
                UpdateStatusLocalStorage(taak, column.id);
            }
        });
    });
    // Bij het laden van de pagina worden de eerder opgeslagen taken uit localStorage opgehaald en in de juiste kolom gezet.
    loadTasks();

});
