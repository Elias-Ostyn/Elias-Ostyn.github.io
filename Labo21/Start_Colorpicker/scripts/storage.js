

const storeSliderValues = () => {
    let rgb = {
        red: document.getElementById('sldRed').value,
        green: document.getElementById('sldGreen').value,
        blue: document.getElementById('sldBlue').value,
    };
    let jsonText = JSON.stringify(rgb);
    localStorage.setItem("VIVES.be.colorpicker.sliders", jsonText);
};

const restoreSliderValues = () => {
    let rgb = JSON.parse(localStorage.getItem("VIVES.be.colorpicker.sliders")) || { red: 128, green: 255, blue: 128 };

    document.getElementById("sldRed").value = rgb.red;
    document.getElementById("sldGreen").value = rgb.green;
    document.getElementById("sldBlue").value = rgb.blue;

    update();
};

const storeSwatches = () => {
    let swatches = document.querySelectorAll("#swatchComponents .swatch");
    let swatchData = [];

    for (let i = 0; i < swatches.length; i++) {
        let swatch = swatches[i];
        swatchData.push({
            red: swatch.getAttribute("data-red"),
            green: swatch.getAttribute("data-green"),
            blue: swatch.getAttribute("data-blue")
        });
    }

    localStorage.setItem("swatches", JSON.stringify(swatchData));
};



const restoreSwatches = () => {
    let swatchData = JSON.parse(localStorage.getItem("swatches")) || [];

    for (let i = 0; i < swatchData.length; i++) {
        let swatch = swatchData[i];
        addSwatchComponent(swatch.red, swatch.green, swatch.blue);
    }
};
