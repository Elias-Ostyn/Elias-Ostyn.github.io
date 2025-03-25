const setup = () => {

    let element = document.createElement('p');
    element.setAttribute("class", "color")
    element.setAttribute("id", "txtPar");

    console.log(element.getAttribute("class"));


    let txtNode = document.createTextNode("hello world");
    element.appendChild(txtNode);
    document.querySelector("#myDiv").appendChild(element);
}
window.addEventListener("load", setup);
