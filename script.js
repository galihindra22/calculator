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
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
    }
    else if((values === "+" || values === "-" || values === "/" || values === "*") && operator === undefined){
        num1 = display.textContent;
        operator = values;
        resetDisplay = true;
    }
    else if((values === "+" || values === "-" || values === "/" || values === "*") && operator !== undefined){
        num2 = display.textContent;
        num1 = operate(num1, operator, num2);
        operator = values;
        num2 = undefined;
        display.textContent = num1; 
        resetDisplay = true;
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
        }
        display.textContent += values;
    }

    if(num1 !== undefined && num2 !== undefined && operator !== undefined){
        num1 = operate(num1, operator, num2);
        operator = values;
        num2 = undefined;
        display.textContent = num1; 
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