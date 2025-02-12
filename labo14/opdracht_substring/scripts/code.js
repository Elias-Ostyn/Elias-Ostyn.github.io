const setup = () => {
    const verander = () => {
        let string = document.getElementById("inputString").value;
        let start = parseInt(document.getElementById("startIndex").value,10);
        let end = parseInt(document.getElementById("endIndex").value,10);
        document.getElementById("output").textContent = string.substring(start, end);
    };

    document.getElementById("btnSubstring").addEventListener("click", verander );



};

window.addEventListener("load", setup);
