const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	// maak het blokje rood
	update();
}

const update = () => {

	let sldRed = document.getElementById("red").value;
	let sldGreen = document.getElementById("green").value;
	let sldBlue = document.getElementById("blue").value;

	document.getElementById("value-red").textContent = sldRed;
	document.getElementById("value-green").textContent = sldGreen;
	document.getElementById("value-blue").textContent = sldBlue;

	let RGBColor = `rgb(${sldRed}, ${sldGreen}, ${sldBlue})`;
	let ColorDemos = document.getElementsByClassName("colorDemo");
	ColorDemos[0].style.backgroundColor = RGBColor;
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);