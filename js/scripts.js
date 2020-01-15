var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#firstInput").val());
    var number2 = parseInt($("#secondInput").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});


// Activate code below to use branching
// var question = prompt ("You would like to do add (1), substract (2), multiply (3) or divide (4)")

// if (question === "1") {
//   var num1 = parseInt(prompt("Enter a number:"));
//   var num2 = parseInt(prompt("Enter another number:"));
//   alert(add(num1, num2));
// } else if (question === "2") {
//   num1 = parseInt(prompt("Enter a number:"));
//   num2 = parseInt(prompt("Enter another number:"));
//   alert(substract(num1, num2));
// } else if (question === "3") {
//   num1 = parseInt(prompt("Enter a number:"));
//   num2 = parseInt(prompt("Enter another number:"));
//   alert(multiply(num1, num2));
// } else if (question === "4") {
//   num1 = parseInt(prompt("Enter a number:"));
//   num2 = parseInt(prompt("Enter another number:"));
//   alert(divide(num1, num2));
// } else {
//   alert ("You provided wrong input. Please, refresh the page")
// }    




// Active code below to calculate BMI
// var height = parseFloat(prompt("Enter your height in meters:"));
// var weight = parseInt(prompt("Enter your weight in kg:"));

// var bmi = weight / Math.pow(height, 2);

// alert("Your BMI is " + bmi);