/*
let a = +prompt("Enter any value");
(a % 2 == 0 ) && console.log("Even") || (a%2!=0) && console.log("Odd");
*/

/*
let a = 10, b = 20;

a > b && console.log(`a is a greater`) || a < b && console.log(`b is a greater`)
*/

/*
let a = +prompt("Enter any value");
let b=+prompt("Enter any value");
let c= +prompt("Enter any value");

(a > b && a > c ) && console.log("a is max") || (a < b && b > c) && console.log('b is max') || (a < c && b < c) console.log("C is max");
*/

/*
let a = +prompt("Enter any value");
(a % 2 == 0 ) ? console.log("Even") :  console.log("Odd");

*/

/*
let tv = 3500.0;
let profit = 27;
let vat = 12.7;
let ser = 3.87;

profit = Math.floor((profit / 100) * tv);

let selling = tv + profit;

vat = Math.floor((vat / 100) * selling);

ser = Math.floor((ser / 100) * selling);

let bill = tv + profit + vat + ser;
console.log(`Cost Price: Rs. ${tv.toFixed(2)}`);
console.log(`Profit (27%): Rs. ${profit.toFixed(2)}`);
console.log(`Selling Price(without VAT & Service Charge): Rs. ${selling.toFixed(2)}`);
console.log(`Vat (12.7%): Rs. ${vat.toFixed(2)}`);
console.log(`Service Charge (3.87%): ${ser.toFixed(2)}`);
console.log(`Total bill is Rs. ${bill.toFixed(2)}`);

*/

/*
let age = +prompt("Enter your age")
const ticket = 300
let n = +prompt("Number of ticket you want");
let dis = 20;
let total = n * ticket;
let disc = 0
dis = (20 / 100) * total;

price = total - dis
age >= 65 && age <= 100  ? console.log(
      `Total cost before discount: Rs. ${total} Discount amount: Rs. ${dis} Total cost after discount: Rs.${price}`
    )
  : console.log(
      `Total cost before discount: Rs. ${total} Discount amount: Rs. ${disc} Total cost after discount: Rs.${total}`
    );

*/

let num = +prompt("Enter any number only");


(num >= 1)
  ? console.log(" You entered Positive number")
  : (num < 0)
  ? console.log(" You entered Negative Number")
  : console.log(" You entered Zero"); 







