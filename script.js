let timer = document.querySelector('.timer span');
let guess = document.querySelector('.guess span');
let bubbles = document.querySelector(' .bubbles');

function random(){
    return Math.floor(Math.random()*10);
}

guess.innerHTML = random();

let time = 60;

let stop = setInterval(() => {
    time--;
    timer.innerHTML = time;
    if(time <= 0)
    clearInterval(stop);
}, 1000);


for (let i = 0; i < 98; i++) {
    bubbles.innerHTML += `<div class="bubble"> ${random()} </div>`;   
}

