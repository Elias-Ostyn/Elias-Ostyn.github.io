const setup = () => {

    let zinnetje = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let omzetten = zinnetje.replaceAll(" de ", " het ");
    console.log(zinnetje);
    console.log(omzetten);
}
window.addEventListener("load", setup);
