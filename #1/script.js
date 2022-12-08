 // Creating variables
 let bread_priсe = 15.678;
 let eggs_priсe = 123.965;
 let meat_price = 90.2345;




 // Max number
 console.log(Math.max(bread_priсe, eggs_priсe, meat_price ))

 // Min number
 console.log(Math.min(bread_priсe, eggs_priсe, meat_price ))

 // Full price with creating variables
const full_price = bread_priсe +  eggs_priсe + meat_price;
console.log(full_price);

// Rounding numbers down 
bread_priсe = Math.floor(bread_priсe);
eggs_priсe = Math.floor(eggs_priсe);
meat_price = Math.floor(meat_price);

console.log(bread_priсe);
console.log(eggs_priсe);
console.log(meat_price);

let full_price_without_balance = bread_priсe +  eggs_priсe + meat_price;
console.log(full_price_without_balance);

// Rounding up to a hundred 
full_price_without_balance = Math.round(full_price_without_balance/100) * 100;
console.log(full_price_without_balance);

// Boolean 
const is_even = full_price_without_balance % 2 == 1;
console.log(is_even);

// Change from  500
console.log (500 - full_price);

// Average price 

let averege_price = full_price / 3;
let round_number = Math.round (averege_price * 100) / 100;
console.log(round_number);

//======================================================================================================================================================
// Random 
const a = Math.random();
const min = 1;
const max = 100;
const create_random_number = Math.floor((max - min)* a + min);
console.log(create_random_number);

// Price for customer

let price_discount = full_price - (full_price * (create_random_number / 100));
console.log(price_discount);

let round_number_discount = Math.round (price_discount * 100) / 100;
console.log(round_number_discount);

// Profit
let cost_of_goods = full_price / 2;

let net_profit = Math.floor ( cost_of_goods - round_number_discount);
console.log(net_profit);








