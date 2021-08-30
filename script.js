const userInput = document.getElementById("input-box");
var expression = "";
var result = 0;

function press(num) {
  expression += num; // "" + 2 --> "2" || "" + 3 + "" + 4 --> "34"
  userInput.value = expression;
}

function equal() {
  result = eval(expression);
  userInput.value = result;
  expression = "";
  expression += result;
}

function eraseOne() {
  expression = expression.slice(0, expression.length - 1);
  userInput.value = expression;
}

function eraseAll() {
  expression = "";
  userInput.value = expression;
}