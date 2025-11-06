const form = document.querySelector('#fr')
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("cnfrmPwd");
const emailInput = document.getElementById("email");
const errorsDiv = document.getElementById("error");

function add(){
    form.classList.toggle('hide')  
    }

document.getElementById("btn").addEventListener('click',  add);
function submitLogic (e){
    e.preventDefault();
    errorsDiv.textContent = ""
    if (nameInput.value == "") {
      const p = document.createElement("p");
      p.textContent = "name is required";
      errorsDiv.append(p);
    }
     if (emailInput.value == "") {
       const p = document.createElement("p");
       p.textContent = "email is required";
       errorsDiv.append(p);
     }
     if (passwordInput.value.trim() == "") {
       const p = document.createElement("p");
       p.textContent = "password is required";
       errorsDiv.append(p);
     }
     if (confirmPasswordInput.value.trim() == "") {
       const p = document.createElement("p");
       p.textContent = "conformPassword is required";
       errorsDiv.append(p);
     }
     if (passwordInput.value.length <= 8) {
       const p = document.createElement("p");
       p.textContent = "password Should be 8 character";
       errorsDiv.append(p);
    }  
    if (passwordInput.value != "" && confirmPasswordInput.value != ""  &&passwordInput.value !=  confirmPasswordInput.value ) {
      const p = document.createElement("p");
      p.textContent = "password is not matching";
      errorsDiv.append(p);
    } 

}
document.getElementById('fr').addEventListener('submit', submitLogic);

 
