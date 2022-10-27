

const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const audio = document.querySelector("#audio");


btn.addEventListener("click", () =>{
    body.classList.toggle("active");
    audio.play();
})