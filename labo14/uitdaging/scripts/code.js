const setup = () => {

    document.getElementById("btnButton").addEventListener("click", function() {
        const list = document.getElementById("list");
        list.classList.remove("met-bollekes");
        list.classList.add("zonder-bollekes");
    });

    document.getElementById("btnButton2").addEventListener("click", function() {
        const list = document.getElementById("list");
        list.classList.remove("zonder-bollekes");
        list.classList.add("met-bollekes");
    });


}
    window.addEventListener("load", setup);
