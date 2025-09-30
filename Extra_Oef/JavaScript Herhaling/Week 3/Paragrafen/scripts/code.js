const setup = () => {
    belangrijk();

}

const belangrijk = () => {
    let element = document.getElementsByClassName("belangrijk");
    for (let el of element) {
        el.classList.add("opvallend");
    }

}
window.addEventListener("load", setup);
