/*
const Profile = {
    name : prompt("Enter a name"),
    age : +prompt("Enter a your age"),
    email : prompt("Enter a email")
}
console.log(Profile["name"],Profile["age"],Profile["email"]);
console.log(Profile);  
Object.entries(Profile).forEach(([key, value]) => {
  console.log(`"${key}: ${value}"`);
}); 
*/




let product = {
  productName : prompt("Enter a Product Name "),
  price: 79.99,
  instock : prompt("Enter a avability")
}
if(product.instock == "true"){
   product.instock = "Yes";
}
else{
  product.instock = "No";
}

console.log(product)





/*
const Book = {
  title: "1984",
  isbn: "978-0451524935",
  publicationYear: 1949
}
const Author = {
  authorName: "F. Scott Fitzgerald",
  nationality: "American",
  book: Book,
};
console.log(Author.book["title"],Author.authorName,Author.book["publicationYear"])
console.log(Author.book.title, Author.authorName, Author.book.publicationYear, Author.nationality);
console.log(Book)
*/


/*
const preference = {
  darkMode: "true",
  emailNotifications: prompt("true or false"),
  locale: "en-US",
};

if(preference.emailNotifications == "true"){
    delete preference.emailNotifications
}
console.log(preference)
*/

// const a = document.getElementById('bhu')

// let c = 10;
// setTimeout(()=>{
//   a.textContent = "WelCome Everyone";
//   timer()
// },1000);

// function timer(){
//   let x = setInterval(()=>{
//     a.textContent = c--;
//     if(c==0){
//       a.textContent = "Happy Birthday Sahil"
//       clearInterval(x)
//     }
//   },1000)
// }
let m = 5;
let s = 60;

