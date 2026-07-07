import { Notify } from 'notiflix';

const btnStart = document.querySelector('button[type=button]');
const container = document.querySelector('.js-container');

btnStart.addEventListener('click', onStart);

function onStart() {
  let counter = 0;
  const boxArray = [...container.children];
  const promises = boxArray.map(createPromise);
  Promise.allSettled(promises).then(items => {
    items.forEach((item, i) => {
      boxArray[i].textContent = '';
      setTimeout(() => {
        boxArray[i].textContent = item.value || item.reason;
        if (item.status === 'fulfilled') counter += 1;

        if (i === boxArray.length - 1) {
          if (counter === boxArray.length || !counter) {
            Notify.success('Winner');
          } else {
            Notify.failure('Looser!');
          }
        }
      }, 1000 * i);
    });
  });
}

function createPromise() {
  return new Promise((res, rej) => {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      res('🍋');
    } else {
      rej('❌');
    }
  });
}

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

// function insertTextContent(box, text) {
//   box.textContent = text;
// }
