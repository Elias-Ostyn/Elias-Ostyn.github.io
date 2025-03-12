const setup = () => {
	let btnValideer = document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	let allValid = true; // To keep track of whether all fields are valid

	// Validatie voornaam
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();

	if (voornaam.length > 30) {
		txtVoornaam.className = "invalid";
		errVoornaam.innerHTML = "Max. 30 karakters";
		allValid = false;
	} else {
		txtVoornaam.className = "";
		errVoornaam.innerHTML = "";
	}

	// Validatie familienaam
	let txtfamillieNaam = document.getElementById("txtfamillieNaam");
	let errfamillieNaam = document.getElementById("errfamillieNaam");
	let famillienaam = txtfamillieNaam.value.trim();

	if (!famillienaam) {
		txtfamillieNaam.className = "invalid";
		errfamillieNaam.innerHTML = "Dit veld is verplicht";
		allValid = false;
	} else if (famillienaam.length > 50) {
		txtfamillieNaam.className = "invalid";
		errfamillieNaam.innerHTML = "Max. 50 karakters";
		allValid = false;
	} else {
		txtfamillieNaam.className = "";
		errfamillieNaam.innerHTML = "";
	}

// Validatie geboortedatum
	let txtGeboortedatum = document.getElementById("txtGeboortedatum");
	let errGeboortedatum = document.getElementById("errGeboortedatum");
	let geboortedatum = txtGeboortedatum.value.trim();

	const datePattern = /^\d{4}-\d{2}-\d{2}$/; // jj-mm-dd

	function isschrikkeljaar(year) {
		return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
	}

	function isValidDate(geboortedatum) {
		let [jaar, maand, day] = geboortedatum.split("-").map(num => parseInt(num, 10));
		if (maand < 1 || maand > 12) return false;
		let daysInMonth = [31, (isschrikkeljaar(jaar) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		return day >= 1 && day <= daysInMonth[maand - 1];
	}

	if (!geboortedatum) {
		txtGeboortedatum.className = "invalid";
		errGeboortedatum.innerHTML = "Verplicht veld";
		allValid = false;
	} else if (!datePattern.test(geboortedatum)) {
		txtGeboortedatum.className = "invalid";
		errGeboortedatum.innerHTML = "Gebruik het formaat jj-mm-dd";
		allValid = false;
	} else if (!isValidDate(geboortedatum)) {
		txtGeboortedatum.className = "invalid";
		errGeboortedatum.innerHTML = "Ongeldige datum";
		allValid = false;
	} else {
		txtGeboortedatum.className = "";
		errGeboortedatum.innerHTML = "";
	}



	// Validatie email
	let txtEmail = document.getElementById("txtEmail");
	let errEmail = document.getElementById("errEmail");
	let email = txtEmail.value.trim();
	let emailArray = email.split("@");

// Controleer of er meer dan één @-teken is
	if (emailArray.length > 2) {
		txtEmail.className = "invalid";
		errEmail.innerHTML = "er mag maar 1 @ teken in je mail staan";
		allValid = false;
	} else if (!email) {
		txtEmail.className = "invalid";
		errEmail.innerHTML = "Verplicht veld";
		allValid = false;
	} else if (emailArray[0] === "" || emailArray[1] === "" || email.indexOf("@") === -1 || email.indexOf("@") === 0 || email.indexOf("@") === email.length - 1) {
		txtEmail.className = "invalid";
		errEmail.innerHTML = "Geen geldig e-mailadres";
		allValid = false;
	} else {
		txtEmail.className = "";
		errEmail.innerHTML = "";
	}


	// Validatie aantal kinderen
	let txtAantalKinderen = document.getElementById("txtAantalKinderen");
	let errAantalKinderen = document.getElementById("errAantalKinderen");
	let aantalKinderen = txtAantalKinderen.value.trim();



	if (aantalKinderen && (isNaN(aantalKinderen) || aantalKinderen < 0 || aantalKinderen > 99)) {
		txtAantalKinderen.className = "invalid";
		if (isNaN(aantalKinderen)) {
			errAantalKinderen.innerHTML = "Voer een geldig getal in";
		} else if (aantalKinderen < 0) {
			errAantalKinderen.innerHTML = "Het aantal kinderen mag niet negatief zijn";
		} else if (aantalKinderen > 99) {
			errAantalKinderen.innerHTML = "Max. 99 kinderen";
		}
		allValid = false;
	} else {
		txtAantalKinderen.className = "";
		errAantalKinderen.innerHTML = "";
	}

	// valid popup
	if (allValid) {
		alert("Proficiat! Alle velden zijn correct ingevuld.");
	}
};

window.addEventListener("load", setup);
