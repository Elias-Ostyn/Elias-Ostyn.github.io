const setup = () => {
    document.getElementById("herberekenKnop").addEventListener("click", herbereken);
};

const herbereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btws = document.getElementsByClassName("btw");
    let subtotals = document.getElementsByClassName("subtotaal");
    let totaalElement = document.getElementById("totaal");
    let totaal = 0;

    for (let i = 0; i < aantallen.length; i++) {
        let prijs = parseFloat(prijzen[i].innerText.replace(" Eur", ""));
        let aantal = parseFloat(aantallen[i].value);
        let btwPercentage = parseFloat(btws[i].innerText.replace("%", "")) / 100;

        if (!isNaN(prijs) && !isNaN(aantal)) {
            let subtotaal = aantal * prijs * (1 + btwPercentage);
            subtotals[i].innerText = subtotaal.toFixed(2) + " Eur";
            totaal += subtotaal;
        }
    }

    totaalElement.innerText = totaal.toFixed(2) + " Eur";
};

window.addEventListener("load", setup);
