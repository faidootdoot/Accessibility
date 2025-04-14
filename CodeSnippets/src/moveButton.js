import {faker} from '../node_modules/@faker-js/faker'


let  goButton = document.getElementById('Go');
let  outputLabel = document.getElementById('output');
goButton.addEventListener("click", updateLabel);

function updateLabel(){

    outputLabel.innerText = faker.person.fullName();
    
    goButton.style.border = "10px";
    
 
}

function moveButton(){

    goButton.style.alignItems = "center"
}