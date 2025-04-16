//import {faker} from '../node_modules/@faker-js/faker'

let  goButton = document.getElementById('Go');
let  outputLabel = document.getElementById('output');
goButton.addEventListener("click", updateLabel);

function updateLabel(){

    outputLabel.innerText = Math.Floor(Math.random()*1000)
 
}

function moveButton(){

    goButton.style.alignItems = "center"
}