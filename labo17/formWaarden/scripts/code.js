const setup = () => {
    document.getElementById("toonResultaatKnop").addEventListener("click", toonResultaat);

}

const toonResultaat = () => {
    let roker = document.getElementById("roker").checked ? "is roker" : "is geen roker.";
    console.log(roker);

    let moedertaal = document.querySelector('input[name="moedertaal"]:checked');
    if(moedertaal){
        console.log("moedertaal is " + moedertaal.value);
    }else{
        console.log("moedertaal is niet gekozen ");
    }

    let favorieteBuurland = document.getElementById("favorieteBuurland");
    console.log("je favoriete buurland is : " + favorieteBuurland.value);

    let bestellingSelect = document.getElementById("bestelling");
    let bestelling = [];

    for (let keuze of bestellingSelect.options) {
        if (keuze.selected) {
            bestelling.push(keuze.value);
        }
    }
    console.log("je hebt : " + bestelling.join() + " besteld");



}
window.addEventListener("load", setup);
