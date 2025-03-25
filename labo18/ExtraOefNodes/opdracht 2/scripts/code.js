const setup = () => {

    let lis = document.querySelectorAll("li");
    lis.forEach(li => {
        li.classList.add("listitem");
    });

    const style = document.createElement("style");
    style.textContent = ".listitem { color: red; }";
    document.head.appendChild(style);


    let img = document.createElement("img");
    img.setAttribute("src","img/gojo.jpg" ) ;
    img.setAttribute("alt","gojo img");
    document.querySelector("body").appendChild(img)
};

window.addEventListener("load", setup);
