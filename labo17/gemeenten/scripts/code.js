const setup = () => {
    sortgemeentes()


}

const sortgemeentes = () => {
    const gemeente = [];

    let input = prompt("geef een paar steden" )

    while (input !== "stop") {
        gemeente.push(input);
        input = prompt("geef een paar steden" );
    }

    gemeente.sort()

    const drop = document.getElementById("dropdownlijst");

    gemeente.forEach((gemeente) => {
        drop.add(new Option(gemeente))
    })
}



window.addEventListener("load", setup);
