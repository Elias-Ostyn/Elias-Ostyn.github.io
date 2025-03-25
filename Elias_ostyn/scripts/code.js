const setup = () => {
    const metei = document.getElementById("metei");
    const zonderei = document.getElementById("zonderei");
    const imgResultaat = document.getElementById("imgResultaat");


    const updateAfbeelding = () => {
        if(metei.value === "metei"){
            let imgResultaat = document.getElementById("imgResultaat");
            imgResultaat.src = "../img/with-egg.png";
        }else{
            let imgResultaat = document.getElementById("imgResultaat");
            imgResultaat.src = "../img/with-egg.png";
        }

        metei.addEventListener("change", updateAfbeelding);
        zonderei.addEventListener("change", updateAfbeelding);
    };


    let button = document.getElementById("druk");
    let text = document.getElementById("inputText")

    button.addEventListener("click", () => {
       let txt= document.getElementById("txtoutput");
       txt =  count;
    });

    const inputTextIndexOf = (text, search) => {
        let count = 0;
        let index = text.indexOf(search);

        while (index !== -1) {
            count++;
            index = text.indexOf(search, index + 1);
        }

        return count;
    };
};





window.addEventListener("load", setup);