var btnTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")

function EventHandler(){
    outputDiv.innerText="yooo  " + txtInput.value;
};
btnTranslate.addEventListener("click" ,EventHandler)