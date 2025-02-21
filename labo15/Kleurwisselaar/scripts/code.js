const setup = () => {

let btn = document.getElementsByClassName('btn');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        btn[i].classList.toggle('btnblue');
    })
}

}
window.addEventListener("load", setup);
