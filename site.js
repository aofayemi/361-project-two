"use strict";
function myFunction() {
    document.getElementById("transfer");
    element.className = "transfer";
}

var myElement = document.querySelector("#paragraph");
myElement.style.text.indent = 1;

//Return if no javascript
(function(){
  if(typeof document.querySelector === 'undefined'){
    return;
  }
  else {
    console.console.log("working");
  }
});
