// js for outputs

window.addEventListener('load', () => {
    // retrive buttons
    var buttons = localStorage.getItem("BUTTONS");
    console.log(buttons);
    // ABOVE returns a div element []

    var button1 = localStorage.getItem("BUTTON1");
    console.log(button1);
    document.getElementById("show").innerHTML = button1;
    if(button1){
        document.getElementById("show").innerHTML = button1;
        console.log("button One Pressed");
    }
    
    var button2 = localStorage.getItem("BUTTON2");
    console.log(button2);
    if(button2){
        document.getElementById("show").innerHTML = button2;
        console.log("button Two Pressed");
    }

    var button3 = localStorage.getItem("BUTTON3");
    console.log(button3);
    if(button3){
        document.getElementById("show").innerHTML = button3;
        console.log("button Three Pressed");
    }

    var button4 = localStorage.getItem("BUTTON4");
    console.log(button4);
    if(button4){
        document.getElementById("show").innerHTML = button4;
        console.log("button Four Pressed");
    }
});


