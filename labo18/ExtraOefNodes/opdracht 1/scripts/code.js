const setup = () => {

    let element = document.querySelectorAll("p")[0]
    y = element.childNodes[0]
    element.removeChild(y)

    let textNode = document.createTextNode("good job")
    element.appendChild(textNode)





}
const klik = (event) => {
    event.target.innerHTML ='good job' ;
}
window.addEventListener("load", setup);
