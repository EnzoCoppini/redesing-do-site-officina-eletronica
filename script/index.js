let index = 0;

const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slides img");

const firstClone = slides[0].cloneNode(true);
slidesContainer.appendChild(firstClone);

const totalSlides = document.querySelectorAll(".slides img").length;

function showSlide(){

index++;

slidesContainer.style.transition = "transform 0.8s ease-in-out";
slidesContainer.style.transform = `translateX(-${index * 100}%)`;

if(index === totalSlides - 1){

setTimeout(() => {

slidesContainer.style.transition = "none";
index = 0;
slidesContainer.style.transform = `translateX(0%)`;

}, 800);

}

}

setInterval(showSlide, 3000);