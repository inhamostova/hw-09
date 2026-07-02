const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let idInt = null;

startBtn.addEventListener('click', onStartClcik);
stopBtn.addEventListener('click', onStopClick);

setDisabledAttribute(stopBtn);

function onStopClick(evt) {
  clearInterval(idInt);
  setDisabledAttribute(evt.target);
  removeDisabledAttribute(startBtn);
}

function onStartClcik(evt) {
  idInt = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  setDisabledAttribute(evt.target);
  removeDisabledAttribute(stopBtn);
}

function setDisabledAttribute(btn) {
  btn.setAttribute('disabled', 'true');
}

function removeDisabledAttribute(btn) {
  btn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
