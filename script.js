let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#userInput");
let divOutput = document.querySelector("#output");

let serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function generateserveQuery(text) {
  return serverUrl + "?" + "text=" + text;
}

function clickHandler() {
  // divOutput.innerText = "hehehhe " + txtInput.value;
  let userTextInput = txtInput.value;
  fetch(generateserveQuery(userTextInput))
    .then((response) => response.json())
    .then((json) => {
      let translatedString = json.contents.translated;
      console.log(translatedString);
      divOutput.innerText = translatedString;
    });
}

btnTranslate.addEventListener("click", clickHandler);
