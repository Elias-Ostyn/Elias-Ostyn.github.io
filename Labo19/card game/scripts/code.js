const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 6;
let isBusy = false;

const setup = () => {
    const images = [];
    for (let i = 1; i <= AANTAL_KAARTEN; i++) {
        images.push(`kaart${i}.png`, `kaart${i}.png`);
    }
    images.sort(() => Math.random() - 0.5);

    const gameContainer = document.getElementById("game");
    let flippedCards = [];

    images.forEach((image, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = image;
        card.dataset.index = index;
        card.addEventListener("click", flipCard);
        gameContainer.appendChild(card);
    });
};

const flipCard = (event) => {
    if (isBusy || event.target.classList.contains("flipped")) return;

    event.target.style.backgroundImage = `url(${event.target.dataset.image})`;
    event.target.classList.add("flipped");
    flippedCards.push(event.target);

    if (flippedCards.length === 2) {
        isBusy = true;
        setTimeout(checkMatch, 1000);
    }
};

const checkMatch = () => {
    const [card1, card2] = flippedCards;
    if (card1.dataset.image === card2.dataset.image) {
        card1.classList.add("hidden");
        card2.classList.add("hidden");
    } else {
        card1.style.backgroundImage = "url('achterkant.png')";
        card2.style.backgroundImage = "url('achterkant.png')";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
    }
    flippedCards = [];
    isBusy = false;
    checkGameEnd();
};

const checkGameEnd = () => {
    if (document.querySelectorAll(".card:not(.hidden)").length === 0) {
        alert("Gefeliciteerd! Je hebt het spel gewonnen!");
    }
};

window.addEventListener("load", setup);