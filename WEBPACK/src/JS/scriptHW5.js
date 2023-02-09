
const getRandomArray = (length, min, max) => 
  Array(length).fill().map(() => Math.round(Math.random(min) * max))

console.log(getRandomArray(15, 1, 100));


