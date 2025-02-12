const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.textContent = txtInput.value; // Zet de tekst in het <p>-element
}

window.addEventListener("load", setup);
