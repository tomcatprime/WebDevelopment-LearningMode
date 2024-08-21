var age = prompt("What is your age?");
var weight = prompt("What is your weight?");
var height = prompt("What is your height? Type in m");
function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);
    return "Your BMI is " + Math.round(bmi);
};

bmiCalculator(29, 1.8);
