//======================================Завдання 1===========================================================================================================================================

 function getMaxDigit(number) {
   let digits = number.toString().split('');  //.toString() повертає рядок, що представляє об’єкт// 
   let realDigits = digits.map(Number); //.map() створює новий масив 
   let result =  Math.max(...realDigits)
   return result;
};

let result = getMaxDigit(1285476);
console.log(getMaxDigit(result));










