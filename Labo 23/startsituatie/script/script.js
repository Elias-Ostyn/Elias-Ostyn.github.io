// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.

const setup = () => {
    let movielist = document.getElementById('movielist');

    let likebar = document.getElementById("likebar");
    let likebarmovies = document.getElementById("likebarmovies");


    movies.forEach(movie => {
        let moviediv = document.createElement("div");

        let titel = createElement("p", "title")

        let image = createElement("img", "image");

        let description = createElement("p", "description")
        let divbutton = createElement("div", "buttons")
        let iconButton = createIconButton(
            "fas fa-thumbs-up",
            "unset likebutton",
            () => like(event.target)
        )

        let iconButtondown = createIconButton(
            "fas fa-thumbs-down",
            "unset likebutton",
            () => dislike(event.target)
        )
        moviediv.classList.add("movie")

        titel.textContent = movie.title;
        image.src = movie.imageUrl;
        description.textContent = movie.description;


        divbutton.appendChild(iconButton)
        divbutton.appendChild(iconButtondown)


        let contentWrapper = createElement("div", "samenzetten");
        contentWrapper.appendChild(image);
        contentWrapper.appendChild(description);

        moviediv.appendChild(titel);
        moviediv.appendChild(divbutton);
        moviediv.appendChild(contentWrapper);

        movielist.appendChild(moviediv);

    });
};



const createElement = (tag, className = "", textContent = "") => {
    const el = document.createElement(tag);
    if (className) {
        className.split(" ").forEach(cls => el.classList.add(cls));
    }
    if (textContent) el.textContent = textContent;
    return el;
};

const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElement("a", buttonClass);
    const icon = createElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
};

const like = (icon) => {
    const movieDiv = icon.closest(".movie");
    const dislikeIcon = movieDiv.querySelector(".fa-thumbs-down");
    const title = movieDiv.querySelector(".title").textContent;

    const likeCounter = document.getElementById("like");
    const dislikeCounter = document.getElementById("dislike");
    let currentLikes = parseInt(likeCounter.textContent) || 0;
    let currentDislikes = parseInt(dislikeCounter.textContent) || 0;

    const wasLiked = icon.classList.contains("groen");
    const wasDisliked = dislikeIcon.classList.contains("rood");

    if (wasDisliked) {
        dislikeIcon.classList.remove("rood");
        dislikeCounter.textContent = currentDislikes - 1;
    }

    if (wasLiked) {
        icon.classList.remove("groen");
        likeCounter.textContent = currentLikes - 1;

        // Verwijder uit likebar
        const containers = likebarmovies.getElementsByClassName("liked-container");
        for (let c of containers) {
            if (c.querySelector(".liked-title").textContent === title) {
                likebarmovies.removeChild(c);
                break;
            }
        }

        if (likebarmovies.children.length === 0) {
            likebar.style.visibility = "hidden";
        }

    } else {
        icon.classList.add("groen");
        likeCounter.textContent = currentLikes + 1;

        const container = document.createElement("div");
        container.className = "liked-container";

        const p = document.createElement("p");
        p.className = "liked-title";
        p.textContent = title;

        const trashButton = createIconButton(
            "fas fa-trash",
            "unset deletebutton",
            () => removeFromLikebar(container, icon)
        );

        container.appendChild(p);
        container.appendChild(trashButton);
        likebarmovies.appendChild(container);
        likebar.style.visibility = "visible";
    }
};


const removeFromLikebar = (element, likeIcon) => {
    likebarmovies.removeChild(element);

    const likebutton = document.getElementById("like");
    let currentLikes = parseInt(likebutton.textContent) || 0;
    likebutton.textContent = currentLikes - 1;

    likeIcon.classList.remove("groen");

    if (likebarmovies.children.length === 0) {
        likebar.style.visibility = "hidden";
    }
};



const dislike = (icon) => {
    const movieDiv = icon.closest(".movie");
    const likeIcon = movieDiv.querySelector(".fa-thumbs-up");
    const title = movieDiv.querySelector(".title").textContent;

    const likeCounter = document.getElementById("like");
    const dislikeCounter = document.getElementById("dislike");
    let currentLikes = parseInt(likeCounter.textContent) || 0;
    let currentDislikes = parseInt(dislikeCounter.textContent) || 0;

    const wasDisliked = icon.classList.contains("rood");
    const wasLiked = likeIcon.classList.contains("groen");

    if (wasLiked) {
        likeIcon.classList.remove("groen");
        likeCounter.textContent = currentLikes - 1;

        // Verwijder uit likebar
        const containers = likebarmovies.getElementsByClassName("liked-container");
        for (let c of containers) {
            if (c.querySelector(".liked-title").textContent === title) {
                likebarmovies.removeChild(c);
                break;
            }
        }

        if (likebarmovies.children.length === 0) {
            likebar.style.visibility = "hidden";
        }
    }

    if (wasDisliked) {
        icon.classList.remove("rood");
        dislikeCounter.textContent = currentDislikes - 1;
    } else {
        icon.classList.add("rood");
        dislikeCounter.textContent = currentDislikes + 1;
    }
};




window.addEventListener("load", setup);