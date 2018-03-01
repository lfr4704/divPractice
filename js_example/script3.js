//1.  fuctions 1 and 2 are for radio buttons. this is a function that calls for the function below "calculate(action)"

function operator() {
	var selector = document.getElementById("result");
	if (document.getElementById("multiply").checked) {
		selector.value = calculate('multiply');
	}

	if (document.getElementById("devide").checked) {
		selector.value = calculate('devide');
	}

	if (document.getElementById("add").checked) {
		selector.value = calculate('add');
	}
	if (document.getElementById("subtract").checked) {
		selector.value = calculate('subtract');
	}
}

//2. this is a function that calculates the math operation according to user selection 

function calculate(action) {
	var firstNum = document.getElementById("num1").value; //value is a method that saves thet value of the id to firstNum
	var secondNum = document.getElementById("num2").value; //value is a method that saves thet value of the id to firstNum
	var result;  //create an undefined variable to be called out later
// use of a switch in lieu of multiple if statement
	switch(action) {
		case 'multiply':
			result = parseInt(firstNum) * parseInt(secondNum);
			break;
		case 'devide':
			result = parseInt(firstNum) / parseInt(secondNum);
			break;
		case 'add':
			result = parseInt(firstNum) + parseInt(secondNum);
			break;
		case 'subtract':
			result = parseInt(firstNum) - parseInt(secondNum);
			break;
	}
	return result;
}


//3. this is a simple function that concantenates a book title and author
function bookCatalog(title,author) {

	return title + ", " + author;
}

console.log(bookCatalog("The old man and the sea", "Ernest Hemingway"));


//4.  this is a function that stores an array inside the function and a destination is randomly selected.

var cities = [];


function destination() {
	cities = ["Mexico", "China", "Japan", "South Africa", "Brazil", "Australia", "Croatia", "Cuba"];
	randomCities = Math.random() * cities.length;
	randomCities = Math.floor(randomCities);
	return cities[randomCities];
	// arguments[0,1,...] is a way to store the values of the arguments via a built in function that works like an array. try to avoid to using this. 
}
destination();

function multiDestination () {

}
/*
function createPerson(firstNameString, lastNameString, addressString){
	var personObject ={
		firstName: firstNameString,
		lastName: lastNameString, 
		address: addressString}
	
	return personObject;
}

var myFirstPerson = createPerson("Eguargo", "garcia", "244 mclean ave");
createPerson("irene", "flores", "mission st.");

console.log(myFirstPerson[0].firstName);

*/

var anotherArray = ["4 feet", "1 tail", "2 eyes"]; // this is just an example to compare how an array looks with an object.

var cat = {legs: 4, tails: 1, eyes: 2, cry: function() {console.log("meow")}, hungry: function(){console.log("feed me, I'm hungry")}} //no semicolon is needed for objects at end

console.log(cat.cry());
console.log(cat.hungry());

var dog = {ears: 2, heart: 1, lick: function(){console.log("I love you dad")}}

console.log(dog.lick());