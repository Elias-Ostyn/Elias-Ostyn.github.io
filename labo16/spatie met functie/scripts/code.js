const setup = () => {
    const spatie = (inputText) => {
        let result = "";
        for (let i = 0; i < inputText.length; i++) {
            result += inputText[i] + " ";
        }
        return result.trim();
    };

    const toon = () => {
        let input = document.getElementById("inputText").value;
        document.getElementById("output").innerText = spatie(input);
    };

    document.querySelector("button").addEventListener("click", toon);
};

window.addEventListener("load", setup);
