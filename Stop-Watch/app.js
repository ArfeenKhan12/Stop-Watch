let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

function startStopwatch() {
  clearInterval(timer);
  timer = setInterval(updateStopwatch, 100);
}

function stopStopwatch() {
  clearInterval(timer);
}

function updateStopwatch() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById('hours').innerText = formatTime(hours);
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);
}

function formatTime(time) {
  return time < 100 ? `0${time}` : time;
}
