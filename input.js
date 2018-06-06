//input.js

document.addEventListener('keyup', function(event) {
  if(event.keyCode === 13){
    count();
  }
});
/*
function checkEnter (code) {
  console.log("ENTER!");
  if(code.keyCode == 13){
    count();
  }
}
*/
function count() {
  let strInput = eval(document.getElementById("display").value).toFixed(3);
  let res = (strInput % 1 == 0) ? parseInt(strInput) : strInput;
  document.getElementById("display").value = res;
}

function backspace(){
  let reg = /[a-z]/i;
  let res = document.getElementById("display").value;
  if(!res.search(reg)){
    document.getElementById("display").value = "";
  }else {
    document.getElementById("display").value = res.slice(0, -1);
  }
}

function ce(){
  document.getElementById("display").value = "";
}

function addOnDisplay(ch){
  let inputValue = document.getElementById("display").value;
  inputValue += ch;
  document.getElementById("display").value = inputValue;
}
