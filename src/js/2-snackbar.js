import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const delay = formData.get('delay');
  const isFulfilled = formData.get('state') === 'fulfilled';

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFulfilled) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  })
    .then(successResultMessage)
    .catch(errorResultMessage);
});

function successResultMessage(message) {
  iziToast.show({
    message,
    backgroundColor: '#59A10D',
    messageColor: '#fff',
    position: 'topRight',
  });
}

function errorResultMessage(message) {
  iziToast.show({
    message,
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    position: 'topRight',
  });
}
