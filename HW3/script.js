//======================================Завдання 1===========================================================================================================================================

function getMaxDigit(number) {
   let digits = number.toString().split('');  //.toString() повертає рядок, що представляє об’єкт// 
   let realDigits = digits.map(Number); //.map() створює новий масив 
   let result =  Math.max(...realDigits)
   return result;
};

let result = getMaxDigit(1285476);
console.log( result);

document.writeln('<li>',`Найбільша цифра в числі: 1285476 є ${result})`,'</li>');

//======================================================Завдання 3================================================================================================
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);//.toUpperCase() повертає значення використовуючи великі букви // .slice() вибрає з startдо end ( endне включено)
  }

  let result2 = capitalizeFirstLetter('микола! ');
  console.log(result2);
  document.writeln('<li>',`Велика буква в слові:  ${result2})`,'</li>');
 
//==========================================================Завдання 5=====================================================================================================

function getRandomInt(n, m) {
    min = Math.ceil(n); // Math.ceil() вжди округлює в більшу сторону та повертає менше ціле число, більше або дорівнює заданому числу.
    max = Math.floor(m);
    return Math.floor(Math.random() * (m - n + 1)) + n;}



document.writeln('<li>',`Випадкове ціле число в 20 по 100 є:  ${getRandomInt (20, 100)} )`,'</li>');
//======================================================Завдання 4=================================================================================


function salaryExcludingTax (sum) {
  const tax = 0.195;
  let alltax = sum - sum * tax;
  return alltax;
}
document.writeln('<li>',`Податок від 1500 грн податку є:  ${salaryExcludingTax (1500)} )`,'</li>');

//=============================================Завдання 6================================================================================================
function countLetter (letter, string) {
  let count = 0;
  string = string.toLowerCase(); // .toLowerCase() перетворює в нижній регістр, щоб рахувало і великі букви
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
        count++;
    } 
  }
  return count;
};

document.writeln('<li>',`Повторення одинакових літер в слові "Багатонаціональних":  ${countLetter ("а", "Багатонаціональних")} )`,'</li>');

//==============================================================================================================================================================================

function deleteLetters( string) {
  
  string = string.toLowerCase();
   let newStr = string.replaceAll('a','')
   return newStr;
}

document.writeln('<li>',`Видалення літер із слова "blablabla")  ${deleteLetters ( "blablabla")} )`,'</li>');









