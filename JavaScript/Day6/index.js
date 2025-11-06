/*
let password = prompt("Enter a password");
let hasDigit = false;

let minlength = 8;
let x;

function checkPasswordStrength(password){
    if(password.length >= 8){
        for(let i = 0 ; i<=password.length; i++){
          ch = password.charAt(i);
          if(ch >= '0' && ch <= '9'){
            hasDigit = true;
          }
        }
    }
    else{
        console.log("to short");
    }
}
checkPasswordStrength(password);
console.log(`Password = ${password} Min [${minlength}]`)
if(hasDigit==true){
    console.log( hasDigit)
}
else{
    console.log(` ${hasDigit}(no digit)`);
}
*/




/*
let str = prompt("Enter any string");
console.log(str);
 let isVowel = false;
 let isConsonant = false;

function analyzeWordForVowelConsonant(str) {
  
  for (let i = 0; i < str.length; i++) {
   
      let st = str[i].toLowerCase();
     
      if (st === 'a' || st === 'e' || st === 'i' || st === 'o' || st === 'u') {
        isVowel = true;
      } else {
        isConsonant = true;
      }
    
      if(isVowel && isConsonant){
        break;
      }
    
      }
  
  

}

analyzeWordForVowelConsonant(str);
  if (isConsonant && isVowel) {
    console.log("The string contains vowel and consonants");
  } else if (isVowel == true) {
    console.log("The string contains only vowels");
  } else {
   console.log("The string contains only consonants");
  }
   */

/*
let x = prompt("Enter a string");
let str = "";
for (let i = x.length; i >= 0; i--) {
  str += x.charAt(i);
}
console.log(str);
*/
let name = prompt("Enter a name");
let x = ((p)=>{
   let y = p.toUpperCase;
})


