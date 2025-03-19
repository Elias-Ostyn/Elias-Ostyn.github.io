const setup = () => {
	const btnValideer = document.getElementById("btnValideer");
	btnValideer.addEventListener("click", () => {
		let allValid = true;

		// Validatie voornaam
		const txtVoornaam = document.getElementById("txtVoornaam");
		const errVoornaam = document.getElementById("errVoornaam");
		const voornaam = txtVoornaam.value.trim();
		if (voornaam.length > 30) {
			txtVoornaam.className = "invalid";
			errVoornaam.innerHTML = "Max. 30 karakters";
			allValid = false;
		} else {
			txtVoornaam.className = "";
			errVoornaam.innerHTML = "";
		}

		// Validatie familienaam
		const txtFamillieNaam = document.getElementById("txtfamillieNaam");
		const errFamillieNaam = document.getElementById("errfamillieNaam");
		const famillienaam = txtFamillieNaam.value.trim();
		if (!famillienaam) {
			txtFamillieNaam.className = "invalid";
			errFamillieNaam.innerHTML = "Dit veld is verplicht";
			allValid = false;
		} else if (famillienaam.length > 50) {
			txtFamillieNaam.className = "invalid";
			errFamillieNaam.innerHTML = "Max. 50 karakters";
			allValid = false;
		} else {
			txtFamillieNaam.className = "";
			errFamillieNaam.innerHTML = "";
		}

		// Validatie geboortedatum
		const txtGeboortedatum = document.getElementById("txtGeboortedatum");
		const errGeboortedatum = document.getElementById("errGeboortedatum");
		const geboortedatum = txtGeboortedatum.value.trim();
		const datePattern = /^\d{4}-\d{2}-\d{2}$/;

		const isSchrikkeljaar = (year) => (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
		const isValidDate = (date) => {
			const [jaar, maand, dag] = date.split("-").map(num => parseInt(num, 10));
			if (maand < 1 || maand > 12) return false;
			const daysInMonth = [31, (isSchrikkeljaar(jaar) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			return dag >= 1 && dag <= daysInMonth[maand - 1];
		};

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
		const txtEmail = document.getElementById("txtEmail");
		const errEmail = document.getElementById("errEmail");
		const email = txtEmail.value.trim();
		const emailArray = email.split("@");

		if (emailArray.length > 2) {
			txtEmail.className = "invalid";
			errEmail.innerHTML = "Er mag maar 1 @ teken in je mail staan";
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
		const txtAantalKinderen = document.getElementById("txtAantalKinderen");
		const errAantalKinderen = document.getElementById("errAantalKinderen");
		const aantalKinderen = txtAantalKinderen.value.trim();

		if (aantalKinderen && (isNaN(aantalKinderen) || aantalKinderen < 0 || aantalKinderen > 99)) {
			txtAantalKinderen.className = "invalid";
			if (isNaN(aantalKinderen)) {
				errAantalKinderen.innerHTML = "Voer een geldig getal in";
			} else if (aantalKinderen < 0) {
				errAantalKinderen.innerHTML = "Het aantal kinderen mag niet negatief zijn";
			} else if (aantalKinderen > 99) {
				errAantalKinderen.innerHTML = "Te vruchtbaar";
			}
			allValid = false;
		} else {
			txtAantalKinderen.className = "";
			errAantalKinderen.innerHTML = "";
		}

		// Validatie popup
		if (allValid) {
			alert("Proficiat! Alle velden zijn goed ingevuld.");
		}
	});
};

window.addEventListener("load", setup);
