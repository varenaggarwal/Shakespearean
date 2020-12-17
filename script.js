let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#userInput");

function clickHandler(){
  console.log("Clicked!");
  console.log("Input : " + txtInput.value)
};

btnTranslate.addEventListener("click" , clickHandler);
