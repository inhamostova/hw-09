import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let selectedDate = null;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - Date.now() < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }

    // Prevent changing target date after timer has been initialized
    if (selectedDate) return;

    selectedDate = selectedDates[0];

    startBtn.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', onStartClick);

function onStartClick() {
  const intervalId = setInterval(() => {
    const diff = selectedDate - Date.now();
    if (diff <= 0) {
      clearInterval(intervalId);
      return;
    }
    const result = convertMs(diff);
    renderTimer(result);
  }, 1000);

  input.disabled = true;
  startBtn.disabled = true;
}

function renderTimer(time) {
  days.textContent = addLeadingZero(time.days);
  hours.textContent = addLeadingZero(time.hours);
  minutes.textContent = addLeadingZero(time.minutes);
  seconds.textContent = addLeadingZero(time.seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
