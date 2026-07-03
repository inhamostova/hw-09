const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

setDisabledAttribute(stopBtn);

function onStopClick(evt) {
  clearInterval(timerId);
  setDisabledAttribute(evt.target);
  removeDisabledAttribute(startBtn);
}

function onStartClick(evt) {
  timerId = setInterval(changeBackgroundColor, 1000);
  setDisabledAttribute(evt.target);
  removeDisabledAttribute(stopBtn);
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function setDisabledAttribute(btn) {
  btn.disabled = true;
}

function removeDisabledAttribute(btn) {
  btn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
