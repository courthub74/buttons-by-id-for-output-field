// Buttons2 JS

// FIRST get the buttons by id

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


// NOW get it to print in the output on the display page
// Create functions for the onclick to get the value and print it in console
    // the functions will extract the value of each button
    // then set it into localStorage to be extracted by the display page
// then print it to the output div

// Do a getButton
function getButton(){
    let value1 = first.value;
    console.log(value1);
    localStorage.setItem("BUTTON1", value1);
    let value2 = second.value;
    console.log(value2);
    localStorage.setItem("BUTTON2", value2);
    let value3 = third.value;
    console.log(value3);
    localStorage.setItem("BUTTON3", value3);
}
// for Button 1
// function getButton1(){
//     let value1 = first.value;
//     console.log(value1);
//     localStorage.setItem("BUTTON1", value1);
    // call button1 function within here for display page
// };

// for Button 2
// function getButton2(){
//     let value2 = second.value;
//     console.log(value2);
//     localStorage.setItem("BUTTON2", value2);
// }

// for Button 3
// function getButton3(){
//     let value3 = third.value;
//     console.log(value3);
//     localStorage.setItem("BUTTON3", value3);
// }