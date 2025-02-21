const setup = () => {

	let sliders = document.getElementsByClassName("slider");

	// hier ga je de actie van de sliders gaan opnemen en laten veranderen
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}



}

const update = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;


	document.getElementById("lblRed").innerHTML=document.getElementById("sldRed").value = red;
	document.getElementById("lblGreen").innerHTML=document.getElementById("sldGreen").value = green;
	document.getElementById("lblBlue").innerHTML=document.getElementById("sldBlue").value = blue;

	let swatch = document.getElementById('swatch');
	swatch.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener("load", setup);
