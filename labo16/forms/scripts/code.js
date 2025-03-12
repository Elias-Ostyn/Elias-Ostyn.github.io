const setup = () => {

    // die slider voor getal errnaast te tonen
    let rangeSlider = document.getElementById("big-fav-number");
    let rangeValue = document.getElementById("range-value");

    rangeSlider.addEventListener("input", () => {
        rangeValue.textContent = rangeSlider.value;
    });
}

window.addEventListener("load", setup);
