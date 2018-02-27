
/*
var number1 = 0;
var number2 = 10;
var letter1 = "a";
var letter2 = "b";
var compOperator = true;

/*var num1=20, text3= "text", sunny = "true";

while (number1 <=20) {
	console.log(number1);
	number1++
}

for (i = 0; i < 20; i++) {
	console.log("goodbye");

	for (e = 0; e < 10; e++) {
		console.log("inner loop");
	}
}

var myfirstArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

myfirstArray[3] = "does not exist"; //this is how you change existing data from array.

myfirstArray.push("extra day");

var mycurrentday = myfirstArray[3];  //this is how you pull data from array.

for (var i = 0; i < 10; i++) {
	console.log(myfirstArray[i]);
}


var newArray = ["1", "2", "3", "4", "5"];

for (var i = 0; i < newArray.length; i++) {
	console.log(newArray[i]);
}

*/

/*
var x = 0;
var y = "*";

while ( x < 20 ) {
	console.log(y);
	y = y + "*";
	x++;
}

var z =y.split(''); // this converts the lat while loop iteration into an array

//this for loop pops the last item of the array, then converts the array into string and finally removes the "," and joins the string.
for(i = z.length; i >= 0; i--) {
	z.pop();
	z.toString();
	console.log(z.join(""));
}



/*
console.log(letter1);
console.log(letter2);

console.log(letter1 + " " + letter2);

if (number1 < number2) {
	console.log("true");
}

for (i = 0; i < 10; i++) {
	console.log('hello');
}

if (letter1 != letter2) {
	console.log("this is false");

	if (number1 != number2) {
		console.log("this is also false");
	}
}

// this is an example of a nested loop that will not run because the if statement is false.
if (number1 > number2) {
	 console.log("these numbers are equal now");

	for (var i = 0; i < 18; i++) {
		number1 = number1 + 1;
	}
}

var otherArray = [number1, number2, letter1, letter2, compOperator];
console.log(otherArray);

function print(text) {
	console.log(text);
}

print("Hello World!");



//DON is Document Object Model

// this is how to add a p tag inot html dinamically
var niceDay = '<p>Today\'s weather is really nice!</p>';
var badDay = '<p>Today\'s weather is really bad!</p>';


day = prompt("type 'sunny' or 'rainy'");

if (day == "rainy") {

document.getElementById("test").innerHTML = badDay;

} else if (day == "sunny") {
	document.getElementById("test").innerHTML = niceDay;
}


var name = 10;

console.log(`the number is ${name}`); //use the symbol above the tab key " ` " to be able to use interpolation in javascript. interpolation is what is inside the ${ }
*/
/*
var firstNumber = prompt("type in the first number");

firstNumber = parseInt(firstNumber);

var secondNumber = prompt("type in second number");

secondNumber = parseInt(secondNumber);

var thirdNumber = firstNumber * secondNumber;

console.log(thirdNumber);

document.getElementById("test").innerHTML = "<h1>" + thirdNumber + "</h1>";

*/

// this code below does the same as the code above. 
/*
function myFunction(firstNumber, secondNumber) {

	firstNumber = parseInt(firstNumber);
	secondNumber = parseInt(secondNumber);
	thirdNumber = firstNumber * secondNumber;
	console.log(thirdNumber);
}

myFunction(prompt("enter first number"), prompt("enter second number"));

document.getElementById("test").innerHTML = "<h1>" + thirdNumber + "</h1>";
*/


//this is to generate a random quote and put it into an html page
var quotes= ["hello", "world", "my", "yo", "no"];

// this prints a random number from 0 to 0.99
var randomNumber = Math.random() * quotes.length;

randomNumber = Math.floor(randomNumber);

document.getElementById("test").innerHTML = quotes[randomNumber];