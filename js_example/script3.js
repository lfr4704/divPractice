
// this is a radio button application to do multiple operations based on selection of operation

function myFunction() {
	var firstNum = document.getElementById("num1").value; //value is a method that saves thet value of the id to firstNum
	
	var secondNum = document.getElementById("num2").value; //value is a method that saves thet value of the id to firstNum

	var result = document.getElementById()
	
	//var result = Number.parseInt(firstNum * secondNum);

	document.getElementById("result").value = result;

	console.log(result);
}


function add(x,y) {

	var z = x + y;

	return z ;
}

console.log(add(5,6));