// document.addEventListener('keydown', function(e){
//     if(e.key){
//         document.getElementById("para").textContent="Hello World"
//     }
// })


const text = document.getElementById("text");
let count = 0;
text.addEventListener("input", function (e) {
  document.getElementById("out").textContent = text.value.length;
  if (text.value.length > 100) {
    document.getElementById("out").textContent = "“you reached a limit”.";
    document.getElementById("out").style.color = "red";
  }
});
