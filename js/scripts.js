var add = function(number1, number2) {
  return number1 + number2;
};

var substract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var question = prompt ("You would like to do add (1), substract (2), multiply (3) or divide (4)")

if (question === "1") {
  var num1 = parseInt(prompt("Enter a number:"));
  var num2 = parseInt(prompt("Enter another number:"));
  alert(add(num1, num2));
} else if (question === "2") {
  num1 = parseInt(prompt("Enter a number:"));
  num2 = parseInt(prompt("Enter another number:"));
  alert(substract(num1, num2));
} else if (question === "3") {
  num1 = parseInt(prompt("Enter a number:"));
  num2 = parseInt(prompt("Enter another number:"));
  alert(multiply(num1, num2));
} else if (question === "4") {
  num1 = parseInt(prompt("Enter a number:"));
  num2 = parseInt(prompt("Enter another number:"));
  alert(divide(num1, num2));
} else {
  alert ("You provided wrong input. Please, refresh the page")
}    
