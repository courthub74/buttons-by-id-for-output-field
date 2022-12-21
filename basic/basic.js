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
    // let first = document.getElementById("button1");
    // add event listener to button 1
    buttons.addEventListener('click', (e) => {
        // if button 1
        if(e.target && e.target.id === "one"){
            // extract the value from button 1
            let Uno = e.target.value;;
            // transfer to the same localStorage unit
            localStorage.setItem("BUTTON1", Uno);
        }
        if(e.target && e.target.id === "two"){
            // extract the value from button 2
            let Dos = e.target.value;
            // transfer to the same localStorage unit
            localStorage.setItem("BUTTON2", Dos);
        }
        if(e.target && e.target.id === "three"){
            let Tres = e.target.value;
            localStorage.setItem("BUTTON3", Tres);
        }
        if(e.target && e.target.id === "four"){
            let Quatro = e.target.value;
            localStorage.setItem("BUTTON4", Quatro);
        }
    // localStorage.setItem("BUTTONS", buttons);
    });
});