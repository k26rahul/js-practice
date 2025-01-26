import confetti from 'https://cdn.skypack.dev/canvas-confetti';

let daysValueElem = document.querySelector('.timer-value.days-value');
let hoursValueElem = document.querySelector('.timer-value.hours-value');
let minutesValueElem = document.querySelector('.timer-value.minutes-value');
let secondsValueElem = document.querySelector('.timer-value.seconds-value');

let debug = false;
let audio = new Audio('./happy-new-year-2025-christmas-background-music-267238.mp3');

function tick() {
  let nowDate = new Date();
  let hnyDate = new Date(2025, 0, 1);
  let nowEpoch = nowDate.getTime();
  let hnyEpoch = hnyDate.getTime();
  let deltaEpoch = (hnyEpoch - nowEpoch) / 1000;

  if (debug || nowEpoch >= hnyEpoch) {
    confetti();
    audio.play();
  }

  let days = parseInt(deltaEpoch / 86400);
  deltaEpoch -= days * 86400;

  let hours = parseInt(deltaEpoch / 3600);
  deltaEpoch -= hours * 3600;

  let minutes = parseInt(deltaEpoch / 60);
  deltaEpoch -= minutes * 60;

  let seconds = parseInt(deltaEpoch);

  daysValueElem.innerText = days;
  hoursValueElem.innerText = hours;
  minutesValueElem.innerText = minutes;
  secondsValueElem.innerText = seconds;
}

tick();
setInterval(tick, 1000);
