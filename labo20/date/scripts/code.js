const setup = () => {

    let start = new Date('2025-04-01T12:10:30');
    console.log(start);

    console.log(start.getDay()); // hij geeft de dag van de week
    console.log(start.getMonth() +1);
    console.log(start.getFullYear());

    let datum = new Date(2025,0,1)

    console.log(datum);

    let event = new Date()
    console.log(event)



    console.log("to isoString geen rekening met tijdzone" +event.toISOString());

    let levensduur = new Date(2004,8,10)
    console.log((((((event -levensduur)/1000) /60)/60) /24)  );
}
window.addEventListener("load", setup);
