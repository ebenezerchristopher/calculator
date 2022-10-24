function add(num1, num2) {
  return num1 + num2;
}
function minus(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

function operate(operator, num1, num2) {
  let num11 = Number(num1), num22 = Number(num2);
  console.log(operator)
  if (`${operator}` === "*") {
    return multiply(num11, num22);
  } else if (`${operator}` === "+") {
    return add(num11, num22);
  } else if (`${operator}` === "/") {
    return divide(num11, num22);
  } else if (`${operator}` === "-") {
    return minus(num11, num22);
  }
}

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", (event) => {
  let display = document.querySelector(".display");
  displayValue = "";
  operand1 = "";
  operand2 = "";
  operator = "";
  isOperate = false;
  result = "";
  display.textContent = "";
});

let displayValue = "";
let operand1 = "";
let operand2 = "";
let operator = "";
let result = 0;
let isOperate = false;

function populate(caller) {
  let display = document.querySelector(".display");
console.log("called")
  if (isOperate) {
    displayValue = `${result}`;
    display.textContent = displayValue;
  } else {
    displayValue += caller.target.textContent;

    display.textContent = displayValue;
  }
}

let numbers = document.querySelectorAll(".number");

numbers.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (!operand1) {
      populate(event);
      operand1 += event.target.textContent;
      console.log(typeof operand1)
    } else if (operand1 && operator) {
      operand2 = event.target.textContent;
      populate(event);
      console.log(typeof operand2)
    } else if (isOperate) {
      isOperate = false;
      displayValue = "";
      operand2 = "";
      populate(event);
      operand1 = event.target.textContent;
      console.log(typeof operand1)
    } else if (operand2) {
      populate(event);
      operand2 += event.target.textContent;
      console.log(typeof operand2)
    } else {
      populate(event);
      operand1 += event.target.textContent;
      console.log(typeof operand1)
    }
  });
});

let operators = document.querySelectorAll(".operators");

operators.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (displayValue) {
      if (isOperate) {
        isOperate = false;
        populate(event);
        operand1 = `${result}`;
        result = 0;
        operator = event.target.textContent;
        operand2 = "";
      } else if (operand2) {
        result = operate(operator, operand1, operand2);
        operator = event.target.textContent;
        operand2 = "";
        operand1 = `${result}`;
        populate(event);
        
        console.log(result)
      } else if (operand1) {
        populate(event);
        operator = event.target.textContent;
      }
    }
  });
});

let assignOperator = document.querySelector(".equals");
assignOperator.addEventListener("click", (event) => {
  if (result && !operand2) {
    isOperate = true;
    populate(event);
    
  } else if (operand2) {
    result = operate(operator, operand1, operand2);
    isOperate = true;
    populate(event);
    operator = "";
    operand2 = "";
    operand1 = "";
    console.log(typeof result)
    console.log(result)
  }
});
