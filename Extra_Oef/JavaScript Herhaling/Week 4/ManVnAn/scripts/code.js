const setup = () => {
    const knop = document.getElementById('telKnop');

    const telAn = () => {
        const zoek = 'an';
        const tekst = document.getElementById('telAn').value;
        let count = 0;
        let index = tekst.indexOf(zoek);
        console.log("Ingevoerde tekst:", tekst, "Lengte:", tekst.length);

        while (index !== -1) {
            count++;
            index = tekst.indexOf(zoek, index + 1);
        }

        const resultaatElem = document.getElementById('res');
        resultaatElem.innerText = `'${zoek}' komt ${count} keer voor in de zin`;
    };

    knop.addEventListener("click", telAn);
};

window.addEventListener("load", setup);
