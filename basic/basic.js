// js for basic

// one function
    // within it
// get the button by id 
// in the function add event listener to individual buttons
// in that perform the set item for each button

window.addEventListener('load', () =>{
    // render buttons by parent div
    let buttons = document.getElementById("buttons");
    console.log("The buttons div:", buttons);
    // button 1
    let first = document.getElementById("one");
    console.log("The button1 div:", first);
    // add event listener to button 1
    // You have to do each button for add event listner
    first.addEventListener('click', (e) => {
        // if button 1
        if(e.target && e.target.id === "one"){
            // extract the value from button 1
            let Uno = e.target.value;;
            // transfer to the same localStorage unit
            localStorage.setItem("BUTTON1", Uno);
        }
    // button 2
    let second = document.getElementById("two");
    console.log("The button2:", second);
    // add event listener to button 2
    second.addEventListener('click', (e) => {
        if(e.target && e.target.id === "two"){
            // extract the value from button 2
            let Dos = e.target.value;
            // transfer to the same localStorage unit
            localStorage.setItem("BUTTON2", Dos);
        }
    });
    // button 3
    let third = document.getElementById("three");
    console.log("The button3:", third);
    // add event listener to button 3
    third.addEventListener('click', (e) => {
        if(e.target && e.target.id === "three"){
            let Tres = e.target.value;
            localStorage.setItem("BUTTON3", Tres);
        }
    });
    // button 4
    let fourth = document.getElementById("four");
    console.log("The button4:", fourth);
    // add event listener to button 4
    fourth.addEventListener('click', (e) => {
        // add event listener to button 4
        if(e.target && e.target.id === "four"){
            let Quatro = e.target.value;
            localStorage.setItem("BUTTON4", Quatro);
        }
    })
    localStorage.setItem("BUTTONS", buttons);
    console.log("BUTTONS");
    });
});