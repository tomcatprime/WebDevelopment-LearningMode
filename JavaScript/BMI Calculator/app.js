var age = prompt("What is your age?");
var weight = prompt("What is your weight?");
var height = prompt("What is your height? Type in m");
function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);
    return "Your BMI is " + Math.round(bmi);
};

bmiCalculator(29, 1.8);

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height)
    if (bmi > 24.9) {
        var interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    } else if (bmi > 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    return interpretation;
}


// Leap year
function isLeap(year) {
  //Write your code here.
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }
}


