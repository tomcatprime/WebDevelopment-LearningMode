// // random number
// var n = Math.random();

// n = n * 6;

// // random number between 1 and 6
// n = Math.floor(n * 6) + 1;


var name1 = prompt("What is name no.1")
var name2 = prompt("What is name no.2")

var n = Math.random(n);
n = n * 100;
var loveScore = Math.floor(n) + "%";
alert("Your love score is " + loveScore)


if (loveScore === 100) {
    alert("You are made for each other");
} else (loveScore > 70 && loveScore < 100); {
    alert("You are good to go");
};


//who's paying lunch
// Create an empty array to store the names
function whosPaying(names) {
const datas = [];

// Add all names from the `names` array to the `datas` array
datas.push(...names);

// Generate a random number between 0 and the length of the `datas` array
const randomNum = Math.floor(Math.random() * datas.length);

// Select a random name from the `datas` array
const selectPerson = datas[randomNum];

return selectPerson + " is going to buy lunch today!";
}

// 

function whosIsPayingg(names) {
    var numberofPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberofPeople);  
    var randomPerson =names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today!";
}