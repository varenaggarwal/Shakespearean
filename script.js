let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#userInput");
let divOutput = document.querySelector("#output");

function clickHandler(){
  divOutput.innerText = "hehehhe " + txtInput.value;  
};

btnTranslate.addEventListener("click" , clickHandler);
