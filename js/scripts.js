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
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#outputAdd").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#outputSubtract").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#outputMultiply").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#outputDivide").text(result);
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