const setup = () => {
    let btnGenereer = document.getElementById("btnGenereer");
    btnGenereer.addEventListener("click", genereerTrigrammen);
};

const genereerTrigrammen = () => {
    let inputField = document.getElementById("txtInput");
    let tekst = inputField.value.trim();

    if (tekst.length < 3) {
        document.getElementById("output").textContent = "De invoer moet minstens 3 tekens bevatten.";
        return;
    }

    let trigrammen = [];
    for (let i = 0; i <= tekst.length - 3; i++) {
        trigrammen.push(tekst.slice(i, i + 3));
    }

    document.getElementById("output").textContent = trigrammen.join(", ");
};

window.addEventListener("load", setup);