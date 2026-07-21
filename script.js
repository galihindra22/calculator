let num1;
let num2;
let operator;
let resetDisplay = false;
let res;

const buttons = document.querySelectorAll("button");
buttons.forEach(element => {
    const value = element.textContent;
    element.addEventListener("click", () => display(value));
});

function display(values){
    const display = document.getElementById("display");
       
    if(values === "C"){
        display.textContent = "";
    }
    else if(values === "+" || values === "-" || values === "/" || values === "*"){
        num1 = display.textContent;
        operator = values;
        console.log(operator);
        console.log(num1);
        resetDisplay = true;
    }
    else if(values === "="){
        if(num1 !== undefined){
            num2 = display.textContent;
            console.log(num2);
        }

    }
    else{
        if(resetDisplay === true){
            display.textContent = "";
            resetDisplay = false;
        }
        display.textContent += values;
    }

    if(num1 !== undefined && num2 !== undefined && operator !== undefined){
        display.textContent = operate(num1, operator, num2);
    }
    
}

function operate(num1, operation, num2){
    //if operation equals to something call that function something
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(operation){
        case "+": 
            res = add(num1, num2);
            break;
        case "-":
            res = substract(num1, num2);
        case "*":
            res = multiply(num1, num2);
        case "/":
            res = divide(num1, num2);
    }
    return res;
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