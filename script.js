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
        display.textContent = "0";
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
    }
    else if((values === "+" || values === "-" || values === "/" || values === "*")){
        if(operator === undefined){
            num1 = display.textContent;
            operator = values;
            resetDisplay = true;
        }
        else if(resetDisplay ===true){
            operator = values;
        }
        else{
            num2 = display.textContent;
            num1 = operate(num1, operator, num2);
            operator = values;
            num2 = undefined;
            display.textContent = num1; 
            resetDisplay = true;
        }
    }
    else if(values === "="){
        if(num1 !== undefined){
            num2 = display.textContent;
        }

    }
    else{
        if(resetDisplay === true){
            display.textContent = "";
            resetDisplay = false;
            if(operator === undefined){
                num1 = undefined;
            }
        }
        if(display.textContent === "0"){
            if(values === "0"){
                display.textContent = "0";
                return;
            }
            else{
                display.textContent ="";
            }
        }
        display.textContent += values;
    }

    if(num1 !== undefined && num2 !== undefined && operator !== undefined){
        num1 = operate(num1, operator, num2);
        display.textContent = num1; 
        operator = undefined;
        num2 = undefined;
        resetDisplay = true;
    }
    
}

function operate(num1, operation, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(operation){
        case "+": 
            res = Number(add(num1, num2).toFixed(4));
            break;
        case "-":
            res = Number(substract(num1, num2).toFixed(4));
            break;
        case "*":
            res = Number(multiply(num1, num2).toFixed(4));
            break;
        case "/":
            res = Number(divide(num1, num2).toFixed(4));
            break;
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