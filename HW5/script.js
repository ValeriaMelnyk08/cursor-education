//======================================Завдання 1 =======================================================================================================================================================
const getRandomArray = (length, min, max) => 
  Array(length).fill().map(() => Math.round(Math.random(min) * max))

console.log(getRandomArray(15, 1, 100));

//=================================Завдання 5============================================================================================================================================================
let array = [1, 2, 3, 4, 5, 6];
const filterEvenNumbers2 = (numbers) => numbers.filter(numbers => numbers % 2 == 1);
console.log(filterEvenNumbers2(array));

//======================================Завдання 7=======================================================================================================================================================
let array1 = [6, 2,55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 10, 25, 30];

function  getDividedByFive  (numbers) {
    const dividedFive = numbers.filter(numbers => numbers % 5 == 0)

    return dividedFive;
}
   
console.log(getDividedByFive(array1));

//===================================Завдання 3============================================================================================================================================================================
let array2 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 1.5, 15.5,];



function getAverage (numbers){
  let result = 0;
  const notInteger = numbers.filter((n) => Number.isInteger(n)).map((num) => {
      result += num;
  });
 let averageNumbers = result/notInteger.length
  return averageNumbers;
}
 

 
  

console.log(getAverage(array2));

//=====================================Завдання 9==================================================================================================================================

let array4 = "COMmander hello";
function divideByThree (word) {
  word = word.toLowerCase().trim();
 let  createWord = word.match(/.{1,3}/g);
 return createWord
}
console.log(divideByThree(array4));
//==========================================Завдання 4================================================================================================================================================

let array5 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 88];


function getMedian(numbers) {
  let sortedArray = numbers.sort((a, b) => a - b);// сортування чисел в порядку зростання 
  sortedArray = numbers.filter((n) => Number.isInteger(n));// видаляє нецілі числа
  let result = 0;
  if ((numbers.length / 2) % 2 === 0) {//парне
    result =
      (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2;
  } else {
    result = numbers[Math.floor(numbers.length / 2)]; // приймає значення що стоїть рівно по сеоедині масиву
  }
  return result;
}


console.log(getMedian(array5))

