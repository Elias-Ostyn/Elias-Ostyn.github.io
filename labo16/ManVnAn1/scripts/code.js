const antellenIndexOf = (text, search) => {
    let count = 0;
    let index = text.indexOf(search);

    while (index !== -1) {
        count++;
        index = text.indexOf(search, index + 1);
    }

    return count;
};

const antellenLastIndex = (text, search) => {
    let count = 0;
    let index = text.lastIndexOf(search);

    while (index !== -1) {
        count++;
        index = text.lastIndexOf(search, index - 1);
    }

    return count;
};

const setup = () => {
    let button = document.getElementById("antellen"); // Veranderde ID naar "antellen"
    let tekst = "De man van An geeft geen hand aan ambetante verwanten";

    button.addEventListener("click", () => {
        console.log("Aantal keer 'an' met indexOf:", antellenIndexOf(tekst, "an"));
        console.log("Aantal keer 'an' met lastIndexOf:", antellenLastIndex(tekst, "an"));
    });
};

window.addEventListener("load", setup);
