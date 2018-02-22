
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

for (i=0; i < newArray.length; i++) {
	console.log(newArray[i]);
}

*/

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





/*for (i = 0; i < 10; i++) {
	console.log(number1);
	number1++;
}*/

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
