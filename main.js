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
