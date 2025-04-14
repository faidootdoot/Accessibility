import {faker} from '@faker-js/faker'

let  goButton = document.getElementById('Go');
let  outputLabel = document.getElementById('output');
goButton.addEventListener("click", updateLabel);

function updateLabel(){

    outputLabel.innerText = "jsdkjfksjfd"
    
    goButton.style.border = "10px";
    
 
}

function moveButton(){

    goButton.style.alignItems = "center"
}