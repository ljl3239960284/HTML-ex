let currentOperation = '';
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  currentOperation = '';
  updateDisplay();
}

function operate(operator) {
  if(currentInput) {
    compute();
  }
  currentOperation = operator;
  currentInput += operator;
  updateDisplay();
}

function compute() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    updateDisplay('Error');
  }
}

function updateDisplay(value = currentInput) {
  document.getElementById('display').value = value;
}
