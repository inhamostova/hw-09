import { Notify } from 'notiflix';

const ANIMATION_DELAY = 500;

const btnStart = document.querySelector('button[type=button]');
const container = document.querySelector('.js-container');

btnStart.addEventListener('click', onStart);

function onStart() {
  const boxArray = [...container.children];
  boxArray.forEach(box => (box.textContent = ''));
  const promises = boxArray.map((_, i) => createPromise(i));

  Promise.allSettled(promises).then(items => {
    const result = items.filter(({ status }) => status === 'fulfilled').length;

    setTimeout(() => {
      if (!result || result === boxArray.length) {
        Notify.success('Winner');
      } else {
        Notify.failure('Loser');
      }
    }, ANIMATION_DELAY * items.length);

    items.forEach((item, i) => {
      setTimeout(() => {
        boxArray[i].textContent = item.value ?? item.reason;
      }, ANIMATION_DELAY * i);
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
    }, ANIMATION_DELAY * delay);
  });
}

// function insertTextContent(box, text) {
//   box.textContent = text;
// }

// function onStart() {
//   const result = [];
//   const boxArray = [...container.children];

//   boxArray.forEach(box => insertTextContent(box, ''));
//   boxArray.forEach((box, i) => {
//     createPromise(i)
//       .then(val => {
//         insertTextContent(box, val);
//         result.push(val);
//       })
//       .catch(val => insertTextContent(box, val))
//       .finally(() => {
//         if (i === boxArray.length - 1) {
//           setTimeout(() => {
//             if (!result.length || result.length === boxArray.length) {
//               Notify.success('Winner');
//             } else {
//               Notify.failure('You lose money');
//             }
//           }, 500);
//         }
//       });
//   });
// }
