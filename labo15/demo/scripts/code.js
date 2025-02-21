const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Event-based programming

    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);




    // eventListeners CSS
    document.getElementById("btnWithoutBullets")
        .addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets")
        .addEventListener("click", withBullets);

    document.getElementById("btnContent")


}

// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";

}

// onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

// mouseOutFunction

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

const withoutBullets = () => {
    let listItems =document.getElementsByTagName("li");
    for(let i = 0; i < listItems.length; i++) {
       // listItems[i].style.listStyleType = "none";
       // listItems[i].style.listStyleType = "red";
        listItems[i].className="listItemsStyleNone colorRed"
     //   listItems[i].classList.remove("listItemsStyleDisc");
     //   listItems[i].classList.remove("colorWhite");
      //  listItems[i].classList.add("listItemsStyleNone");
     //   listItems[i].classList.add("colorRed");
    }
}

const withBullets = () => {
    let listItems =document.getElementsByTagName("li");
    for(let i = 0; i < listItems.length; i++) {
        //   listItems[i].style.listStyleType = "disc";
        //   listItems[i].style.listStyleType = "white";
        listItems[i].className = "listItemsStyleDisc colorWhite"
      //  listItems[i].classList.add("listItemsStyleDisc");
     //   listItems[i].classList.add("colorWhite");
    }
}
const changeContent = () => {
    document.getElementById("btnContent")
        .innerHTML = "<a href='https://www.vives.be'>vives</a>";
    document.getElementById("textContentContent").textContent = "<a href='https://www.vives.be'>vives</a>"

}

window.addEventListener("load", setup);