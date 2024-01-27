import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysOfTimer = document.querySelector('span[data-days]');
const hoursOfTimer = document.querySelector('span[data-hours]');
const minutesOfTimer = document.querySelector('span[data-minutes]');
const secondsOfTimer = document.querySelector('span[data-seconds]');

let userSelectedDate;
const currentDate = new Date();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    getUserDate(userSelectedDate);
  },
};

flatpickr('#datetime-picker', options);

function getUserDate(date) {
  if (date <= currentDate) {
    startBtn.setAttribute('disabled', true);
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
      position: 'topRight',
      backgroundColor: '#EF4040',
      titleColor: '#fff',
      messageColor: '#fff',
      iconUrl: '../img/icons/bi_x-octagon.svg',
    });
  } else {
    startBtn.removeAttribute('disabled');
    startBtn.addEventListener('click', addTimer);
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function addTimer() {
  startBtn.setAttribute('disabled', true);
  input.setAttribute('disabled', true);
  let deltaTime = userSelectedDate.getTime() - currentDate.getTime();
  let setIntervalId;

  setIntervalId = setInterval(() => {
    deltaTime -= 1000;
    if (deltaTime < 0) {
      clearInterval(setIntervalId);
      updateTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      startBtn.removeEventListener('click', addTimer);
      return;
    }
    updateTimer(convertMs(deltaTime));
  }, 1000);
}

function updateTimer({ days, hours, minutes, seconds }) {
  daysOfTimer.textContent = addLeadingZero(days);
  hoursOfTimer.textContent = addLeadingZero(hours);
  minutesOfTimer.textContent = addLeadingZero(minutes);
  secondsOfTimer.textContent = addLeadingZero(seconds);
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
