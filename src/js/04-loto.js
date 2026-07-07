import { Notify } from 'notiflix';

const btnStart = document.querySelector('button[type=button]');
const container = document.querySelector('.js-container');

btnStart.addEventListener('click', onStart);

function onStart() {
  const result = [];
  const boxArray = [...container.children];

  boxArray.forEach(box => insertTextContent(box, ''));
  boxArray.forEach((box, i) => {
    createPromise(i)
      .then(val => {
        insertTextContent(box, val);
        result.push(val);
      })
      .catch(val => insertTextContent(box, val))
      .finally(() => {
        if (i === boxArray.length - 1) {
          setTimeout(() => {
            if (!result.length || result.length === boxArray.length) {
              Notify.success('Winner');
            } else {
              Notify.failure('You lose money');
            }
          }, 500);
        }
      });
  });
}

function createPromise(delay) {
  return new Promise((res, rej) => {
    const isSuccess = Math.random() > 0.5;

    setTimeout(() => {
      if (isSuccess) {
        res('🍋');
      } else {
        rej('❌');
      }
    }, 1000 * delay);
  });
}

function insertTextContent(box, text) {
  box.textContent = text;
}
