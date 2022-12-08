 // Creating variables
 let bread_priсe = 15.678;
 let eggs_priсe = 123.965;
 let meat_price = 90.2345;




 // Max number
 let max_price_goods = Math.max(bread_priсe, eggs_priсe, meat_price );
 console.log (`Максимальне значення: ${max_price_goods}`);
 document.writeln('<li>',`Mаксимальне значення:${max_price_goods}`,'</li>');


 // Min number
 let min_price_goods = Math.min(bread_priсe, eggs_priсe, meat_price );
 console.log (`Мінімальне значення: ${max_price_goods}`);
 document.writeln('<li>',`Мінімальне значення:${max_price_goods}`,'</li>');

 // Full price with creating variables
const full_price = bread_priсe +  eggs_priсe + meat_price;
console.log (`Вся сума товарів: ${full_price}`);
document.writeln('<li>',`Вся сума товарів:${full_price}`,'</li>');

// Rounding numbers down 
bread_priсe = Math.floor(bread_priсe);
eggs_priсe = Math.floor(eggs_priсe);
meat_price = Math.floor(meat_price);



let full_price_without_balance = bread_priсe +  eggs_priсe + meat_price;
console.log (`Ціна всіх товарів без копійок: ${full_price_without_balance}`);
document.writeln('<li>',`Ціна всіх товарів без копійок:${full_price_without_balance}`,'</li>');

// Rounding up to a hundred 
full_price_to_hundred = Math.round(full_price_without_balance/100) * 100;
console.log (`Округлення товарів до сотні: ${full_price_to_hundred}`);
document.writeln('<li>',`Округлення товарів до сотні:${full_price_to_hundred}`,'</li>');

// Boolean 
const is_even = full_price_without_balance % 2 == 0;
console.log (`Булеве значення: ${is_even}`);
document.writeln('<li>',`Булеве значення:${is_even}`,'</li>');

// Change from  500
let change_for_customer = 500 - full_price;
console.log (`Решта для покупця: ${change_for_customer}`);
document.writeln('<li>',`Решта для покупця:${change_for_customer}`,'</li>');


// Average price 

let averege_price = full_price / 3;
let round_number = Math.round (averege_price * 100) / 100;
console.log (`Середнє значення: ${round_number}`);
document.writeln('<li>',`Середнє значення:${round_number}`,'</li>');

//======================================================================================================================================================
// Random 
const a = Math.random();
const min = 1;
const max = 100;
const create_random_number = Math.floor((max - min)* a + min);
console.log( `Випадкова знижка: ${create_random_number}`);
document.writeln('<li>',`Випадкова знижка: ${create_random_number}`,'</li>')

// Price for customer

let price_discount = full_price - (full_price * (create_random_number / 100));
console.log (`Ціна із знижкою: ${price_discount}`);
document.writeln('<li>',`Ціна із знижкою:${price_discount}`,'</li>');

let round_number_discount = Math.round (price_discount * 100) / 100;
console.log(`Сума до оплати зі знижкою: ${round_number_discount}`);
document.writeln('<li>',`Сума до оплати зі знижкою: ${round_number_discount}`,'</li>')

// Profit
let cost_of_goods = full_price / 2;

let net_profit = Math.floor ( cost_of_goods - round_number_discount);
console.log(`Чистий прибуток: ${net_profit}`);
document.writeln('<li>',`Чистий прибуток складає: ${net_profit}`,'</li>')







