
let num1;
let num2;
let operation;

const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach(element => {
    const value = element.textContent;
    element.addEventListener("click", () => display(value));

       
});


function display(value){
    const display = document.getElementById("display");
    if(value === "C"){
        display.textContent = "";
    }
    else{
        display.textContent += value;
    }
    
}

function operate(num1, operation, num2){
    //if operation equals to something call that function something
    
}

function add(num1, num2){
    return num1+num2;
}

function substract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}