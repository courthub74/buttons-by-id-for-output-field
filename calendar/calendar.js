// calendar JS

// get the dates by id

// 1st Date
let first = document.getElementById("first");
// test print
console.log(first);

// 2nd Date
let second = document.getElementById("second");
// test print
console.log(second);

// 3rd Date
let third = document.getElementById("third");
// test print
console.log(third);

// 4th Date
let fourth = document.getElementById("fourth");
// test print
console.log(fourth);

// 5th Date
let fifth = document.getElementById("fifth");
// test print
console.log(fifth);

// 6th Date
let sixth = document.getElementById("sixth");
// test print
console.log(sixth);

// 7th Date
let seventh = document.getElementById("seventh");
// test print
console.log(seventh);



// create a function that
    // extracts the value of first
    // and sets it in the show id

// date first
function getFirst(){
    let date1 = first.value;
    // test print
    console.log(date1);
    document.getElementById("show").innerHTML = date1;
};

// date second
function getSecond(){
    let date2 = second.value;
    // test print
    console.log(date2);
    document.getElementById("show").innerHTML = date2;
};

// date third
function getThird(){
   let date3 = third.value;
    // test print
    console.log(date3);
    document.getElementById("show").innerHTML = date3;
};

// date fourth
function getFourth(){
    let date4 = fourth.value;
    // test print
    console.log(date4);
    document.getElementById("show").innerHTML = date4;
};

// date fifth
function getFifth(){
    let date5 = fifth.value;
    // test print
    console.log(date5);
    document.getElementById("show").innerHTML = date5;
}
// date sixth
function getSixth(){
    let date6 = sixth.value;
    // test print
    console.log(date6);
    document.getElementById("show").innerHTML = date6;
}
// date fourth
function getSeventh(){
    let date7 = seventh.value;
    // test print
    console.log(date7);
    document.getElementById("show").innerHTML = date7;
}