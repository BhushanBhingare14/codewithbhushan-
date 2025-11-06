/* 

Que 1
let isAccountActive = prompt("Enter a boolean type").toLowerCase();

if(isAccountActive == "true"){
    console.log(
      "Your account is active. You can proceed with your transaction."
    );
}
else{
    console.log("Your account is currently inactive. Please contact support.");
}
*/

/*

Que 2
let password = prompt("Enter a password");
let n = password.length;

if(n>8){
  console.log("Password meets minimum length requirements. Good job!");
}
else{
    console.log("Password is too short. Please use at least 8 characters.");
}
    */

/*

Que 3
let totalSpending = +prompt("Enter a spending amount");

if (totalSpending > 1000) {
  console.log(`Customer's total spending: $${totalSpending} Loyalty Tier : Platinum.`);
} else if (totalSpending > 500) {
  console.log(`Customer's total spending: $${totalSpending} Loyalty Tier : Gold.`);
}
else{
    console.log(
      `Customer's total spending: $${totalSpending} Loyalty Tier : silver.`
    );
}
    */

/*

Que 4
let speed = +prompt("Enter a speed of a vechile");

if(speed >= 75 && speed < 100){
    console.log(`Vehicle speed: ${speed}km/h. Classification: fast`);
}
else if( speed >= 100){
    console.log(`Vehicle speed: ${speed}km/h. Classification: Excessive`);
}
else{
    console.log(`Vehicle speed: ${speed}km/h. Classification: Slow`);
}
    */
/*

Que 5
let member = prompt("Enter member or not").toLowerCase();
let purchase = +prompt("Enter a purchase amount")
if(member == "true"){
    console.log("User is a member.")
    
    if (purchase > 200) {
      console.log("Qualifies for a 15% member discount!");
      let dis = Math.floor((15 / 100) * purchase);
      let dist = purchase - dis;
      console.log(`Original Price: ${purchase}, Final Price: $${dist}`);
    }
     else if (purchase > 100) {
      console.log("Qualifies for a 10% member discount!");
      let dis = Math.floor((10 / 100) * purchase);
      let dist = purchase - dis;
      console.log(`Original Price: ${purchase}, Final Price: $${dist}`);
    }
    else if(purchase < 100) {

        console.log(`purchase total is too low for an extra discount.`);
    }

}
else {
    console.log("User is a not member.");
    if(purchase>500){
        console.log("Qualifies for a 5% general discount on large order.");
        let dis = Math.floor((5 / 100) * purchase);
        let dist = purchase - dis;
        console.log(`Original Price: ${purchase}, Final Price: $${dist}`);
    }
    else{
        console.log(`Original Price: ${purchase}, Final Price: $${purchase}`)
}
}
*/
// Que 6
/*
let day = +prompt("Enter a day number");

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tueday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Satuarday");
    break;
  case 5:
    console.log("Thursday");
    break;
}
*/

let operator = prompt("Enter a operator")
let a = +prompt("Enter a value")
let b = +prompt("Enter b value")

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
}