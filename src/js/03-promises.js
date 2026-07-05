function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('fulfill');
//     }

//     reject('promise run with error');
//   }, 2000);
// });

// console.log(promise);
// promise.then(
//   res => console.log(`✅ ${res}`),
//   err => console.log(`❌ ${err}`)
// );

// const makeOrder = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       onSuccess(`Here is your dish ${dish}`);
//     } else {
//       onError('Finish dishes ❤️‍🩹');
//     }
//   }, 1000);
// };

const makeOrder = dish => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve(`Here is your dish ${dish}`);
      }
      reject('Finish dishes ❤️‍🩹');
    }, 1000);
  });
};

makeOrder('piro*ok')
  .then(onOrderSuccess)
  .catch(onOrderError)
  .finally(() => console.log('block finally'));

// makeOrder('piro*ok', onOrderSuccess, onOrderError);

function onOrderSuccess(res) {
  console.log('onOrderSuccess');
  console.log(res);
}

function onOrderError(err) {
  console.log('onOrderError❌');
  console.log(err);
}

// makeOrder('piro*ok', onOrderSuccess, onOrderError);

// function onOrderSuccess(res) {
//   console.log('onOrderSuccess');
//   console.log(res);
// }

// function onOrderError(err) {
//   console.log('onOrderError❌');
//   console.log(err);
// }
