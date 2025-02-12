const setup = () => {



    let pElement = document.getElementById("ttxtOutput")
    pElement.innerHTML = "welkom!";

    let knop = document.getElementById("wijzigKnop");

    knop.addEventListener("click", () => {
        pElement.innerHTML = "welkom op mijn werf!";
    });
}
window.addEventListener("load", setup);
