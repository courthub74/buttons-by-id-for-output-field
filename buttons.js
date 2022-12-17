// buttons javascript

// get the buttons by id

// button 1 
let first = document.getElementById("button1");
// test print
console.log(first);

// button 2
let second = document.getElementById("button2");
// test print
console.log(second);

// button 3
let third = document.getElementById("button3");
// test print
console.log(third);

// NOW get it to print in the output
// Create functions for the onclick to get the value and print it in console
// then print it to the output div

// for Button One
function getButton1(){
	let value1 = first.value;
	console.log(value1);
	// NOW make it go to the show id div
	// change the innerHTML of the show id to value1
	document.getElementById("show").innerHTML = value1;
};

// for Button Two
function getButton2(){
	// extract the value of button 2 and store it into a variable
	let value2 = second.value;
	// test print
	console.log(value2);
	// change the innerHTML of the show id to value2
	document.getElementById("show").innerHTML = value2;
}

// for Button Three
function getButton3(){
	// extract the value of button 3 and store it into a variable
	let value3 = third.value;
	// test print
	console.log(value3);
	// change the innerHTML of the show id to value3
	document.getElementById("show").innerHTML = value3;
}

