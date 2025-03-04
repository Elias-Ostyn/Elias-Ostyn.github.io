const setup = () => {
    let button = document.getElementById("printButton");
    let input = document.getElementById("inputText");

    button.addEventListener("click", () => {
        let text = input.value;
        let spacedText = text.split("").join(" ");
        console.log(spacedText);
    });
};

window.addEventListener("load", setup);
