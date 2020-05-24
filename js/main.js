const buttonsImg = document.querySelector(".main__aperti__img");
const openButton = document.querySelector(".main__aperti__img__button__open");
const closeButon = document.querySelector(".main__aperti__img__button__close");
const aperti = document.querySelector(".main__aperti");
const text = document.querySelector(".main__aperti__text");
const sliderDots = document.querySelector(".slider__dots");

aperti.style.transform = "translateY(" + text.clientHeight + "px)";

openButton.onclick = function() {
    buttonsImg.classList.add("active");
    openButton.style.display = "none";
    closeButon.style.display = "unset";
    sliderDots.style.zIndex = "0";
    let start = text.clientHeight, end = 0;

    let showText = setInterval(function() {
        start -= 5;
        if (start <= end) {
            clearInterval(showText);
        }
        aperti.style.transform = "translateY(" + start + "px)";
    }, 5);
}

closeButon.onclick = function() {
    buttonsImg.classList.remove("active");
    closeButon.style.display = "none";
    openButton.style.display = "unset";
    let start = 0, end = text.clientHeight;

    let showText = setInterval(function() {
        start += 5;
        if (start >= end) {
            sliderDots.style.zIndex = "2";
            clearInterval(showText);
        }
        aperti.style.transform = "translateY(" + start + "px)";
    }, 5);
}

window.onresize = function() {
    if (buttonsImg.classList == "main__aperti__img") {
        aperti.style.transform = "translateY(" + text.clientHeight + "px)";
    }
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
