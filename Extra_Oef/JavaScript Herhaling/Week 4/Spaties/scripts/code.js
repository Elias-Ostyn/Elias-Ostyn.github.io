const setup = () => {
    const knop = document.getElementById("knop");
    knop.addEventListener("onlick",ToonMetSpacties);

}


const ToonMetSpacties = () => {

    const tekst = document.getElementById("inputtekst").value;

    let toonMetSpaties = "";

    for (let i = 0; i < tekst.length; i++) {
        toonMetSpaties += tekst[i] + " ";

    }

    console.log(toonMetSpaties.trim());

}

window.addEventListener("load", setup);