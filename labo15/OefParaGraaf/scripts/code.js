const setup = () => {
    let pbelangrijk = document.getElementsByTagName("belangrijk");
    for (let i = 0; i < pbelangrijk.length; i++) {
        pbelangrijk[i] +=" opvallend";
    }
}
window.addEventListener("load", setup);
