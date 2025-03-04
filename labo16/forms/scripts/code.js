const setup = () => {
    // Kleurtje kiezen
    let colorPicker = document.getElementById("fav-color");
    let colorPreview = document.getElementById("color-preview");

    colorPicker.addEventListener("input", () => {
        colorPreview.style.backgroundColor = colorPicker.value;
    });
    // die slider voor getal errnaast te tonen
    let rangeSlider = document.getElementById("big-fav-number");
    let rangeValue = document.getElementById("range-value");

    rangeSlider.addEventListener("input", () => {
        rangeValue.textContent = rangeSlider.value;
    });
}

window.addEventListener("load", setup);
