const setup = () => {
    // je krijgt alle elementen met een ouder myDiv
    let lstParDiv = document.querySelectorAll('#myDIV > .color');


    for (let i = 0; i < lstParDiv.length; i++) {
        lstParDiv[i].addEventListener('click', changeDiv);
    }
}

const changeDiv = (event) => {
    event.target.className = "colorParDiv";
}

window.addEventListener("load", setup);
