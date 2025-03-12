const setup = () => {
}
let begin = 0;

const maakKader = document.getElementById('createKader');
maakKader.addEventListener('click', () => {
    const hoogte = document.getElementById('hoogte').value;
    const breedte = document.getElementById('breedte').value;
    const kleur = document.getElementById('kleur').value;

    const kader = document.getElementById('kader');
    kader.style.height = hoogte + 'px';
    kader.style.width = breedte + 'px';
    kader.style.backgroundColor = kleur;
    kader.style.position = 'relative';
});

const moveRightButton = document.querySelector('button[onclick="moveRight()"]');
moveRightButton.addEventListener('click', () => {
    const beweging = parseInt(document.getElementById('beweging').value);

    if (beweging < 0 || beweging > 1200) {
        alert("De waarde moet tussen 0 en 1200 liggen.");
        return;
    }

    const kader = document.getElementById('kader');
    const einde = begin + beweging;

    if (einde > 1200) {
        alert("De beweging overschrijdt de limiet van 1200px.");
        return;
    }

    for (let i = begin; i <= einde; i++) {
        kader.style.left = i + 'px';
    }

    begin = einde;
});

window.addEventListener("load", setup);



window.addEventListener("load", setup);
