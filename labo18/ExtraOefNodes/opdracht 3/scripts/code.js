const setup = () => {
    let button = document.getElementById("myButton");
    let myDiv = document.getElementById("myDIV");

    button.addEventListener("click", () => {
        let nieuwePar = document.createElement("p");
        nieuwePar.textContent = "Dit is een nieuwe paragraaf!";
        myDiv.appendChild(nieuwePar);
    });
};

window.addEventListener("load", setup);
