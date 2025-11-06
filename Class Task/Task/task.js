/*

Que no 1
let a = [5,1,6,9]

let s = 0

for(let i of a){
    s += i
}
console.log(`Sum of array is ${s}`);
*/

/*
Que no 2
let a = +prompt("Enter a number"), sum = 0, mul = 1;

for(let i=0 ; i<=a.length; i++){
    let r = a%10;
    sum += r;
    mul = mul * r;
    r=Math.floor(r/=10);

}
if(sum==mul){
    console.log(`${a} is strong`)
}
else{
    console.log(`${a} is not strong`)
}
*/

// let arr = [[10, 20, 10, 50],[0, 10, 30, 40],[10, 10, 10, 10]];


// for(let i of arr){
//    let sum = 0;
//    for(let j of i){
//     sum += j
//    }
//    console.log(sum)
// }

// let str = "prasad",
//   str2 = "";
// for (let i = 0; i < str.length; i++) {
//   str2 = str2 + str.charAt(i);
//   console.log(str2); // " p r"
// }

let c = 0;
function incr(){
  c++;
  document.getElementById('count').textContent = c;
}
function decr() {
  if(c>0){
  c--;
  
  document.getElementById("count").textContent = c;
  }
}
function rest() {
  c=0;
  document.getElementById("count").textContent = c;
}