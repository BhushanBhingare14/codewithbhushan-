/*
let lengths = [];
for (let i = 0; i < 10; i++) {
  let arr1 = prompt(`Enter element ${i + 1}:`);
  lengths.push(arr1);
}

for (let i = 0; i < 10; i++) {
  console.log(`Element ${i + 1}: ${lengths[i]}`);
}
*/

/*
let arr = [45, 3, 25, 78, 12];
for(let i = 0 ; i<=arr.length-1; i++){
   for(let j = i+1 ; j <=arr.length; j++){
    if(arr[i] > arr[j]){
         let temp = arr[j];
         arr[j] = arr[i];
         arr[i] = temp;
    }
   }
}
console.log(arr);
for(let i = 0 ; i<=arr.length-1; i++){
   for(let j = i+1 ; j <=arr.length; j++){
    if(arr[i] < arr[j]){
         let temp = arr[j];
         arr[j] = arr[i];
         arr[i] = temp;
    }
   }
}
console.log(arr);
*/
/*
let mixedArray = [12, "apple", 45, "banana", "cherry", 78, "orange"];
let number = mixedArray.filter(number=>typeof number==="number");
let string = mixedArray.filter(string => typeof string === "string");
console.log(number);
console.log(string)
*/
/*
let orgArray = [3, 12, 25, 45, 78];

let even = orgArray.filter((e,i)=>{
  return e%2==0
})
console.log(even);
*/
/*
let orgArray = [3, 12, 25, 45, 78];

let even = orgArray.filter((e,i)=>{
  return e%2!=0
})
console.log(even);
*/

let numbers = [45, 3, 25, 78, 12];
let sum = 0;
for(let i of numbers){
  sum+=i;
}
console.log(sum);

