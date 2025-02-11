const setup = () => {
    let lblCursus = document.getElementById('lblCursus');
    lblCursus.addEventListener("mouseover", change)

    let btnSend = document.getElementById('btnSend');
    btnSend.addEventListener("click", show)
}




const show = () => {
    let txtName = document.getElementById('txtName');

    if (txtName.value !== "") {
        alert("jouw naam is " + txtName.value);
    }else{
        alert("gelieve je naam in te vullen")
    }
}

const change = () => {

    console.log("show")
    let lblCursus = document.getElementById('lblCursus');
    lblCursus.className = "cursus";

    console.log("jouw naam is " + lblCursus.value);

}
window.addEventListener("load", setup);
