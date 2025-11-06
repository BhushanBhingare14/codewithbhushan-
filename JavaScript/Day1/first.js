// // Sum 
// let a=10, b=5;
// let c=a+b;
// console.log("The sum is "+c);


// // Mul
// let d = 10,  e = 5;
// let f = d * e;
// console.log("The mul is " +f);


// // Sub
// let g = 10,  h = 5;
// let i = g - h;
// console.log("The sub is " +i);

// let bh = +prompt("Enter bh value");
// let ch  = +prompt("Enter ch value");

// let cs = bh+ch;
// console.log("The sum is "+cs);

// let x = +prompt("Enter a value ");
// let y = +prompt("Enter a value ");

// let area = 2 * (x+y);

// console.log("The area of rectangle is "+area);

// let num = 25.4168;
// // number
// console.log(typeof a);
// // It will round up for it two digit after decimal point
// console.log(num.toFixed(2));  
// //it will round up for 3 digits from  starting 
// console.log(num.toPrecision(3));

// num=25;
// //toString convert number into string of any base
// console.log(num.toString(2));

// //math methods

// console.log(Math.sqrt(16));
// console.log(Math.cbrt(27));
// console.log(Math.pow(2,3));
// console.log(Math.abs(-10));
// console.log(Math.max(5,3));
// console.log(Math.min(5,0,9,-1));
// // 3 is because nearest greater value
// console.log(Math.ceil(2.1));
// //2 is because nearest to the smallest 
// console.log(Math.floor(2.8));
// //nearest value
// console.log(Math.round(2.6));



x = +prompt("Enter a number");

if(Math.ceil(Math.random()*14)==x){
    console.log("Won")
}
else{
    console.log("loss");
}