var btnTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")
// var Url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="
var Url="https://api.funtranslations.com/translate/minion.json?text="

function getUrl(text){
    return Url+ text
}
function errorHandler(error){
    console.log("error occured "+error)
    alert("Unfortunately our server is down right now! Please check back after some time!")
}
var inputtext=txtInput.value
function EventHandler(inputtext){
    fetch(getUrl(inputtext))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated
        outputDiv.innerText=translatedText
    })    
    .catch(errorHandler)
};
btnTranslate.addEventListener("click" ,EventHandler)