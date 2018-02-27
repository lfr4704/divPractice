//1.  this is a function that calls for the function below "calculate(action)"

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
function bookCatalog (title,author) {

	return title + ", " + author;
}

console.log(bookCatalog("The old man and the sea", "Ernest Hemingway"));


//4.  this is a function that that is nested with a for loop



