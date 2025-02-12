const setup = () => {
    let famillie = ["fam1", "fam2", "fam3", "fam4", "fam5"];

    for (let i = 0; i < famillie.length; i++) {
        if(i % 2 === 0) {
            console.log(famillie[i]);
        }

    }
    console.log('-------------')



    VoegNaamToe(famillie);
    for(let i = 0; i < famillie.length; i++) {
        console.log(famillie[i]);
    }

    window.alert("dit is een mededeling");

    let zeker =window.confirm("weet u het zeker?");
    console.log(zeker);

    let onbekend = window.prompt("wat is uw naam " , "onbekend" );
    console.log(onbekend);


}

const VoegNaamToe = (famillie)=> {
    let nieuweNaam = prompt("Geef een extra naam op:");
    famillie.push(nieuweNaam);
}

window.addEventListener("load", setup);
