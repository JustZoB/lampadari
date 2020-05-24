const slider = document.querySelector(".slider__img");
const sliderImages = document.querySelectorAll(".slider__img img");
const sliderDots = document.querySelector(".slider__dots");

let counter = 1;
let size = slider.clientWidth / 2;
slider.style.transform = "translateX(" + (-size * counter) + "px)";

let dot = `<span></span>`;
for (let i = 0; i < sliderImages.length; i++) {
    sliderDots.innerHTML += dot;
}
let sliderDotsAll = document.querySelectorAll(".slider__dots span");

for (let i = 0; i < sliderImages.length ; i++) {
    sliderDotsAll[i].onclick = function() {
        let buttonCount = i;
        let speed = Math.abs(buttonCount - counter);

        if (buttonCount < counter) {
            moveBack(buttonCount, speed);
            changeDot(counter);
        } else if (buttonCount > counter) {
            moveForward(buttonCount, speed);
            changeDot(counter);
        }
    }
}

sliderDotsAll[counter].classList.add("active");

function moveBack(end, speed) {
    let startAnimation = -size * counter;
    counter = end;
    let endAnimation = -size * end;
    let prevSlide = setInterval(function() {
        startAnimation += 20 * speed;
        if (startAnimation >= endAnimation) {
            clearInterval(prevSlide);
        }
        slider.style.transform = "translateX(" + startAnimation + "px)";
    }, 5);
}

function moveForward(end, speed) {
    let startAnimation = -size * counter;
    counter = end;
    let endAnimation = -size * end;
    let prevSlide = setInterval(function() {
        startAnimation -= 20 * speed;
        if (startAnimation <= endAnimation) {
            clearInterval(prevSlide);
        }
        slider.style.transform = "translateX(" + startAnimation + "px)";
    }, 5);
}

function changeDot (counter) {
    for (let i = 0; i < sliderDotsAll.length; i++) {
        sliderDotsAll[i].classList.remove("active");
    }
    
    sliderDotsAll[counter].classList.add("active");
}
