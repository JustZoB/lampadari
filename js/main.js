const openButton = document.querySelector(".main__aperti__img__button__open");
const closeButon = document.querySelector(".main__aperti__img__button__close");
const text = document.querySelector(".main__aperti__text");

openButton.onclick = function() {
    openButton.style.display = "none";
    closeButon.style.display = "unset";
    text.style.display = "flex";
}

closeButon.onclick = function() {
    closeButon.style.display = "none";
    openButton.style.display = "unset";
    text.style.display = "none";
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
const modal = document.querySelector(".overlay");

openModal.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflowY = "hidden";
}

closeModal.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflowY = "unset";
}
