const setup = () => {
    const images = ["0.png", "1.png", "2.png", "3.png", "4.png"];

    const playField = document.getElementById("playField");

    const scoreDisplay = document.getElementById("score");

    const startButton = document.getElementById("startButton");

    let score = 0;

    const generateImage = () => {
        playField.innerHTML = "";

        const randomImage = images[Math.floor(Math.random() * images.length)];
        const img = document.createElement("img");
        img.src = `images/${randomImage}`;
        img.id = "target";
        img.style.left = Math.random() * (playField.clientWidth - 48) + "px";
        img.style.top = Math.random() * (playField.clientHeight - 48) + "px";

        img.addEventListener("click", () => {
            if (randomImage === "0.png") {
                alert("Game Over! Je hebt op de bom geklikt.");
                score = 0; // Reset de score
            } else {
                score++;
            }
            scoreDisplay.textContent = score;
            generateImage();
        });

        playField.appendChild(img);
    };

    startButton.addEventListener("click", () => {
        score = 0;
        scoreDisplay.textContent = score;
        generateImage();
    });
};

window.addEventListener("load", setup);
