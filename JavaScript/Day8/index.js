/*
let numbers = [45, 3, 25, 78, 12];

 numbers.sort((a,b)=> a-b) // a - b positive answer given ascending
console.log(numbers);
*/


/*
let numbers = [45, 3, 25, 78, 12];

numbers.sort((a, b) => b - a); // b - a negative answer given decending
console.log(numbers);
*/


/*
let mixedArray = [12, "apple", 45, "banana", "cherry", 78, "orange"];
let number = mixedArray.filter((number) => typeof number === "number");
let string = mixedArray.filter((string) => typeof string === "string");
console.log(number);
console.log(string);
*/


/*
let orgArray = [2,3,4,5,6,7,8,10,12,13];

let even = orgArray.filter((e,i)=>{
  return e%2==0})
console.log(even);
let odd = orgArray.filter((e,i)=>{
  return e%2!=0
})
console.log(odd);
*/


/*
let namesArray = ["ravindra", "rohit", "aniket"];

 let x = namesArray.map((e)=>e.toUpperCase());
console.log(x);
*/


/*
const nums = [10, 20, 30, 40, 50];
let x = nums.reduce((pre , curr) => {
  return pre + curr;},0)
  x/=nums.length;
  console.log(x);
*/


/*
let userInput = prompt("Enter a number");
let numberArr = userInput.split(",").map(num => parseInt(num.trim()));
let y = numberArr.reduce((pre,curr)=>{
  return pre + curr;},0)
  console.log(y);
*/



  
