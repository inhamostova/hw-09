function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// const a = 5;
// const b = 10;

// function sum(x, y) {
//   return x + y;
// }

// console.log(sum(a, b));

// const makeGreeting = guestName => {
//   if (guestName === '' || guestName === undefined) {
//     return {
//       success: false,
//       message: 'Guest name must not be empty',
//     };
//   }

//   return {
//     success: true,
//     message: `Welcome ${guestName}`,
//   };
// };

// const result = makeGreeting('Mango');

// if (result.success) {
//   console.log(result.message);
// } else {
//   console.error(result.message);
// }

const makeGreeting = guestName => {
  if (guestName === '' || guestName === undefined) {
    return Promise.reject('Guest name must not be empty');
  }
  return new Promise(resolve => resolve(`Welcome ${guestName}`));
};

const result = makeGreeting('');

result.then(value => console.log(value)).catch(error => console.log(error));
