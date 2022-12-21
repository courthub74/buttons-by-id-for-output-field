// First get the buttons value

// button 1
var butt1 = document.getElementById("button1").value;
// test print
console.log('Button 1:', butt1);
// button 2
var butt2 = document.getElementById("button2").value;
// test print
console.log('Button 2:', butt2);
// button 1
var butt3 = document.getElementById("button3").value;
// test print
console.log('Button 3:', butt3);

// display based on which one selected
// if(butt1.value == "One"){
//     butt1.style.display = ""
// }


// First create an array

const array = ["One", "Two", "Three", "Four"];

// Loop through the array

array.forEach(string =>{
    // console.log(string);
    // IF Statements for determining
    if (string == "One"){
        console.log("One")
        console.log("Remove 2, 3, 4");
    } else if (string == "Two"){
        console.log("Two");
        console.log("Remove 1, 3, 4");
    }
});