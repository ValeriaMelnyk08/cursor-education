const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//======================================Завдання 1=============================================================================================================

function getMyTaxes (number) {
    return this.tax * number ;
    
}

console.log( getMyTaxes.call(litva, 1500));
//=======================================Завдання 2============================================================================================================
 function getMiddleTaxes () {
    return this.tax * this.middleSalary;
    
 }
 console.log('MiddleTax in Ukraine: ', getMiddleTaxes.call (ukraine));
 console.log(  'MiddleTax in Latvia: ', getMiddleTaxes.call (latvia));
 console.log( 'MiddleTax in Litva:', getMiddleTaxes.call (litva));

//========================================Завдання 3=======================================================================================================================================
function getTotalTaxes () {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log('TotalTax in Ukraine: ', getTotalTaxes.call (ukraine));
console.log(  'TotalTax in Latvia: ', getTotalTaxes.call (latvia));
console.log( 'TotalTax in Litva:', getTotalTaxes.call (litva));

//===================================================Завдання 4=================================================================================================================================
function getMySalary(country) {
    let salaryTaxProfit = {};
    salaryTaxProfit.salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    salaryTaxProfit.taxes = getMyTaxes.call(country, salaryTaxProfit.salary).toFixed(2);
    salaryTaxProfit.profit = (salaryTaxProfit.salary - salaryTaxProfit.taxes).toFixed(2);
    return salaryTaxProfit;
}

setInterval(() => console.log(getMySalary(latvia)),10000);
