// js for outputs

window.addEventListener('load', () => {
    // retrive buttons
    var buttons = localStorage.getItem("BUTTONS");
    console.log(buttons);
    // ABOVE returns a div element []

    var button1 = localStorage.getItem("BUTTON1");
    console.log(button1);
    document.getElementById("show").innerHTML = button1;


    var button2 = localStorage.getItem("BUTTON2");
    console.log(button2);
    document.getElementById("show").innerHTML = button2;


    var button3 = localStorage.getItem("BUTTON3");
    console.log(button3);
    document.getElementById("show").innerHTML = button3;
});


