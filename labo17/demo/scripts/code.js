const setup = () => {
    document.getElementById("imgPhoto");
    document.addEventListener("mouseover", imgverander);



}
const imgverander=()=>{
    let img = document.getElementById("imgPhoto");
    img.src = "./images/gojo.jpg";




}

window.addEventListener("load", setup);
