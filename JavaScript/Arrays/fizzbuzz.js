var output = [];
var count = 1;

function fizzBuzz() {
    output.push(count);
    
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
        count++
    } else if (count % 3 === 0) {
        output.push("Fizz")
        count++
    } else if (count % 5 === 0) {
        output.push("Buzz")
        count++
    }
}