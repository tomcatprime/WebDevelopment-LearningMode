// variable

var nameOfVariable = "Something";

var myNickname = "tomcatprime"

// var yourName = prompt("Type your name")

alert("My name is " + myNickname + ". Welcome to my course");

function test() {
    var a = "3";
    var b = "8";

    var c = a;
    a = b;
    b = c;

    console.log("a is " + a);
    console.log("b is " + b);
}

test()

// concatenating strings
// var firstName = "John";
// var lastName = "Doe";
// var fullName = firstName + " " + lastName;

// console.log(fullName);

// alert("Welcome to the course" + " " + fullName);

// // string lenghts and retriecing the NUmber of Characters
// var text = "abcdefghijklmnop";
// var textLenght = text.length;
// console.log(textLenght);

// var firstChar = text[0];
// var secondChar = text[1];

// console.log(firstChar + " " + secondChar);

// var tweet = prompt("Compose your tweet:");
// var tweetCount = tweet.length;
// alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining");

// // slicing and extracting Parts of a String
// var slicing = tweet.slice(0, 3);
// console.log(slicing);

// var tweetUnder140 = tweet.slice(0, 140);
// console.log(tweetUnder140);


var userName = prompt("What is your name?");
var letter = userName.slice(0, 1);
var nameOtherPart = userName.slice(1, userName.length); 
var letterCapitalized = letter.toUpperCase();
var nameCapitalized = letterCapitalized + nameOtherPart;
alert("Hello " + nameCapitalized + "!");


// functions

function nameOfFunction() {
    username = prompt("What is your username?");
    age = prompt("What is your age?");
    alert("Your username is " + username + " and your age is " + age);

};

var bottles = prompt("How many bottles do you want to buy?");

function getMilk (bottles) {
    var cost = bottles * 2;
    console.log("Milk cost " + cost);
};
getMilk(3);

var money =prompt("How much money do you have?");
function getBread (pieces) {
    var cost = pieces * 2;
    var leftMoney = money - cost;
    return leftMoney
};

