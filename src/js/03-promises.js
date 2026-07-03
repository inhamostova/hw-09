function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const a = 5;
const b = 10;

function sum(x, y) {
  return x + y;
}

console.log(sum(a, b));
