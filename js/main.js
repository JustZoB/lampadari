const openButton = document.querySelector(".main__aperti__img__button__open");
const closeButon = document.querySelector(".main__aperti__img__button__close");
const aperti = document.querySelector(".main__aperti");
const text = document.querySelector(".main__aperti__text");

openButton.onclick = function() {
    openButton.style.display = "none";
    closeButon.style.display = "unset";
    let start = 175;

    let showText = setInterval(function() {
        start -= 5;
        if (start <= 0) {
            clearInterval(showText);
        }
        aperti.style.transform = "translateY(" + start + "px)";
    }, 5);
}

closeButon.onclick = function() {
    closeButon.style.display = "none";
    openButton.style.display = "unset";
    let start = 0;

    let showText = setInterval(function() {
        start += 5;
        if (start >= 175) {
            clearInterval(showText);
        }
        aperti.style.transform = "translateY(" + start + "px)";
    }, 5);
}

const dropDownElem = document.querySelector(".dropdownmenu");
const dropDownContent = document.querySelector(".dropdownmenu__content");

dropDownElem.onmouseover = function () {
    dropDownContent.style.display = "block";
}
dropDownElem.onmouseout = function () {
    dropDownContent.style.display = "none";
}

const openModal = document.querySelector(".header__register");
const closeModal = document.querySelector(".modal__close");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

openModal.onclick = function() {
    modal.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflowY = "hidden";
}

closeModal.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflowY = "unset";
}

overlay.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflowY = "unset";
}

const menu = document.querySelector(".menu");
const menuBurgerButton = document.querySelector(".menu__burger");

menuBurgerButton.onclick = function() {
    if (menu.style.display == "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
